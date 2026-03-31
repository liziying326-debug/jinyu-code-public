/**
 * JinYu Frontend Server
 *
 * 环境变量（创建 frontend/.env 文件或通过系统环境注入）：
 *   PORT          前台监听端口，默认 3011
 *   ADMIN_HOST    后台服务 hostname，默认 127.0.0.1
 *   ADMIN_PORT    后台服务端口，默认 3020
 *   ADMIN_PROTOCOL http | https，默认 http
 *
 * 本地开发：无需任何配置，直接 node server.js 即可
 * VPS 生产：创建 frontend/.env，填写实际值
 */

// ── 加载 .env（如果存在）──────────────────────────────────────────
const fs = require('fs');
const path = require('path');
const envFile = path.join(__dirname, '.env');
if (fs.existsSync(envFile)) {
  fs.readFileSync(envFile, 'utf8')
    .split('\n')
    .forEach(line => {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) return;
      const eqIdx = trimmed.indexOf('=');
      if (eqIdx < 1) return;
      const key = trimmed.slice(0, eqIdx).trim();
      const val = trimmed.slice(eqIdx + 1).trim().replace(/^["']|["']$/g, '');
      if (key && !(key in process.env)) process.env[key] = val;
    });
}

const http = require('http');
const https = require('https');
const url = require('url');

const PORT          = parseInt(process.env.PORT)          || 3011;
const ADMIN_HOST    = process.env.ADMIN_HOST              || '127.0.0.1';
const ADMIN_PORT    = parseInt(process.env.ADMIN_PORT)    || 3020;
const ADMIN_PROTO   = process.env.ADMIN_PROTOCOL          || 'http';  // http | https

// 浏览量数据文件（写到 admin/data/ 供后台读取）
// 生产环境若前后台不在同一机器，此功能自动跳过
const PAGEVIEWS_FILE = path.join(__dirname, '../admin/data/pageviews.json');

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.js':   'text/javascript; charset=utf-8',
  '.css':  'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif':  'image/gif',
  '.svg':  'image/svg+xml',
  '.ico':  'image/x-icon',
  '.webp': 'image/webp',
  '.woff':  'font/woff',
  '.woff2': 'font/woff2',
};

// ── 浏览量记录 ──────────────────────────────────────────────────
function readPageviews() {
  if (!fs.existsSync(PAGEVIEWS_FILE)) return { daily: {}, monthly: {} };
  try { return JSON.parse(fs.readFileSync(PAGEVIEWS_FILE, 'utf8')); }
  catch { return { daily: {}, monthly: {} }; }
}

function recordPageview(pathname) {
  const ext = path.extname(pathname).toLowerCase();
  const STATIC_EXTS = ['.js','.css','.json','.png','.jpg','.jpeg','.gif','.svg','.ico','.webp','.woff','.woff2','.ttf','.eot','.map'];
  if (STATIC_EXTS.includes(ext)) return;
  if (ext && ext !== '.html') return;
  if (pathname.startsWith('/images/')) return;

  const now      = new Date();
  const todayKey = now.toISOString().slice(0, 10);
  const monthKey = now.toISOString().slice(0, 7);

  try {
    const data = readPageviews();
    data.daily[todayKey]   = (data.daily[todayKey]   || 0) + 1;
    data.monthly[monthKey] = (data.monthly[monthKey] || 0) + 1;

    const dayKeys = Object.keys(data.daily).sort();
    if (dayKeys.length > 90) dayKeys.slice(0, dayKeys.length - 90).forEach(k => delete data.daily[k]);
    const monthKeys = Object.keys(data.monthly).sort();
    if (monthKeys.length > 12) monthKeys.slice(0, monthKeys.length - 12).forEach(k => delete data.monthly[k]);

    fs.writeFileSync(PAGEVIEWS_FILE, JSON.stringify(data, null, 2), 'utf8');
  } catch { /* 写入失败不影响访问 */ }
}

// ── 反向代理（将 /api/* /images/* /uploads/* 转发到后台）─────────
function proxyToAdmin(req, res) {
  const transport = ADMIN_PROTO === 'https' ? https : http;

  const options = {
    hostname: ADMIN_HOST,
    port:     ADMIN_PORT,
    path:     req.url,
    method:   req.method,
    headers: {
      ...req.headers,
      host: `${ADMIN_HOST}:${ADMIN_PORT}`,
    },
  };

  const proxyReq = transport.request(options, (proxyRes) => {
    res.writeHead(proxyRes.statusCode, proxyRes.headers);
    proxyRes.pipe(res, { end: true });
  });

  proxyReq.on('error', (err) => {
    console.error('[proxy error]', err.message);
    res.writeHead(502, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ success: false, message: 'Admin service unavailable' }));
  });

  req.pipe(proxyReq, { end: true });
}

// ── 翻译代理（国内可访问，服务端转发）──────────────────────────
// GET /api/translate?text=...&from=zh&to=en
// 主接口：有道翻译（无需Key，国内稳定）
// 备用接口：MyMemory（全球可用）
function handleTranslate(req, res) {
  const parsedQ = url.parse(req.url, true);
  const { text, from, to } = parsedQ.query;
  if (!text || !to) {
    res.writeHead(400, { 'Content-Type': 'application/json; charset=utf-8' });
    return res.end(JSON.stringify({ success: false, result: text || '' }));
  }

  // 语言代码映射（有道格式）
  const YOUDAO_LANG = { zh: 'zh-CHS', en: 'en', vi: 'vi', tl: 'tl', auto: 'auto' };
  const fromCode = YOUDAO_LANG[from] || 'auto';
  const toCode   = YOUDAO_LANG[to]   || 'en';

  // 有道免费接口
  const youdaoPath = '/translate?doctype=json&type=' + fromCode + '2' + toCode
    + '&i=' + encodeURIComponent(text);

  const youdaoOpt = {
    hostname: 'fanyi.youdao.com',
    path: youdaoPath,
    method: 'GET',
    headers: { 'User-Agent': 'Mozilla/5.0', 'Referer': 'https://fanyi.youdao.com/' }
  };

  function fallbackMyMemory(originalText) {
    // MyMemory 免费接口（备用）
    const mmLang = { zh: 'zh-CN', en: 'en', vi: 'vi', tl: 'tl' };
    const langPair = (mmLang[from] || 'en') + '|' + (mmLang[to] || 'en');
    const mmPath = '/get?q=' + encodeURIComponent(originalText) + '&langpair=' + encodeURIComponent(langPair);
    const mmOpt = {
      hostname: 'api.mymemory.translated.net',
      path: mmPath,
      method: 'GET',
      headers: { 'User-Agent': 'Mozilla/5.0' }
    };
    let body = '';
    const mmReq = https.request(mmOpt, mmRes => {
      mmRes.on('data', d => { body += d; });
      mmRes.on('end', () => {
        try {
          const j = JSON.parse(body);
          const translated = j.responseData && j.responseData.translatedText;
          if (translated && translated !== 'QUERY LENGTH LIMIT EXCEEDED') {
            res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8', 'Access-Control-Allow-Origin': '*' });
            return res.end(JSON.stringify({ success: true, result: translated }));
          }
        } catch(e) {}
        // 全部失败，返回原文
        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8', 'Access-Control-Allow-Origin': '*' });
        res.end(JSON.stringify({ success: false, result: originalText }));
      });
    });
    mmReq.on('error', () => {
      res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8', 'Access-Control-Allow-Origin': '*' });
      res.end(JSON.stringify({ success: false, result: originalText }));
    });
    mmReq.end();
  }

  let body = '';
  const ydReq = https.request(youdaoOpt, ydRes => {
    ydRes.on('data', d => { body += d; });
    ydRes.on('end', () => {
      try {
        const j = JSON.parse(body);
        // 有道返回格式：{ translateResult: [[{tgt:"..."}]], errorCode: "0" }
        const tgt = j.translateResult && j.translateResult[0] && j.translateResult[0][0] && j.translateResult[0][0].tgt;
        if (j.errorCode === '0' && tgt) {
          res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8', 'Access-Control-Allow-Origin': '*' });
          return res.end(JSON.stringify({ success: true, result: tgt }));
        }
      } catch(e) {}
      // 有道失败，走备用 MyMemory
      fallbackMyMemory(text);
    });
  });
  ydReq.on('error', () => fallbackMyMemory(text));
  ydReq.end();
}

// ── HTTP 服务器 ─────────────────────────────────────────────────
const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url);
  let pathname = parsedUrl.pathname;

  // 翻译代理（国内可访问）
  if (pathname === '/api/translate' && req.method === 'GET') return handleTranslate(req, res);

  // /api/* → 代理到后台
  if (pathname.startsWith('/api/')) return proxyToAdmin(req, res);

  // 图片/上传目录 → 代理到后台（后台上传的图片可在前台访问）
  if (pathname.startsWith('/uploads/')
   || pathname.startsWith('/admin-images/')
   || pathname.startsWith('/about-uploads/')
   || pathname.startsWith('/homepage-uploads/')) {
    return proxyToAdmin(req, res);
  }

  // 根路径 → index.html
  if (pathname === '/') pathname = '/index.html';

  // 浏览量统计（仅统计真实访客，排除本地 IP）
  if (req.method === 'GET') {
    const clientIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress || '';
    const isLocal  = ['127.0.0.1','::1','::ffff:127.0.0.1'].some(ip => clientIp.startsWith(ip));
    if (!isLocal) recordPageview(pathname);
  }

  // 静态文件服务
  const filePath    = path.join(__dirname, pathname);
  const ext         = path.extname(filePath);
  const contentType = mimeTypes[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end('<h1>404 Not Found</h1>');
      return;
    }
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(data);
  });
});

server.listen(PORT, () => {
  const adminUrl = `${ADMIN_PROTO}://${ADMIN_HOST}:${ADMIN_PORT}`;
  console.log(`✅ JinYu 前台已启动: http://localhost:${PORT}/`);
  console.log(`   后台代理目标: ${adminUrl}`);
});
