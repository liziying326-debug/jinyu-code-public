// API Client - 不影响原有i18n.js功能
// 只在需要动态加载数据时使用

const API_BASE = window.location.origin;

// 加载产品数据
async function fetchProducts() {
  try {
    const response = await fetch(`${API_BASE}/api/products`);
    return await response.json();
  } catch (error) {
    console.error('Failed to load products:', error);
    return null;
  }
}

// 加载翻译
async function fetchTranslations(lang = 'en') {
  try {
    const response = await fetch(`${API_BASE}/api/i18n/${lang}`);
    return await response.json();
  } catch (error) {
    console.error('Failed to load translations:', error);
    return null;
  }
}

// 提交联系表单
async function submitContact(formData) {
  try {
    const response = await fetch(`${API_BASE}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    return await response.json();
  } catch (error) {
    console.error('Failed to submit form:', error);
    return { success: false, error: 'Network error' };
  }
}
