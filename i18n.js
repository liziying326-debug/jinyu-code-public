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
   * @param {boolean} updateURL - 是否更新URL参数
   */
  changeLanguage(lang, updateURL = true) {
    if (!i18n.supportedLanguages.includes(lang)) {
      console.warn(`Unsupported language: ${lang}`);
      return;
    }

    const oldLang = i18n.currentLang;
    if (lang === oldLang) return; // 相同语言不处理

    i18n.currentLang = lang;

    // 保存到 localStorage
    localStorage.setItem('jinyu_lang', lang);

    // 更新URL参数（如果支持且需要）
    if (updateURL && typeof URLSearchParams !== 'undefined' && typeof history !== 'undefined') {
      const url = new URL(window.location);
      url.searchParams.set('lang', lang);
      history.replaceState(null, '', url.toString());
    }

    // 应用翻译
    i18n.applyTranslations();

    // 更新语言切换器显示
    i18n.updateLanguageSwitcherDisplay();

    // 触发自定义事件（更详细的信息）
    document.dispatchEvent(new CustomEvent('languageChanged', {
      detail: { 
        lang, 
        oldLang,
        timestamp: Date.now(),
        source: 'user' // 或 'auto'、'url'等
      }
    }));

    // 触发页面特定的事件，通知需要重新加载数据的组件
    document.dispatchEvent(new CustomEvent('languageChangeComplete', {
      detail: { lang, oldLang }
    }));

    console.log(`Language changed from ${oldLang} to ${lang}`);
  },

  /**
   * 更新语言切换器的显示
   */
  updateLanguageSwitcherDisplay() {
    const switcher = document.getElementById('language-switcher');
    if (!switcher) return;
    
    const codeSpan = switcher.querySelector('.lang-code');
    const display = switcher.querySelector('.lang-display');
    const dropdown = switcher.querySelector('.lang-dropdown');
    
    if (codeSpan) {
      codeSpan.textContent = i18n.langCodes[i18n.currentLang];
    }
    
    if (display) {
      display.textContent = i18n.langNames[i18n.currentLang];
    }
    
    // 更新下拉菜单中的活动状态
    if (dropdown) {
      const options = dropdown.querySelectorAll('.lang-option');
      options.forEach(option => {
        const lang = option.getAttribute('data-lang');
        if (lang === i18n.currentLang) {
          option.classList.add('active');
        } else {
          option.classList.remove('active');
        }
      });
    }
    
    console.log('Language switcher display updated for:', i18n.currentLang);
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

    // 更新语言切换器显示
    this.updateLanguageSwitcherDisplay();
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
  // 1. 检查URL参数（优先级最高）
  let urlLang = null;
  if (typeof URLSearchParams !== 'undefined') {
    const urlParams = new URLSearchParams(window.location.search);
    urlLang = urlParams.get('lang');
    if (urlLang && i18n.supportedLanguages.includes(urlLang)) {
      i18n.currentLang = urlLang;
      console.log(`Language set from URL parameter: ${urlLang}`);
    }
  }

  // 2. 从 localStorage 读取上次使用的语言（优先级次之）
  if (!urlLang) {
    const savedLang = localStorage.getItem('jinyu_lang');
    if (savedLang && i18n.supportedLanguages.includes(savedLang)) {
      i18n.currentLang = savedLang;
      console.log(`Language set from localStorage: ${savedLang}`);
    }
  }

  // 3. 浏览器语言检测（优先级最低）
  if (!urlLang && !localStorage.getItem('jinyu_lang')) {
    const browserLang = navigator.language || navigator.userLanguage;
    if (browserLang) {
      // 简化语言代码（如 'zh-CN' -> 'zh'）
      const simpleLang = browserLang.split('-')[0].toLowerCase();
      if (i18n.supportedLanguages.includes(simpleLang)) {
        i18n.currentLang = simpleLang;
        console.log(`Language set from browser detection: ${simpleLang}`);
      }
    }
  }

  // 延迟初始化翻译和语言切换器，确保DOM完全加载
  function initI18nSystem() {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function() {
        console.log('DOM fully loaded, initializing i18n system');
        i18n.applyTranslations();
        i18n.initSwitcher();
        
        // 初始化后，如果URL中有语言参数，更新显示但不保存到localStorage
        if (urlLang) {
          // 只更新显示，不触发保存（因为URL参数是临时性的）
          i18n.applyTranslations();
        }
      });
    } else {
      console.log('DOM already loaded, initializing i18n system');
      i18n.applyTranslations();
      i18n.initSwitcher();
      
      // 初始化后，如果URL中有语言参数，更新显示但不保存到localStorage
      if (urlLang) {
        i18n.applyTranslations();
      }
    }
  }
  
  initI18nSystem();

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
      "news": "News",
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
      "downloadCatalog": "Download Catalog",
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
      "title": "Full Range of Advertising Materials",
      "subtitle": "From rigid boards to flexible vinyl films, we manufacture and supply a comprehensive range of advertising materials for sign-making, digital printing, and display applications worldwide.",
      "label": "Our Products",
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
      "pageSubtitle": "Factory-direct advertising materials. Custom specs, competitive pricing, global shipping.",
      "viewAll": "View All Products"
    },
    "products_page": {
      "cat": {
        "advertisingMedia": "Advertising Media",
        "advertisingPanel": "Advertising Panel",
        "displayStand": "Display Stand",
        "accessory": "Accessory"
      }
    },
    "productDetail": {
      "specifications": "Specifications",
      "keyFeatures": "Key Features",
      "features": "Features",
      "applications": "Applications",
      "getQuote": "Get a Quote",
      "requestQuote": "Request Quote",
      "backToProducts": "Back to Products",
      "relatedProducts": "Related Products",
      "notFound": "Product Not Found",
      "notFoundDesc": "The product you're looking for doesn't exist or has been removed."
    },
    "whyChooseUs": {
      "title": "Your Reliable Advertising Material Partner",
      "subtitle": "We combine manufacturing excellence with global trade expertise to deliver consistent quality and competitive pricing for B2B buyers worldwide."
    },
    "applications": {
      "title": "Where Our Materials Perform",
      "subtitle": "Our advertising materials are trusted across a wide range of commercial and industrial sign-making applications globally.",
      "label": "Applications",
      "signBoard": "Sign Board",
      "signBoardDesc": "Durable sign board solutions for indoor and outdoor use.",
      "lightBox": "Light Box",
      "lightBoxDesc": "Illuminated display boxes for advertising and retail.",
      "outdoor": "Outdoor Advertising",
      "outdoorDesc": "Weather-resistant materials for outdoor billboards and displays.",
      "digital": "Digital Printing",
      "digitalDesc": "High-quality printing on various advertising substrates.",
      "exhibition": "Exhibition Display",
      "exhibitionDesc": "Portable and reusable display systems for trade shows.",
      "vehicleGraphics": "Vehicle Graphics",
      "vehicleGraphicsDesc": "Custom vinyl wraps and graphics for vehicles."
    },
    "caseStudies": {
      "title": "Real Projects. Real Results.",
      "subtitle": "See how our advertising materials have been deployed in commercial projects across multiple markets worldwide.",
      "label": "Case Studies",
      "viewAll": "View All Case Studies",
      "supermarket": "Supermarket Sign Project",
      "supermarketDesc": "Custom PVC foam board and acrylic sign solutions for retail supermarkets.",
      "mallLightbox": "Mall Light Box Project",
      "mallLightboxDesc": "LED light box installations for shopping malls and retail centers.",
      "outdoorBillboard": "Outdoor Billboard Project",
      "outdoorBillboardDesc": "Large format outdoor billboards using durable flex banner materials.",
      "retail": "Retail",
      "commercial": "Commercial",
      "outdoor": "Outdoor"
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
    "app_page": {
      "breadcrumb": "Applications",
      "pageTitle": "Application Scenarios"
    },
    "about_page": {
      "breadcrumb": "About Us",
      "pageTitle": "About Foshan Jin Yu",
      "pageSubtitle": "Professional advertising materials manufacturer integrating design, R&D, production and global sales since 2021.",
      "companyProfile": "Company Profile",
      "whoWeAre": "Who We Are",
      "whoWeAreDesc": "Foshan Jin Yu Advertising Material Co., Ltd is a professional manufacturer of advertising materials established in 2021. We are located in the U+Zhigu Industrial Park, LiShui Town, Nanhai District, Foshan City, Guangdong Province – one of China's most concentrated hubs for advertising material production.",
      "businessDesc": "Our business integrates design, research and development, production and sales of advertising materials including self adhesive vinyl, PVC flex banner, PVC foam board, acrylic sheet, aluminum composite panel, PP hollow sheet, reflective sheeting, display stands and sign-making accessories.",
      "exportDesc": "We export to Southeast Asia, Europe, the Americas, the Middle East and other global markets. Our products are known for durability, customizability, and competitive factory-direct pricing.",
      "ourPurpose": "Our Purpose",
      "missionVisionValues": "Mission, Vision & Values",
      "mission": "Mission",
      "missionDesc": "To provide advertising professionals and sign-making businesses worldwide with reliable, high-quality materials that enable outstanding creative work at competitive factory-direct prices.",
      "vision": "Vision",
      "visionDesc": "To become a globally recognized name in advertising material manufacturing – known for product innovation, quality consistency, and strong long-term customer partnerships.",
      "values": "Values",
      "valuesDesc": "Quality first. Honest dealing. Continuous improvement. Customer-centric development. Every product batch must meet the standard we set for ourselves – not just what's acceptable.",
      "ourJourney": "Our Journey",
      "companyMilestones": "Company Milestones",
      "milestonesDesc": "From a fresh start in 2021 to an ISO-certified global exporter in just three years – here's how we got here.",
      "companyAtGlance": "Company at a Glance",
      "founded": "Founded",
      "location": "Location",
      "certification": "Certification",
      "products": "Products",
      "exportMarkets": "Export Markets",
      "contact": "Contact",
      "factory": "Our Factory",
      "factoryTitle": "State-of-the-Art Manufacturing Facility",
      "factoryDesc": "Located in U+Zhigu Industrial Park, LiShui Town, Nanhai District – one of Foshan's premium industrial zones dedicated to advanced manufacturing.",
      "productionCapacity": "Production Capacity",
      "scaleTitle": "Scale to Meet Your Volume Requirements",
      "scaleDesc": "Following our 2023 capacity expansion, we can handle large-scale orders with consistent quality from first sample to final batch.",
      "productionEquipment": "Production Equipment",
      "productionEquipmentDesc": "We operate advanced extrusion lines, CNC cutting machines, lamination systems, and automated panel processing equipment. Regular upgrades ensure efficiency and precision.",
      "rdLaboratory": "R&D Laboratory",
      "rdLaboratoryDesc": "In-house R&D lab equipped with testing instruments for adhesion, colorfastness, tensile strength, and UV resistance. Dedicated team focused on formulation innovation.",
      "exportWarehouse": "Export Warehouse",
      "exportWarehouseDesc": "Dedicated export packaging zone with industrial weighing, moisture-proof packing materials, and palletization equipment. Custom labeling for destination compliance.",
      "qualityControl": "Quality Control",
      "qualityControlDesc": "From raw material inspection to final packaging, every step follows documented procedures. ISO 9001 internal audits ensure compliance with international standards.",
      "exportLogistics": "Export Logistics",
      "exportLogisticsDesc": "We work with trusted freight forwarders for air, sea, and express shipping. Export documentation and customs clearance support provided.",
      "oemCustom": "OEM & Custom",
      "oemCustomDesc": "Custom color matching, size cutting, roll slitting, private labeling, and custom packaging available. Sample approval process ensures satisfaction.",
      "ourTeam": "Our Team",
      "teamTitle": "Meet the People Behind the Products",
      "teamDesc": "From R&D to international sales, our team combines technical expertise with global market understanding.",
      "ready": "Ready to Work with Us?",
      "readyDesc": "Connect with our international sales team for product details, pricing, and shipping quotes.",
      "contactNow": "Contact Now",
      "whatsappNow": "💬 WhatsApp Now"
    },
    "contact_page": {
      "breadcrumb": "Contact Us"
    },
    "case_page": {
      "breadcrumb": "Case Studies",
      "pageTitle": "Case Studies",
      "pageSubtitle": "Real-world advertising material projects delivered by Foshan Jin Yu – from single shop signs to large-scale commercial deployments.",
      "case1": "Supermarket Sign Project",
      "case1Outcomes": "Project Outcomes",
      "case2Outcomes": "Project Outcomes",
      "case3Outcomes": "Project Outcomes",
      "case4Outcomes": "Project Outcomes",
      "ctaTitle": "Have a Similar Project? Let's Talk.",
      "ctaDesc": "Share your project requirements and our team will provide material recommendations, specifications, and competitive pricing within 24 hours.",
      "ctaBtn1": "Discuss Your Project",
      "ctaBtn2": "💬 WhatsApp"
    },
    "blog_page": {
      "breadcrumb": "Blog",
      "detail": {
        "tagsLabel": "Tags:",
        "shareLabel": "Share:",
        "ctaBtn1": "Get a Free Quote",
        "ctaBtn2": "Request Samples",
        "ctaBtn3": "Browse Products",
        "sideExplore": "Explore",
        "sideAllProducts": "All Products"
      }
    },
    "news_page": {
      "breadcrumb": "News",
      "pageTitle": "Industry News & Knowledge Base",
      "pageSubtitle": "Expert insights on advertising materials, printing technology, sign-making best practices, and market trends from our technical team.",
      "industryKnowledge": "Industry Knowledge",
      "materialGuide": "Material Guide",
      "printingTechnology": "Printing Technology"
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
    "cta": {
      "title": "Ready to Source Premium Advertising Materials?",
      "subtitle": "Contact our team today for product specifications, pricing, and export shipping details. We respond within 24 hours on business days.",
      "getQuote": "Get a Quote",
      "whatsapp": "💬 WhatsApp Us"
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
      "brandSub": "Professional Advertising Materials Manufacturer Since 2009",
      "brandDesc": "Jinyu has more than 15+ years of professional experience in manufacturing advertising materials. We own an outstanding R&D and design team, with core members holding 20+ years of industry working experience in the advertising production field. Our skilled team can fully meet your customized needs for various advertising materials, no matter what special sizes, crafts or personalized designs you require.",
      "address": "D3168, U+Zhigu Industrial Park, LiShui Town, Nanhai District, Foshan City, Guangdong Province, China",
      "phone": "+86-13570441363",
      "whatsapp": "WhatsApp: +86 138 0882 8019",
      "email": "vivian@materials-ad.com",
      "products": "Products",
      "applications": "Applications",
      "company": "Company",
      "quickContact": "Quick Contact",
      "quickContactDesc": "Get pricing and product details within 24 hours.",
      "getQuote": "Get a Quote",
      "whatsappNow": "WhatsApp联系我们",
      "copyright": "© 2009-2024 Foshan Jin Yu Advertising Material Co., Ltd. All rights reserved.",
      "navigation": "Home",
      "links": {
        "selfAdhesiveVinyl": "Self Adhesive Vinyl",
        "pvcFlexBanner": "PVC Flex Banner",
        "oneWayVision": "One Way Vision",
        "cuttingVinyl": "Cutting Vinyl",
        "pvcFoamBoard": "PVC Foam Board",
        "acrylicSheet": "Acrylic Sheet",
        "aluminumPanel": "Aluminum Composite Panel",
        "reflectiveSheet": "Reflective Sheet",
        "displayStands": "Display Stands",
        "advertisingMedia": "Advertising Media",
        "advertisingPanel": "Advertising Panel",
        "accessory": "Accessory"
      },
      "businessHours": "",
      "weekday": "",
      "saturday": ""
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
      "news": "新闻",
      "aboutUs": "关于我们",
      "contactUs": "联系我们",
      "getQuote": "获取报价",
      "products_sub": {
        "pvcFoamBoard": "PVC发泡板",
        "acrylicSheet": "亚克力板",
        "aluminumPanel": "铝塑板",
        "ppHollowSheet": "PP中空板",
        "selfAdhesiveVinyl": "自粘贴纸",
        "flexBanner": "PVC软布灯箱布",
        "reflectiveSheet": "反光贴"
      },
      "applications_sub": {
        "signBoard": "标牌",
        "lightBox": "灯箱",
        "digitalPrinting": "数字印刷",
        "outdoorAdvertising": "户外广告",
        "exhibitionDisplay": "展览展示"
      },
      "caseStudies_sub": {
        "supermarket": "超市标牌项目",
        "mallLightbox": "商场灯箱项目",
        "outdoorBillboard": "户外广告牌项目",
        "shopSign": "店铺标牌项目"
      },
      "blog_sub": {
        "industryKnowledge": "行业知识",
        "materialGuide": "材料指南",
        "printingTechnology": "印刷技术"
      },
      "about_sub": {
        "companyProfile": "公司简介",
        "factory": "工厂",
        "productionCapacity": "生产能力",
        "certificates": "证书"
      }
    },
    "hero": {
      "badge": "ISO 9001认证制造商 · 成立于2009年",
      "title": "中国<span style=\"color: #E8751A; font-weight: bold;\">头部</span>广告材料工厂",
      "subtitle": "佛山市金昱广告材料有限公司——专业生产PVC泡沫板、亚克力板、乙烯基板、柔性横幅、反光板及广告配件。深受欧洲、美洲、东南亚及中东买家的信赖。",
      "getQuote": "获取报价",
      "downloadCatalog": "下载目录",
      "stats": {
        "countries": "出口国家",
        "products": "产品系列",
        "clients": "全球客户",
        "certified": "ISO 9001认证"
      }
    },
    "products": {
      "title": "全系列广告材料",
      "subtitle": "从硬质板材到柔性乙烯基薄膜，我们制造和供应全球标牌制作、数字印刷和展示应用的全系列广告材料。",
      "label": "我们的产品",
      "categories": {
        "selfAdhesiveVinyl": "自粘贴纸",
        "flexBanner": "PVC软布灯箱布",
        "oneWayVision": "单透贴",
        "cuttingVinyl": "刻字贴",
        "polymericVinyl": "高分子贴纸及冷裱膜",
        "windowFilm": "窗贴及反光贴",
        "pvcFoamBoard": "PVC发泡板",
        "acrylicSheet": "亚克力板",
        "aluminumPanel": "铝塑板",
        "ppHollowSheet": "PP中空板",
        "displayStand": "展示架",
        "accessories": "配件"
      },
      "pageSubtitle": "工厂直销广告材料。定制规格，有竞争力价格，全球发货。",
      "viewAll": "查看所有产品"
    },
    "products_page": {
      "cat": {
        "advertisingMedia": "广告媒体",
        "advertisingPanel": "广告面板",
        "displayStand": "展示架",
        "accessory": "配件"
      }
    },
    "productDetail": {
      "specifications": "产品规格",
      "keyFeatures": "主要特性",
      "features": "产品特性",
      "applications": "应用场景",
      "getQuote": "获取报价",
      "requestQuote": "获取报价",
      "backToProducts": "返回产品",
      "relatedProducts": "相关产品",
      "notFound": "产品未找到",
      "notFoundDesc": "您查找的产品不存在或已被移除。"
    },
    "whyChooseUs": {
      "title": "您的可靠广告材料合作伙伴",
      "subtitle": "我们结合卓越制造和全球贸易专业知识，为全球B2B买家提供一致的质量和有竞争力的定价。"
    },
    "applications": {
      "title": "我们的材料应用领域",
      "subtitle": "我们的广告材料在全球各种商业和工业标牌应用中得到信赖。",
      "label": "应用场景",
      "signBoard": "标牌板",
      "signBoardDesc": "室内外使用的耐用标牌板解决方案。",
      "lightBox": "灯箱",
      "lightBoxDesc": "广告和零售用的照明显示箱。",
      "outdoor": "户外广告",
      "outdoorDesc": "用于户外广告牌和展示的耐候材料。",
      "digital": "数字印刷",
      "digitalDesc": "在各种广告基材上进行高质量印刷。",
      "exhibition": "展会展示",
      "exhibitionDesc": "用于展会的便携式和可重复使用的展示系统。",
      "vehicleGraphics": "车辆图形",
      "vehicleGraphicsDesc": "车辆的定制乙烯基包装和图形。"
    },
    "caseStudies": {
      "title": "真实项目。真实结果。",
      "subtitle": "看看我们的广告材料如何在多个市场的商业项目中部署。",
      "label": "案例研究",
      "viewAll": "查看所有案例研究",
      "supermarket": "超市标牌项目",
      "supermarketDesc": "为零售超市定制的PVC泡沫板和亚克力标牌解决方案。",
      "mallLightbox": "商场灯箱项目",
      "mallLightboxDesc": "购物中心和零售中心的LED灯箱安装。",
      "outdoorBillboard": "户外广告牌项目",
      "outdoorBillboardDesc": "使用耐用的柔性横幅材料的大型户外广告牌。",
      "retail": "零售",
      "commercial": "商业",
      "outdoor": "户外"
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
    "app_page": {
      "breadcrumb": "应用场景",
      "pageTitle": "应用场景"
    },
    "about_page": {
      "breadcrumb": "关于我们",
      "pageTitle": "关于佛山金昱",
      "pageSubtitle": "专业的广告材料制造商，自2021年起整合设计、研发、生产和全球销售。",
      "companyProfile": "公司简介",
      "whoWeAre": "我们是谁",
      "whoWeAreDesc": "佛山市金昱广告材料有限公司成立于2021年，是一家专业的广告材料制造商。我们位于广东省佛山市南海区里水镇U+智谷工业园区，这是中国广告材料生产最集中的地区之一。",
      "businessDesc": "我们的业务整合了广告材料的设计、研发、生产和销售，包括自粘贴纸、PVC软布、PVC发泡板、亚克力板、铝塑板、PP中空板、反光材料、展示架和标牌配件。",
      "exportDesc": "我们出口到东南亚、欧洲、美洲、中东等全球市场。我们的产品以耐用性、可定制性和有竞争力的工厂直销价格而闻名。",
      "ourPurpose": "我们的宗旨",
      "missionVisionValues": "使命、愿景和价值观",
      "mission": "使命",
      "missionDesc": "为全球广告专业人士和标牌制作企业提供可靠、高质量的材料，使其能以有竞争力的工厂直销价格完成出色的创意工作。",
      "vision": "愿景",
      "visionDesc": "成为全球公认的广告材料制造品牌，以产品创新、质量一致性和强大的长期客户合作关系而闻名。",
      "values": "价值观",
      "valuesDesc": "质量第一。诚信交易。持续改进。以客户为中心的发展。每一批产品都必须达到我们为自己设定的标准，而不仅仅是可接受的标准。",
      "ourJourney": "我们的历程",
      "companyMilestones": "公司里程碑",
      "milestonesDesc": "从2021年的新起点到短短三年内成为ISO认证的全球出口商，这是我们走过的道路。",
      "companyAtGlance": "公司概览",
      "founded": "成立时间",
      "location": "所在地",
      "certification": "认证",
      "products": "产品",
      "exportMarkets": "出口市场",
      "contact": "联系",
      "factory": "我们的工厂",
      "factoryTitle": "先进制造设施",
      "factoryDesc": "位于南海区里水镇U+智谷工业园区，这是佛山专门从事先进制造的高端工业区之一。",
      "productionCapacity": "生产能力",
      "scaleTitle": "规模满足您的批量需求",
      "scaleDesc": "继2023年产能扩张后，我们可以处理大规模订单，从首件样品到最终批次都能保持一致的品质。",
      "productionEquipment": "生产设备",
      "productionEquipmentDesc": "我们拥有先进的挤出线、CNC切割机、覆膜系统和自动化板材加工设备。定期升级确保效率和精度。",
      "rdLaboratory": "研发实验室",
      "rdLaboratoryDesc": "内部研发实验室配备粘合力、色牢度、拉伸强度和抗紫外线测试仪器。专门的团队专注于配方创新。",
      "exportWarehouse": "出口仓库",
      "exportWarehouseDesc": "专门的出口包装区，配备工业称重、防潮包装材料和托盘化设备。根据目的地要求提供定制标签。",
      "qualityControl": "质量控制",
      "qualityControlDesc": "从原材料检验到最终包装，每一步都遵循文件化程序。ISO 9001内部审核确保符合国际标准。",
      "exportLogistics": "出口物流",
      "exportLogisticsDesc": "我们与可信赖的货运代理合作，提供空运、海运和快递运输服务。提供出口文件和清关支持。",
      "oemCustom": "OEM & 定制",
      "oemCustomDesc": "提供定制配色、尺寸切割、卷材分切、私人标签和定制包装。样品确认流程确保客户满意。",
      "ourTeam": "我们的团队",
      "teamTitle": "认识产品背后的人",
      "teamDesc": "从研发到国际销售，我们的团队结合了技术专长和全球市场理解。",
      "ready": "准备好与我们合作了吗？",
      "readyDesc": "联系我们的国际销售团队，获取产品详情、价格和运输报价。",
      "contactNow": "立即联系",
      "whatsappNow": "💬 WhatsApp联系我们"
    },
    "contact_page": {
      "breadcrumb": "联系我们"
    },
    "case_page": {
      "breadcrumb": "案例研究",
      "pageTitle": "案例研究",
      "pageSubtitle": "佛山金域广告材料的真实项目案例 - 从单店标牌到大规模商业部署。",
      "case1": "超市标牌项目",
      "case1Outcomes": "项目成果",
      "case2Outcomes": "项目成果",
      "case3Outcomes": "项目成果",
      "case4Outcomes": "项目成果",
      "ctaTitle": "有类似项目需求？让我们聊聊。",
      "ctaDesc": "分享您的项目需求，我们的团队将在24小时内提供材料推荐、规格说明和竞争性价格。",
      "ctaBtn1": "讨论您的项目",
      "ctaBtn2": "💬 WhatsApp"
    },
    "blog_page": {
      "breadcrumb": "博客",
      "detail": {
        "tagsLabel": "标签：",
        "shareLabel": "分享：",
        "ctaBtn1": "获取免费报价",
        "ctaBtn2": "申请样品",
        "ctaBtn3": "浏览产品",
        "sideExplore": "探索",
        "sideAllProducts": "所有产品"
      }
    },
    "news_page": {
      "breadcrumb": "新闻",
      "pageTitle": "行业新闻与知识库",
      "pageSubtitle": "我们技术团队对广告材料、印刷技术、标牌制作最佳实践和市场趋势的专业见解。",
      "industryKnowledge": "行业知识",
      "materialGuide": "材料指南",
      "printingTechnology": "印刷技术"
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
    "cta": {
      "title": "准备好采购优质广告材料了吗？",
      "subtitle": "立即联系我们的团队，获取产品规格、价格和出口物流详情。我们在工作日内24小时内回复。",
      "getQuote": "获取报价",
      "whatsapp": "💬 WhatsApp联系我们"
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
      "brandSub": "专业广告材料制造商 · 始于2009年",
      "brandDesc": "金域拥有15年以上广告材料制造的专业经验。我们拥有出色的研发和设计团队，核心成员在广告生产领域拥有20多年的行业工作经验。我们的专业团队能够完全满足您对各种广告材料的定制需求，无论您需要什么特殊尺寸、工艺或个性化设计。",
      "address": "中国广东省佛山市南海区里水镇U+智谷工业园区D3168",
      "phone": "+86-13570441363",
      "whatsapp": "WhatsApp: +86 138 0882 8019",
      "email": "vivian@materials-ad.com",
      "products": "产品",
      "applications": "应用场景",
      "company": "公司",
      "quickContact": "快速联系",
      "quickContactDesc": "24小时内获取价格和产品详情。",
      "getQuote": "获取报价",
      "whatsappNow": "WhatsApp联系我们",
      "copyright": "© 2009-2024 佛山金昱广告材料有限公司 版权所有。",
      "navigation": "首页",
      "links": {
        "selfAdhesiveVinyl": "自粘贴纸",
        "pvcFlexBanner": "PVC软布灯箱布",
        "oneWayVision": "单透贴",
        "cuttingVinyl": "刻字贴",
        "pvcFoamBoard": "PVC发泡板",
        "acrylicSheet": "亚克力板",
        "aluminumPanel": "铝塑板",
        "reflectiveSheet": "反光贴",
        "displayStands": "展示架",
        "advertisingMedia": "广告媒体",
        "advertisingPanel": "广告面板",
        "accessory": "配件"
      },
      "businessHours": "",
      "weekday": "",
      "saturday": ""
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
      "news": "Tin tức",
      "aboutUs": "Về chúng tôi",
      "contactUs": "Liên hệ",
      "getQuote": "Báo giá",
      "products_sub": {
        "pvcFoamBoard": "Tấm PVC foam",
        "acrylicSheet": "Tấm acrylic",
        "aluminumPanel": "Tấm nhôm composite",
        "ppHollowSheet": "Tấm PP rỗng",
        "selfAdhesiveVinyl": "Decal tự dính",
        "flexBanner": "Bạt flex PVC",
        "reflectiveSheet": "Tấm phản quang"
      },
      "applications_sub": {
        "signBoard": "Bảng hiệu",
        "lightBox": "Hộp đèn",
        "digitalPrinting": "In kỹ thuật số",
        "outdoorAdvertising": "Quảng cáo ngoài trời",
        "exhibitionDisplay": "Trưng bày triển lãm"
      },
      "caseStudies_sub": {
        "supermarket": "Dự án bảng hiệu siêu thị",
        "mallLightbox": "Dự án hộp đèn trung tâm mua sắm",
        "outdoorBillboard": "Dự án bảng quảng cáo ngoài trời",
        "shopSign": "Dự án bảng hiệu cửa hàng"
      },
      "blog_sub": {
        "industryKnowledge": "Kiến thức ngành",
        "materialGuide": "Hướng dẫn vật liệu",
        "printingTechnology": "Công nghệ in ấn"
      },
      "about_sub": {
        "companyProfile": "Hồ sơ Công ty",
        "factory": "Nhà máy",
        "productionCapacity": "Năng lực sản xuất",
        "certificates": "Chứng chỉ"
      }
    },
    "hero": {
      "badge": "Nhà sản xuất ISO 9001 · Thành lập 2009",
      "title": "Nhà Máy Vật Liệu Quảng Cáo <span style=\"color: #E8751A; font-weight: bold;\">Hàng Đầu</span> Trung Quốc",
      "subtitle": "Công ty TNHH Vật liệu Quảng cáo Foshan Jin Yu – Nhà sản xuất chuyên nghiệp tấm PVC foam, tấm acrylic, decal, bạt flex, tấm phản quang và phụ kiện quảng cáo. Được khách hàng tại Châu Âu, Châu Mỹ, Đông Nam Á và Trung Đông tin tưởng.",
      "getQuote": "Báo giá"
    },
    "products": {
      "title": "Sản phẩm Vật liệu Quảng cáo",
      "subtitle": "Đa dạng vật liệu quảng cáo và trưng bày. Giá nhà máy, thông số tùy chỉnh, vận chuyển toàn cầu.",
      "label": "Sản phẩm của chúng tôi",
      "categories": {
        "selfAdhesiveVinyl": "Decal tự dính",
        "flexBanner": "Bạt flex PVC",
        "oneWayVision": "Decal một chiều",
        "cuttingVinyl": "Decal cắt chữ",
        "polymericVinyl": "Decal polymer & Màng ép lạnh",
        "windowFilm": "Phim cửa sổ & Tấm phản quang",
        "pvcFoamBoard": "Tấm PVC foam",
        "acrylicSheet": "Tấm acrylic",
        "aluminumPanel": "Tấm nhôm composite",
        "ppHollowSheet": "Tấm PP rỗng",
        "displayStand": "Giá trưng bày",
        "accessories": "Phụ kiện"
      },
      "pageSubtitle": "Vật liệu quảng cáo giá nhà máy. Thông số tùy chỉnh, giá cả cạnh tranh, vận chuyển toàn cầu.",
      "viewAll": "Xem tất cả sản phẩm"
    },
    "productDetail": {
      "specifications": "Thông số kỹ thuật",
      "keyFeatures": "Tính năng chính",
      "features": "Tính năng",
      "applications": "Ứng dụng",
      "getQuote": "Báo giá",
      "requestQuote": "Báo giá",
      "backToProducts": "Trở về sản phẩm",
      "relatedProducts": "Sản phẩm liên quan",
      "notFound": "Không tìm thấy sản phẩm",
      "notFoundDesc": "Sản phẩm bạn đang tìm kiếm không tồn tại hoặc đã bị xóa."
    },
    "about": {
      "title": "Về Foshan Jin Yu",
      "subtitle": "Nhà sản xuất vật liệu quảng cáo chuyên nghiệp, tích hợp thiết kế, R&D, sản xuất và bán hàng toàn cầu từ năm 2009.",
      "whoWeAreText": "Công ty TNHH Vật liệu Quảng cáo Foshan Jin Yu là nhà sản xuất vật liệu quảng cáo chuyên nghiệp được thành lập năm 2009. Chúng tôi tọa lạc tại Khu công nghiệp U+Zhigu, thị trấn LiShui, quận Nanhai, thành phố Foshan, tỉnh Quảng Đông – một trong những trung tâm sản xuất vật liệu quảng cáo tập trung nhất tại Trung Quốc."
    },
    "app_page": {
      "breadcrumb": "Ứng dụng",
      "pageTitle": "Ứng dụng"
    },
    "about_page": {
      "breadcrumb": "Về chúng tôi",
      "pageTitle": "Về Foshan Jin Yu",
      "pageSubtitle": "Nhà sản xuất vật liệu quảng cáo chuyên nghiệp tích hợp thiết kế, R&D, sản xuất và bán hàng toàn cầu từ năm 2021.",
      "companyProfile": "Hồ sơ Công ty",
      "whoWeAre": "Chúng tôi là ai",
      "whoWeAreDesc": "Công ty TNHH Vật liệu Quảng cáo Foshan Jin Yu được thành lập năm 2021, là nhà sản xuất vật liệu quảng cáo chuyên nghiệp. Chúng tôi tọa lạc tại Khu công nghiệp U+Zhigu, thị trấn LiShui, quận Nanhai, thành phố Foshan, tỉnh Quảng Đông – một trong những trung tâm sản xuất vật liệu quảng cáo tập trung nhất tại Trung Quốc.",
      "businessDesc": "Hoạt động kinh doanh của chúng tôi tích hợp thiết kế, nghiên cứu và phát triển, sản xuất và bán hàng vật liệu quảng cáo bao gồm decal tự dính, bạt flex PVC, tấm PVC foam, tấm acrylic, tấm nhôm composite, tấm PP rỗng, vật liệu phản quang, giá trưng bày và phụ kiện làm biển hiệu.",
      "exportDesc": "Chúng tôi xuất khẩu sang Đông Nam Á, Châu Âu, Châu Mỹ, Trung Đông và các thị trường toàn cầu khác. Sản phẩm của chúng tôi được biết đến với độ bền, khả năng tùy chỉnh và giá cả cạnh tranh từ nhà máy.",
      "ourPurpose": "Mục đích của chúng tôi",
      "missionVisionValues": "Sứ mệnh, Tầm nhìn & Giá trị",
      "mission": "Sứ mệnh",
      "missionDesc": "Cung cấp cho các chuyên gia quảng cáo và doanh nghiệp làm biển hiệu trên toàn thế giới những vật liệu đáng tin cậy, chất lượng cao, giúp họ thực hiện các công việc sáng tạo xuất sắc với giá cả cạnh tranh từ nhà máy.",
      "vision": "Tầm nhìn",
      "visionDesc": "Trở thành thương hiệu được công nhận toàn cầu trong ngành sản xuất vật liệu quảng cáo – được biết đến với sự đổi mới sản phẩm, chất lượng ổn định và quan hệ đối tác khách hàng lâu dài.",
      "values": "Giá trị",
      "valuesDesc": "Chất lượng trên hết. Giao dịch trung thực. Cải tiến liên tục. Phát triển lấy khách hàng làm trung tâm. Mỗi lô sản phẩm phải đáp ứng tiêu chuẩn chúng tôi đặt ra cho chính mình – không chỉ là mức chấp nhận được.",
      "ourJourney": "Hành trình của chúng tôi",
      "companyMilestones": "Các cột mốc công ty",
      "milestonesDesc": "Từ khởi đầu mới vào năm 2021 đến trở thành nhà xuất khẩu toàn cầu được chứng nhận ISO chỉ trong ba năm – đây là con đường chúng tôi đã đi.",
      "companyAtGlance": "Công ty nhìn tổng quan",
      "founded": "Thành lập",
      "location": "Địa điểm",
      "certification": "Chứng nhận",
      "products": "Sản phẩm",
      "exportMarkets": "Thị trường xuất khẩu",
      "contact": "Liên hệ",
      "factory": "Nhà máy của chúng tôi",
      "factoryTitle": "Cơ sở sản xuất hiện đại",
      "factoryDesc": "Tọa lạc tại Khu công nghiệp U+Zhigu, thị trấn LiShui, quận Nanhai – một trong những khu công nghiệp cao cấp của Foshan dành riêng cho sản xuất tiên tiến.",
      "productionCapacity": "Năng lực sản xuất",
      "scaleTitle": "Quy mô đáp ứng yêu cầu khối lượng của bạn",
      "scaleDesc": "Sau khi mở rộng năng lực năm 2023, chúng tôi có thể xử lý đơn hàng quy mô lớn với chất lượng đồng đều từ mẫu đầu tiên đến lô cuối cùng.",
      "productionEquipment": "Thiết bị sản xuất",
      "productionEquipmentDesc": "Chúng tôi vận hành dây chuyền ép đùn tiên tiến, máy cắt CNC, hệ thống ép màng và thiết bị gia công tấm tự động. Nâng cấp thường xuyên đảm bảo hiệu quả và độ chính xác.",
      "rdLaboratory": "Phòng thí nghiệm R&D",
      "rdLaboratoryDesc": "Phòng thí nghiệm R&D nội bộ trang bị các dụng cụ kiểm tra độ bám dính, độ bền màu, độ bền kéo và khả năng chống tia UV. Đội ngũ chuyên trách tập trung vào đổi mới công thức.",
      "exportWarehouse": "Kho xuất khẩu",
      "exportWarehouseDesc": "Khu vực đóng gói xuất khẩu chuyên dụng với cân công nghiệp, vật liệu đóng gói chống ẩm và thiết bị xếp pallet. Nhãn mác tùy chỉnh phù hợp với quy định đích đến.",
      "qualityControl": "Kiểm soát chất lượng",
      "qualityControlDesc": "Từ kiểm tra nguyên liệu đến đóng gói cuối cùng, mỗi bước đều tuân theo quy trình được ghi chép. Kiểm tra nội bộ ISO 9001 đảm bảo tuân thủ tiêu chuẩn quốc tế.",
      "exportLogistics": "Hậu cần xuất khẩu",
      "exportLogisticsDesc": "Chúng tôi làm việc với các đại lý vận chuyển tin cậy cho vận chuyển hàng không, biển và chuyển phát nhanh. Hỗ trợ cung cấp chứng từ xuất khẩu và thông quan.",
      "oemCustom": "OEM & Tùy chỉnh",
      "oemCustomDesc": "Cung cấp phối màu tùy chỉnh, cắt kích thước, cắt cuộn, dán nhãn riêng và đóng gói tùy chỉnh. Quy trình phê duyệt mẫu đảm bảo sự hài lòng.",
      "ourTeam": "Đội ngũ của chúng tôi",
      "teamTitle": "Gặp gỡ những người đứng sau sản phẩm",
      "teamDesc": "Từ R&D đến bán hàng quốc tế, đội ngũ của chúng tôi kết hợp chuyên môn kỹ thuật với hiểu biết thị trường toàn cầu.",
      "ready": "Sẵn sàng làm việc với chúng tôi?",
      "readyDesc": "Kết nối với đội ngũ bán hàng quốc tế của chúng tôi để biết chi tiết sản phẩm, giá cả và báo giá vận chuyển.",
      "contactNow": "Liên hệ ngay",
      "whatsappNow": "💬 WhatsApp với chúng tôi"
    },
    "contact_page": {
      "breadcrumb": "Liên hệ"
    },
    "case_page": {
      "breadcrumb": "Dự án",
      "pageTitle": "Dự án",
      "pageSubtitle": "Dự án vật liệu quảng cáo thực tế được thực hiện bởi Foshan Jin Yu – từ biển hiệu cửa hàng đơn lẻ đến triển khai thương mại quy mô lớn.",
      "case1": "Dự án Biển hiệu Siêu thị",
      "case1Outcomes": "Kết quả Dự án",
      "case2Outcomes": "Kết quả Dự án",
      "case3Outcomes": "Kết quả Dự án",
      "case4Outcomes": "Kết quả Dự án",
      "ctaTitle": "Có Dự án Tương tự? Hãy Trò chuyện.",
      "ctaDesc": "Chia sẻ yêu cầu dự án của bạn và đội ngũ chúng tôi sẽ cung cấp khuyến nghị vật liệu, thông số kỹ thuật và giá cả cạnh tranh trong vòng 24 giờ.",
      "ctaBtn1": "Thảo luận Dự án của Bạn",
      "ctaBtn2": "💬 WhatsApp"
    },
    "blog_page": {
      "breadcrumb": "Blog",
      "detail": {
        "tagsLabel": "Thẻ:",
        "shareLabel": "Chia sẻ:",
        "ctaBtn1": "Nhận báo giá miễn phí",
        "ctaBtn2": "Yêu cầu mẫu",
        "ctaBtn3": "Xem sản phẩm",
        "sideExplore": "Khám phá",
        "sideAllProducts": "Tất cả sản phẩm"
      }
    },
    "news_page": {
      "breadcrumb": "Tin tức",
      "pageTitle": "Tin tức Ngành & Cơ sở Kiến thức",
      "pageSubtitle": "Những hiểu biết chuyên môn về vật liệu quảng cáo, công nghệ in, thực hành tốt nhất làm biển hiệu và xu hướng thị trường từ đội ngũ kỹ thuật của chúng tôi.",
      "industryKnowledge": "Kiến thức Ngành",
      "materialGuide": "Hướng dẫn Vật liệu",
      "printingTechnology": "Công nghệ In"
    },
    "contact": {
      "title": "Liên hệ",
      "subtitle": "Liên hệ để nhận tư vấn sản phẩm và báo giá",
      "name": "Họ và tên",
      "email": "Địa chỉ email",
      "phone": "Số điện thoại",
      "company": "Tên công ty",
      "message": "Nội dung tin nhắn",
      "submit": "Gửi tin nhắn",
      "success": "Cảm ơn tin nhắn của bạn. Chúng tôi sẽ phản hồi sớm!"
    },
    "cta": {
      "title": "Sẵn sàng mua Vật liệu Quảng cáo Chất lượng Cao?",
      "subtitle": "Liên hệ đội ngũ của chúng tôi ngay hôm nay để nhận thông số sản phẩm, giá cả và chi tiết vận chuyển xuất khẩu. Chúng tôi phản hồi trong vòng 24 giờ trong ngày làm việc.",
      "getQuote": "Nhận báo giá",
      "whatsapp": "💬 WhatsApp với chúng tôi"
    },
    "trust": {
      "ownFactory": "Nhà máy riêng tại Foshan",
      "export50": "Xuất khẩu tới 50+ quốc gia",
      "iso": "Chứng nhận ISO 9001",
      "rd": "Đội ngũ R&D nội bộ",
      "packaging": "Đóng gói xuất khẩu tùy chỉnh",
      "whatsapp": "WhatsApp: +86 138 0882 8019"
    },
    "footer": {
      "brand": "Công ty TNHH Vật liệu Quảng cáo Foshan Jin Yu",
      "brandSub": "Nhà sản xuất Vật liệu Quảng cáo Chuyên nghiệp Từ năm 2009",
      "brandDesc": "Jinyu có hơn 15+ năm kinh nghiệm chuyên nghiệp trong sản xuất vật liệu quảng cáo. Chúng tôi sở hữu một đội ngũ R&D và thiết kế xuất sắc, với các thành viên cốt cán có hơn 20 năm kinh nghiệm làm việc trong lĩnh vực sản xuất quảng cáo. Đội ngũ lành nghề của chúng tôi có thể đáp ứng đầy đủ nhu cầu tùy chỉnh của bạn cho các vật liệu quảng cáo khác nhau, bất kể bạn yêu cầu kích thước đặc biệt, thủ công hay thiết kế cá nhân hóa nào.",
      "address": "D3168, Khu công nghiệp U+Zhigu, thị trấn LiShui, quận Nanhai, thành phố Foshan, tỉnh Quảng Đông, Trung Quốc",
      "phone": "+86-13570441363",
      "whatsapp": "WhatsApp: +86 138 0882 8019",
      "email": "vivian@materials-ad.com",
      "products": "Sản phẩm",
      "applications": "Ứng dụng",
      "company": "Công ty",
      "quickContact": "Liên hệ nhanh",
      "quickContactDesc": "Nhận báo giá và chi tiết sản phẩm trong vòng 24 giờ.",
      "getQuote": "Báo giá",
      "whatsappNow": "WhatsApp với chúng tôi",
      "copyright": "© 2009-2024 Công ty TNHH Vật liệu Quảng cáo Foshan Jin Yu. Mọi quyền được bảo lưu.",
      "navigation": "Trang chủ",
      "links": {
        "selfAdhesiveVinyl": "Decal tự dính",
        "pvcFlexBanner": "Bạt flex PVC",
        "oneWayVision": "Decal một chiều",
        "cuttingVinyl": "Decal cắt chữ",
        "pvcFoamBoard": "Tấm PVC foam",
        "acrylicSheet": "Tấm acrylic",
        "aluminumPanel": "Tấm nhôm composite",
        "reflectiveSheet": "Tấm phản quang",
        "displayStands": "Giá trưng bày",
        "advertisingMedia": "Truyền thông quảng cáo",
        "advertisingPanel": "Bảng quảng cáo",
        "accessory": "Phụ kiện"
      },
      "businessHours": "",
      "weekday": "",
      "saturday": ""
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
      "news": "Balita",
      "aboutUs": "Tungkol sa Amin",
      "contactUs": "Makipag-ugnayan",
      "getQuote": "Kumuha ng Quote",
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
      "title": "Your <span style=\"color: #E8751A; font-weight: bold;\">#1</span> Advertising Material Factory in China",
      "subtitle": "Foshan Jin Yu Advertising Material Co., Ltd – Propesyonal na manufacturer ng PVC foam board, acrylic sheet, vinyl, flex banner, reflective sheet at mga accessories sa advertising. Pinagkakatiwalaan ng mga buyer sa Europe, Americas, Southeast Asia at Middle East.",
      "getQuote": "Kumuha ng Quote"
    },
    "products": {
      "title": "Mga Produkto sa Advertising Material",
      "subtitle": "Kumpletong hanay ng mga materyales sa advertising at display. Factory-direct na pricing, custom specifications, global shipping.",
      "label": "Ang Aming Mga Produkto",
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
      "pageSubtitle": "Factory-direct advertising materials. Custom specs, competitive pricing, global shipping.",
      "viewAll": "Tingnan ang Lahat ng Produkto"
    },
    "productDetail": {
      "specifications": "Mga Specifications",
      "keyFeatures": "Mga Key Features",
      "features": "Mga Features",
      "applications": "Mga Application",
      "getQuote": "Kumuha ng Quote",
      "requestQuote": "Kumuha ng Quote",
      "backToProducts": "Bumalik sa Produkto",
      "relatedProducts": "Mga Related Products",
      "notFound": "Product Not Found",
      "notFoundDesc": "The product you're looking for doesn't exist or has been removed."
    },
    "about": {
      "title": "Tungkol sa Foshan Jin Yu",
      "subtitle": "Propesyonal na manufacturer ng mga materyales sa advertising na nagbibigkis ng design, R&D, production at global sales simula 2009."
    },
    "app_page": {
      "breadcrumb": "Mga Application",
      "pageTitle": "Mga Application"
    },
    "about_page": {
      "breadcrumb": "Tungkol sa Amin",
      "pageTitle": "Tungkol sa Foshan Jin Yu",
      "pageSubtitle": "Propesyonal na manufacturer ng mga materyales sa advertising na nagbibigkis ng design, R&D, production at global sales mula 2021.",
      "companyProfile": "Company Profile",
      "whoWeAre": "Sino Kami",
      "whoWeAreDesc": "Ang Foshan Jin Yu Advertising Material Co., Ltd ay isang propesyonal na manufacturer ng mga materyales sa advertising na naitatag noong 2021. Kami ay matatagpuan sa U+Zhigu Industrial Park, LiShui Town, Nanhai District, Foshan City, Guangdong Province – isa sa mga pinakamalakas na sentro ng produksyon ng materyales sa advertising sa China.",
      "businessDesc": "Ang aming negosyo ay nagbibigkis ng design, research at development, production at sales ng mga materyales sa advertising kabilang ang self adhesive vinyl, PVC flex banner, PVC foam board, acrylic sheet, aluminum composite panel, PP hollow sheet, reflective sheeting, display stands at sign-making accessories.",
      "exportDesc": "Ine-export namin sa Southeast Asia, Europe, Americas, Middle East at iba pang global markets. Kilala ang aming mga produkto sa tibay, kakayahang ipasadya, at mapagkumpitensyang factory-direct pricing.",
      "ourPurpose": "Ang Aming Layunin",
      "missionVisionValues": "Mission, Vision & Values",
      "mission": "Mission",
      "missionDesc": "Ibigay sa mga propesyonal sa advertising at mga negosyo sa paggawa ng signage sa buong mundo ang maaasahan, de-kalidad na mga materyales na nagbibigay-daan sa kahanga-hangang gawaing malikhaing sa mapagkumpitensyang factory-direct prices.",
      "vision": "Vision",
      "visionDesc": "Maging isang kilalang pangalan sa buong mundo sa pagmamanupaktura ng mga materyales sa advertising – kilala sa pagbabago ng produkto, consistency ng kalidad, at malakas na pangmatagalang pakikipagsosyo sa customer.",
      "values": "Values",
      "valuesDesc": "Una ang kalidad. Matapat na pakikitungo. Patuloy na pagpapabuti. Customer-centric na pag-unlad. Dapat matugunan ng bawat batch ng produkto ang pamantayang itinakda namin para sa aming sarili – hindi lang kung ano ang katanggap-tanggap.",
      "ourJourney": "Ang Aming Journey",
      "companyMilestones": "Mga Milestone ng Kumpanya",
      "milestonesDesc": "Mula sa sariwang simula noong 2021 hanggang sa maging ISO-certified na global exporter sa loob lamang ng tatlong taon – ito kung paano kami nakarating dito.",
      "companyAtGlance": "Company at a Glance",
      "founded": "Itinatag",
      "location": "Lokasyon",
      "certification": "Certification",
      "products": "Mga Produkto",
      "exportMarkets": "Export Markets",
      "contact": "Contact",
      "factory": "Ang Aming Factory",
      "factoryTitle": "State-of-the-Art Manufacturing Facility",
      "factoryDesc": "Matatagpuan sa U+Zhigu Industrial Park, LiShui Town, Nanhai District – isa sa mga premium industrial zone ng Foshan na nakatuon sa advanced manufacturing.",
      "productionCapacity": "Production Capacity",
      "scaleTitle": "Scale to Meet Your Volume Requirements",
      "scaleDesc": "Kasunod ng aming 2023 capacity expansion, maaari naming hawakan ang mga malalaking-scale na order na may pare-parehong kalidad mula sa unang sample hanggang sa final batch.",
      "productionEquipment": "Production Equipment",
      "productionEquipmentDesc": "Nagpapatakbo kami ng mga advanced na extrusion lines, CNC cutting machines, lamination systems, at automated panel processing equipment. Regular na mga upgrade ang nagsisiguro ng kahusayan at precision.",
      "rdLaboratory": "R&D Laboratory",
      "rdLaboratoryDesc": "In-house R&D lab na nilagyan ng testing instruments para sa adhesion, colorfastness, tensile strength, at UV resistance. Nakatuon ang team sa formulation innovation.",
      "exportWarehouse": "Export Warehouse",
      "exportWarehouseDesc": "Nakalaang export packaging zone na may industrial weighing, moisture-proof packing materials, at palletization equipment. Custom labeling para sa destination compliance.",
      "qualityControl": "Quality Control",
      "qualityControlDesc": "Mula sa raw material inspection hanggang sa final packaging, ang bawat hakbang ay sumusunod sa documented procedures. ISO 9001 internal audits ang nagsisiguro ng pagsunod sa international standards.",
      "exportLogistics": "Export Logistics",
      "exportLogisticsDesc": "Nagtatrabaho kami kasama ang mga mapagkakatiwalaang freight forwarders para sa air, sea, at express shipping. Ibinibigay ang export documentation at customs clearance support.",
      "oemCustom": "OEM & Custom",
      "oemCustomDesc": "Available ang custom color matching, size cutting, roll slitting, private labeling, at custom packaging. Sinisiguro ng sample approval process ang kasiyahan.",
      "ourTeam": "Ang Aming Team",
      "teamTitle": "Meet the People Behind the Products",
      "teamDesc": "Mula sa R&D hanggang sa international sales, pinagsasama ng aming team ang teknikal na kadalubhasaan at pang-unawa sa global market.",
      "ready": "Handa nang Makipagtulungan sa Amin?",
      "readyDesc": "Kumonekta sa aming international sales team para sa mga detalye ng produkto, pricing, at shipping quotes.",
      "contactNow": "Contact Now",
      "whatsappNow": "💬 WhatsApp Now"
    },
    "contact_page": {
      "breadcrumb": "Makipag-ugnayan"
    },
    "case_page": {
      "breadcrumb": "Mga Case Studies",
      "pageTitle": "Mga Case Studies",
      "pageSubtitle": "Mga totoong proyekto ng materyal sa advertising na ipinagkatiwala ng Foshan Jin Yu – mula sa mga single shop sign hanggang sa malalaking commercial deployment.",
      "case1": "Supermarket Sign Project",
      "case1Outcomes": "Mga Resulta ng Proyekto",
      "case2Outcomes": "Mga Resulta ng Proyekto",
      "case3Outcomes": "Mga Resulta ng Proyekto",
      "case4Outcomes": "Mga Resulta ng Proyekto",
      "ctaTitle": "May Katulad na Proyekto? Makipag-usap Tayo.",
      "ctaDesc": "Ibahagi ang iyong mga pangangailangan sa proyekto at ang aming team ay magbibigay ng mga rekomendasyon sa materyal, specifications, at mapagkumpitensyang presyo sa loob ng 24 oras.",
      "ctaBtn1": "Pag-usapan ang Iyong Proyekto",
      "ctaBtn2": "💬 WhatsApp"
    },
    "blog_page": {
      "breadcrumb": "Blog",
      "detail": {
        "tagsLabel": "Mga Tag:",
        "shareLabel": "Ibahagi:",
        "ctaBtn1": "Kumuha ng Libreng Quote",
        "ctaBtn2": "Mag-request ng Sample",
        "ctaBtn3": "Browse sa Produkto",
        "sideExplore": "Explore",
        "sideAllProducts": "Lahat ng Produkto"
      }
    },
    "news_page": {
      "breadcrumb": "Balita",
      "pageTitle": "Industry News & Knowledge Base",
      "pageSubtitle": "Mga ekspertong insights sa advertising materials, printing technology, sign-making best practices, at market trends mula sa aming technical team.",
      "industryKnowledge": "Industry Knowledge",
      "materialGuide": "Material Guide",
      "printingTechnology": "Printing Technology"
    },
    "contact": {
      "title": "Makipag-ugnayan sa Amin",
      "subtitle": "Makipag-ugnayan para sa mga product inquiry at quotations",
      "name": "Ang Iyong Pangalan",
      "email": "Email Address",
      "phone": "Phone Number",
      "company": "Company Name",
      "message": "Iyong Message",
      "submit": "Ipadala ang Message",
      "success": "Salamat sa iyong mensahe. Babalikan ka namin sa lalong madaling panahon!"
    },
    "cta": {
      "title": "Handa nang Mag-source ng Premium na Advertising Materials?",
      "subtitle": "Makipag-ugnayan sa aming team ngayon para sa product specifications, pricing, at export shipping details. Tumatugon kami sa loob ng 24 oras sa mga business days.",
      "getQuote": "Kumuha ng Quote",
      "whatsapp": "💬 WhatsApp sa Amin"
    },
    "trust": {
      "ownFactory": "Sariling Pabrika sa Foshan",
      "export50": "Nag-eeksport sa 50+ Bansa",
      "iso": "ISO 9001 Sertipikado",
      "rd": "In-house R&D Team",
      "packaging": "Custom Export Packaging",
      "whatsapp": "WhatsApp: +86 138 0882 8019"
    },
    "footer": {
      "brand": "Foshan Jin Yu Advertising Material Co., Ltd",
      "brandSub": "Professional Advertising Materials Manufacturer Since 2009",
      "brandDesc": "Jinyu has more than 15+ years of professional experience in manufacturing advertising materials. We own an outstanding R&D and design team, with core members holding 20+ years of industry working experience in the advertising production field. Our skilled team can fully meet your customized needs for various advertising materials, no matter what special sizes, crafts or personalized designs you require.",
      "address": "D3168, U+Zhigu Industrial Park, LiShui Town, Nanhai District, Foshan City, Guangdong Province, China",
      "phone": "+86-13570441363",
      "whatsapp": "WhatsApp: +86 138 0882 8019",
      "email": "vivian@materials-ad.com",
      "products": "Mga Produkto",
      "applications": "Mga Application",
      "company": "Company",
      "quickContact": "Quick Contact",
      "quickContactDesc": "Get pricing and product details within 24 hours.",
      "getQuote": "Kumuha ng Quote",
      "whatsappNow": "WhatsApp联系我们",
      "copyright": "© 2009-2024 Foshan Jin Yu Advertising Material Co., Ltd. All rights reserved.",
      "navigation": "Home",
      "links": {
        "selfAdhesiveVinyl": "Self Adhesive Vinyl",
        "pvcFlexBanner": "PVC Flex Banner",
        "oneWayVision": "One Way Vision",
        "cuttingVinyl": "Cutting Vinyl",
        "pvcFoamBoard": "PVC Foam Board",
        "acrylicSheet": "Acrylic Sheet",
        "aluminumPanel": "Aluminum Composite Panel",
        "reflectiveSheet": "Reflective Sheet",
        "displayStands": "Display Stands",
        "advertisingMedia": "Advertising Media",
        "advertisingPanel": "Advertising Panel",
        "accessory": "Accessory"
      },
      "businessHours": "",
      "weekday": "",
      "saturday": ""
    }
  };
}
