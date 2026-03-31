/**
 * Internationalization (i18n) Module
 * 内嵌翻译数据，不依赖后台API
 */

const i18n = {
  currentLang: 'en',
  supportedLanguages: ['en', 'zh', 'vi', 'tl'],
  langNames: {
    'en': 'English',
    'zh': '中文',
    'vi': 'Tiếng Việt',
    'tl': 'Filipino'
  },
  langCodes: {
    'en': 'EN',
    'zh': '中文',
    'vi': 'VN',
    'tl': 'PH'
  },

  // 翻译数据（内嵌，不依赖后台API）
  translations: {
    en: getEnglishTranslations(),
    zh: getChineseTranslations(),
    vi: getVietnameseTranslations(),
    tl: getFilipinoTranslations()
  },

  /**
   * 获取翻译文本
   * @param {string} key - 翻译键，支持点号分隔的路径（如 "nav.home"）
   * @returns {string} 翻译文本
   */
  t(key) {
    const keys = key.split('.');
    let value = i18n.translations[i18n.currentLang];

    for (const k of keys) {
      if (value && value[k] !== undefined) {
        value = value[k];
      } else {
        return key; // 如果找不到翻译，返回键名
      }
    }

    return value || key;
  },

  /**
   * 切换语言
   * @param {string} lang - 语言代码
   */
  changeLanguage(lang) {
    if (!i18n.supportedLanguages.includes(lang)) {
      console.warn(`Unsupported language: ${lang}`);
      return;
    }

    const oldLang = i18n.currentLang;
    i18n.currentLang = lang;

    // 保存到 localStorage
    localStorage.setItem('jinyu_lang', lang);

    // 应用翻译
    i18n.applyTranslations();

    // 触发自定义事件
    document.dispatchEvent(new CustomEvent('langChange', {
      detail: { lang, oldLang }
    }));

    console.log(`Language changed from ${oldLang} to ${lang}`);
  },

  /**
   * 应用翻译到所有带有 data-i18n 属性的元素
   */
  applyTranslations() {
    // 处理 data-i18n 属性（纯文本）
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      const translation = i18n.t(key);

      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = translation;
      } else {
        el.textContent = translation;
      }
    });

    // 处理 data-i18n-html 属性（支持 HTML 标签）
    const htmlElements = document.querySelectorAll('[data-i18n-html]');
    htmlElements.forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      const translation = i18n.t(key);
      el.innerHTML = translation;
    });
  }
};

// ========================================
// 语言切换器初始化函数
i18n.initSwitcher = function() {
    const switcher = document.getElementById('language-switcher');
    if (!switcher) {
      console.warn('Language switcher element not found');
      return;
    }

    const display = switcher.querySelector('.lang-display');
    const codeSpan = switcher.querySelector('.lang-code');

    console.log('Language switcher found:', switcher);
    console.log('Lang display:', display);
    console.log('Lang code span:', codeSpan);

    // 创建下拉菜单
    const dropdown = document.createElement('div');
    dropdown.className = 'lang-dropdown';
    
    // 添加下拉菜单箭头
    const arrow = document.createElement('div');
    arrow.className = 'lang-dropdown-arrow';
    dropdown.appendChild(arrow);
    
    // 添加语言选项
    dropdown.innerHTML += i18n.supportedLanguages.map(lang => `
      <button class="lang-option ${lang === i18n.currentLang ? 'active' : ''}" data-lang="${lang}">
        <span class="lang-code">${i18n.langCodes[lang]}</span>
        <span class="lang-name">${i18n.langNames[lang]}</span>
      </button>
    `).join('');

    switcher.appendChild(dropdown);

    // 切换下拉菜单
    display.addEventListener('click', (e) => {
      e.stopPropagation();
      console.log('Language display clicked');
      dropdown.classList.toggle('show');
      console.log('Dropdown class:', dropdown.className);
    });

    // 点击外部关闭
    document.addEventListener('click', (e) => {
      if (!switcher.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.classList.remove('show');
      }
    });

    // 选择语言
    dropdown.addEventListener('click', (e) => {
      const btn = e.target.closest('.lang-option');
      if (btn) {
        const lang = btn.getAttribute('data-lang');
        i18n.changeLanguage(lang);
        dropdown.classList.remove('show');
      }
    });

    // 更新显示
    function updateDisplay() {
      codeSpan.textContent = i18n.langCodes[i18n.currentLang];
      
      // 更新下拉菜单中当前语言的高亮状态
      if (dropdown) {
        dropdown.querySelectorAll('.lang-option').forEach(option => {
          const lang = option.getAttribute('data-lang');
          if (lang === i18n.currentLang) {
            option.classList.add('active');
          } else {
            option.classList.remove('active');
          }
        });
      }
    }

    // 监听语言变化
    document.addEventListener('langChange', () => {
      updateDisplay();
    });

    // 初始化显示
    updateDisplay();
  };

// ========================================
// 初始化
// ========================================
(function init() {
  // 从 localStorage 读取上次使用的语言
  const savedLang = localStorage.getItem('jinyu_lang');
  if (savedLang && i18n.supportedLanguages.includes(savedLang)) {
    i18n.currentLang = savedLang;
  }

  // 应用当前语言的翻译
  i18n.applyTranslations();
  
  // 延迟初始化语言切换器，确保DOM完全加载
  function initLanguageSwitcher() {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function() {
        console.log('DOM fully loaded, initializing language switcher');
        i18n.initSwitcher();
      });
    } else {
      console.log('DOM already loaded, initializing language switcher');
      i18n.initSwitcher();
    }
  }
  
  initLanguageSwitcher();

  console.log(`i18n initialized with language: ${i18n.currentLang}`);
})();

// ========================================
// 翻译数据（内嵌，2009年成立）
// ========================================

function getEnglishTranslations() {
  return {
    "langName": "English",
    "langCode": "EN",
    "nav": {
      "home": "Home",
      "products": "Products",
      "applications": "Applications",
      "caseStudies": "Case Studies",
      "blog": "News",
      "aboutUs": "About Us",
      "contactUs": "Contact Us",
      "getQuote": "Get a Quote",
      "products_sub": {
        "pvcFoamBoard": "PVC Foam Board",
        "acrylicSheet": "Acrylic Sheet",
        "aluminumPanel": "Aluminum Composite Panel",
        "ppHollowSheet": "PP Hollow Sheet",
        "selfAdhesiveVinyl": "Self Adhesive Vinyl",
        "flexBanner": "Flex Banner",
        "reflectiveSheet": "Reflective Sheet"
      },
      "applications_sub": {
        "signBoard": "Sign Board",
        "lightBox": "Light Box",
        "digitalPrinting": "Digital Printing",
        "outdoorAdvertising": "Outdoor Advertising",
        "exhibitionDisplay": "Exhibition Display"
      },
      "caseStudies_sub": {
        "supermarket": "Supermarket Sign Project",
        "mallLightbox": "Mall Light Box Project",
        "outdoorBillboard": "Outdoor Billboard Project",
        "shopSign": "Shop Sign Project"
      },
      "blog_sub": {
        "industryKnowledge": "Industry Knowledge",
        "materialGuide": "Material Guide",
        "printingTechnology": "Printing Technology"
      },
      "about_sub": {
        "companyProfile": "Company Profile",
        "factory": "Factory",
        "productionCapacity": "Production Capacity",
        "certificates": "Certificates"
      }
    },
    "hero": {
      "badge": "ISO 9001 Certified Manufacturer · Est. 2009",
      "title": "Your <span class=\"hero-accent\">#1</span> Advertising<br>Material<br>Factory in China",
      "subtitle": "Foshan Jin Yu Advertising Material Co., Ltd – Professional manufacturer of PVC foam board, acrylic sheet, vinyl, flex banner, reflective sheet and advertising accessories. Trusted by buyers across Europe, Americas, Southeast Asia & Middle East.",
      "exploreProducts": "Explore Products",
      "getQuote": "Get a Quote",
      "stats": {
        "countries": "Countries & Regions",
        "products": "Core Product Lines",
        "clients": "Global Clients",
        "certified": "Quality Certified"
      }
    },
    "home": {
      "productsTitle": "Our Products",
      "productsSubtitle": "Comprehensive range of advertising materials for global markets",
      "whyChooseTitle": "Why Choose Us",
      "whyChooseSubtitle": "Trusted by 500+ clients in 50+ countries",
      "features": {
        "factory": {
          "title": "Direct Factory Price",
          "desc": "Competitive pricing without middlemen"
        },
        "quality": {
          "title": "ISO 9001 Certified",
          "desc": "Strict quality control system"
        },
        "export": {
          "title": "Global Export",
          "desc": "50+ countries worldwide"
        },
        "custom": {
          "title": "Custom Solutions",
          "desc": "OEM/ODM services available"
        }
      },
      "applicationsTitle": "Applications",
      "applicationsSubtitle": "Wide range of applications for advertising and display",
      "ctaTitle": "Ready to Get Started?",
      "ctaSubtitle": "Contact us today for competitive quotes and expert advice",
      "ctaButton": "Contact Us Now"
    },
    "products": {
      "title": "Advertising Material Products",
      "subtitle": "Comprehensive range of advertising substrates and display materials. Factory-direct pricing, custom specifications, global shipping.",
      "categories": {
        "selfAdhesiveVinyl": "Self Adhesive Vinyl",
        "flexBanner": "PVC Flex Banner",
        "oneWayVision": "One Way Vision",
        "cuttingVinyl": "Cutting Vinyl",
        "polymericVinyl": "Polymeric Vinyl & Cold Lamination",
        "windowFilm": "Window Film & Reflective Sheet",
        "pvcFoamBoard": "PVC Foam Board",
        "acrylicSheet": "Acrylic Sheet",
        "aluminumPanel": "Aluminum Composite Panel",
        "ppHollowSheet": "PP Hollow Sheet",
        "displayStand": "Display Stands",
        "accessories": "Accessories"
      },
      "pageSubtitle": "Factory-direct advertising materials. Custom specs, competitive pricing, global shipping."
    },
    "productDetail": {
      "specifications": "Specifications",
      "features": "Features",
      "applications": "Applications",
      "requestQuote": "Request Quote",
      "backToProducts": "Back to Products"
    },
    "whyChooseUs": {
      "title": "Your Reliable Advertising Material Partner",
      "subtitle": "We combine manufacturing excellence with global trade expertise to deliver consistent quality and competitive pricing for B2B buyers worldwide."
    },
    "applications": {
      "title": "Where Our Materials Perform",
      "subtitle": "Our advertising materials are trusted across a wide range of commercial and industrial sign-making applications globally."
    },
    "caseStudies": {
      "title": "Real Projects. Real Results.",
      "subtitle": "See how our advertising materials have been deployed in commercial projects across multiple markets worldwide.",
      "viewAll": "View All Case Studies"
    },
    "about": {
      "title": "About Foshan Jin Yu",
      "subtitle": "Professional advertising materials manufacturer integrating design, R&D, production and global sales since 2009.",
      "profileTitle": "Company Profile",
      "whoWeAre": "Who We Are",
      "whoWeAreText": "Foshan Jin Yu Advertising Material Co., Ltd is a professional manufacturer of advertising materials established in 2009. We are located in the U+Zhigu Industrial Park, LiShui Town, Nanhai District, Foshan City, Guangdong Province – one of China's most concentrated hubs for advertising material production.",
      "whoWeAreText2": "Our business integrates design, research and development, production and sales of advertising materials including self adhesive vinyl, PVC flex banner, PVC foam board, acrylic sheet, aluminum composite panel, PP hollow sheet, reflective sheeting, display stands and sign-making accessories.",
      "whoWeAreText3": "We export to Southeast Asia, Europe, the Americas, the Middle East and other global markets. Our products are known for durability, customizability, and competitive factory-direct pricing.",
      "yearEstablished": "Year Established",
      "exportCountries": "Export Countries",
      "isoCertified": "ISO 9001 Certified",
      "timeline": {
        "2009": "Company established in Foshan",
        "2012": "Started exporting to Southeast Asia",
        "2015": "Expanded product line to include acrylic sheets",
        "2018": "Achieved ISO 9001 certification",
        "2020": "Launched new production facility",
        "2024": "Reached 50+ export countries"
      }
    },
    "contact": {
      "title": "Contact Us",
      "subtitle": "Get in touch for product inquiries and quotations",
      "name": "Your Name",
      "email": "Email Address",
      "phone": "Phone Number",
      "company": "Company Name",
      "message": "Message",
      "submit": "Send Message",
      "success": "Thank you for your message. We will get back to you soon!"
    },
    "trust": {
      "ownFactory": "Own Factory in Foshan",
      "export50": "Export to 50+ Countries",
      "iso": "ISO 9001 Certified",
      "rd": "In-house R&D Team",
      "packaging": "Custom Export Packaging",
      "whatsapp": "WhatsApp: +86 138 0882 8019"
    },
    "footer": {
      "brand": "Foshan Jin Yu Advertising Material Co., Ltd",
      "brandDesc": "Professional manufacturer of PVC foam board, acrylic sheet, vinyl, flex banner, reflective sheet and advertising accessories.",
      "quickLinks": "Quick Links",
      "products": "Products",
      "applications": "Applications",
      "caseStudies": "Case Studies",
      "blog": "News",
      "aboutUs": "About Us",
      "contactUs": "Contact Us",
      "contactInfo": "Contact Info",
      "copyright": "© 2009-2024 Foshan Jin Yu Advertising Material Co., Ltd. All rights reserved."
    }
  };
}

function getChineseTranslations() {
  return {
    "langName": "中文",
    "langCode": "中文",
    "nav": {
      "home": "首页",
      "products": "产品",
      "applications": "应用场景",
      "caseStudies": "案例研究",
      "blog": "新闻",
      "aboutUs": "关于我们",
      "contactUs": "联系我们",
      "getQuote": "获取报价"
    },
    "hero": {
      "badge": "ISO 9001认证制造商 · 成立于2009年",
      "title": "中国<span style=\"color: #E8751A; font-weight: bold;\">头部</span>广告材料工厂",
      "subtitle": "佛山市金昱广告材料有限公司——专业生产PVC泡沫板、亚克力板、乙烯基板、柔性横幅、反光板及广告配件。深受欧洲、美洲、东南亚及中东买家的信赖。",
      "getQuote": "获取报价",
      "stats": {
        "countries": "出口国家",
        "products": "产品系列",
        "clients": "全球客户",
        "certified": "ISO 9001认证"
      }
    },
    "products": {
      "title": "广告材料产品",
      "subtitle": "全系列广告基材和展示材料。工厂直销价，定制规格，全球发货。",
      "pageSubtitle": "工厂直销广告材料。定制规格，有竞争力价格，全球发货。"
    },
    "productDetail": {
      "specifications": "产品规格",
      "features": "产品特性",
      "applications": "应用场景",
      "requestQuote": "获取报价",
      "backToProducts": "返回产品"
    },
    "whyChooseUs": {
      "title": "您的可靠广告材料合作伙伴",
      "subtitle": "我们结合卓越制造和全球贸易专业知识，为全球B2B买家提供一致的质量和有竞争力的定价。"
    },
    "applications": {
      "title": "我们的材料应用领域",
      "subtitle": "我们的广告材料在全球各种商业和工业标牌应用中得到信赖。"
    },
    "caseStudies": {
      "title": "真实项目。真实结果。",
      "subtitle": "看看我们的广告材料如何在多个市场的商业项目中部署。",
      "viewAll": "查看所有案例研究"
    },
    "about": {
      "title": "关于佛山金昱",
      "subtitle": "专业广告材料制造商，自2009年起集设计、研发、生产、销售于一体。",
      "whoWeAreText": "佛山金昱广告材料有限公司是一家专业的广告材料制造商，成立于2009年。公司位于广东省佛山市南海区里水镇U+志高工业园区——中国广告材料生产最集中的地区之一。",
      "timeline": {
        "2009": "公司在佛山成立",
        "2012": "开始出口东南亚",
        "2015": "扩展产品线至亚克力板",
        "2018": "获得ISO 9001认证",
        "2020": "启动新生产基地",
        "2024": "出口国家达50+"
      }
    },
    "contact": {
      "title": "联系我们",
      "subtitle": "联系我们获取产品咨询和报价",
      "name": "您的姓名",
      "email": "邮箱地址",
      "phone": "电话号码",
      "company": "公司名称",
      "message": "留言",
      "submit": "发送留言"
    },
    "trust": {
      "ownFactory": "佛山自有工厂",
      "export50": "出口50+国家",
      "iso": "ISO 9001认证",
      "rd": "自主研发团队",
      "packaging": "出口级定制包装",
      "whatsapp": "WhatsApp: +86 138 0882 8019"
    },
    "footer": {
      "brand": "佛山金昱广告材料有限公司",
      "brandDesc": "专业生产PVC泡沫板、亚克力板、贴纸、灯箱布、反光贴及广告配件。",
      "copyright": "© 2009-2024 佛山金昱广告材料有限公司 版权所有。"
    }
  };
}

function getVietnameseTranslations() {
  return {
    "langName": "Tiếng Việt",
    "langCode": "VN",
    "nav": {
      "home": "Trang chủ",
      "products": "Sản phẩm",
      "applications": "Ứng dụng",
      "caseStudies": "Dự án",
      "blog": "Tin tức",
      "aboutUs": "Về chúng tôi",
      "contactUs": "Liên hệ",
      "getQuote": "Báo giá"
    },
    "hero": {
      "badge": "Nhà sản xuất ISO 9001 · Thành lập 2009",
      "title": "Nhà Máy Vật Liệu Quảng Cáo <span style=\"color: #E8751A; font-weight: bold;\">Hàng Đầu</span> Trung Quốc",
      "subtitle": "Công ty TNHH Vật liệu Quảng cáo Foshan Jin Yu – Nhà sản xuất chuyên nghiệp tấm PVC foam, tấm acrylic, decal, bạt flex, tấm phản quang và phụ kiện quảng cáo. Được khách hàng tại Châu Âu, Châu Mỹ, Đông Nam Á và Trung Đông tin tưởng.",
      "getQuote": "Báo giá"
    },
    "products": {
      "title": "Sản phẩm Vật liệu Quảng cáo",
      "subtitle": "Đa dạng vật liệu quảng cáo và trưng bày. Giá nhà máy, thông số tùy chỉnh, vận chuyển toàn cầu."
    },
    "productDetail": {
      "specifications": "Thông số kỹ thuật",
      "features": "Tính năng",
      "applications": "Ứng dụng",
      "requestQuote": "Báo giá",
      "backToProducts": "Trở về sản phẩm"
    },
    "about": {
      "title": "Về Foshan Jin Yu",
      "subtitle": "Nhà sản xuất vật liệu quảng cáo chuyên nghiệp, tích hợp thiết kế, R&D, sản xuất và bán hàng toàn cầu từ năm 2009.",
      "whoWeAreText": "Công ty TNHH Vật liệu Quảng cáo Foshan Jin Yu là nhà sản xuất vật liệu quảng cáo chuyên nghiệp được thành lập năm 2009. Chúng tôi tọa lạc tại Khu công nghiệp U+Zhigu, thị trấn LiShui, quận Nanhai, thành phố Foshan, tỉnh Quảng Đông – một trong những trung tâm sản xuất vật liệu quảng cáo tập trung nhất tại Trung Quốc."
    },
    "trust": {
      "ownFactory": "Nhà máy riêng tại Foshan",
      "export50": "Xuất khẩu tới 50+ quốc gia",
      "iso": "Chứng nhận ISO 9001",
      "rd": "Đội ngũ R&D nội bộ",
      "packaging": "Đóng gói xuất khẩu tùy chỉnh",
      "whatsapp": "WhatsApp: +86 138 0882 8019"
    }
  };
}

function getFilipinoTranslations() {
  return {
    "langName": "Filipino",
    "langCode": "PH",
    "nav": {
      "home": "Home",
      "products": "Mga Produkto",
      "applications": "Mga Application",
      "caseStudies": "Mga Case Studies",
      "blog": "Balita",
      "aboutUs": "Tungkol sa Amin",
      "contactUs": "Makipag-ugnayan",
      "getQuote": "Kumuha ng Quote"
    },
    "hero": {
      "badge": "ISO 9001 Certified Manufacturer · Est. 2009",
      "title": "Your <span style=\"color: #E8751A; font-weight: bold;\">#1</span> Advertising Material Factory in China",
      "subtitle": "Foshan Jin Yu Advertising Material Co., Ltd – Propesyonal na manufacturer ng PVC foam board, acrylic sheet, vinyl, flex banner, reflective sheet at mga accessories sa advertising. Pinagkakatiwalaan ng mga buyer sa Europe, Americas, Southeast Asia at Middle East.",
      "getQuote": "Kumuha ng Quote"
    },
    "products": {
      "title": "Mga Produkto sa Advertising Material",
      "subtitle": "Kumpletong hanay ng mga materyales sa advertising at display. Factory-direct na pricing, custom specifications, global shipping."
    },
    "productDetail": {
      "specifications": "Mga Specifications",
      "features": "Mga Features",
      "applications": "Mga Application",
      "requestQuote": "Kumuha ng Quote",
      "backToProducts": "Bumalik sa Produkto"
    },
    "about": {
      "title": "Tungkol sa Foshan Jin Yu",
      "subtitle": "Propesyonal na manufacturer ng mga materyales sa advertising na nagbibigkis ng design, R&D, production at global sales simula 2009."
    },
    "trust": {
      "ownFactory": "Sariling Pabrika sa Foshan",
      "export50": "Nag-eeksport sa 50+ Bansa",
      "iso": "ISO 9001 Sertipikado",
      "rd": "In-house R&D Team",
      "packaging": "Custom Export Packaging",
      "whatsapp": "WhatsApp: +86 138 0882 8019"
    }
  };
}
