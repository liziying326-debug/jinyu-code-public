/**
 * Internationalization (i18n) Module
 * Handles language switching for the Foshan Jin Yu website
 * Translations are embedded directly to avoid CORS issues with local file access
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

  // Embedded translations
  translations: {
    "en": {
      "nav": {
        "home": "Home",
        "products": "Products",
        "applications": "Applications",
        "caseStudies": "Case Studies",
        "blog": "Blog",
        "aboutUs": "About Us",
        "contactUs": "Contact Us",
        "getQuote": "Get a Quote",
        "products_sub": {
          "pvcFoamBoard": "PVC Foam Board",
          "acrylicSheet": "Acrylic Sheet",
          "aluminumPanel": "Aluminum Composite Panel",
          "ppHollowSheet": "PP Hollow Sheet",
          "selfAdhesiveVinyl": "Self Adhesive Vinyl",
          "flexBanner": "Flex Banner"
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
        "badge": "Premium Advertising Materials Manufacturer",
        "title": "Your <span style='color: #E8751A; font-weight: bold;'>#1</span> Advertising Material Factory in China",
        "subtitle": "Foshan Jin Yu Advertising Material Co., Ltd – Professional manufacturer of PVC foam board, acrylic sheet, vinyl, flex banner, reflective sheet and advertising accessories. Trusted by buyers across Europe, Americas, Southeast Asia & Middle East.",
        "exploreProducts": "Explore Products",
        "getQuote": "Get a Quote",
        "downloadCatalog": "Download Catalog"
      },

      "products": {
        "label": "Our Products",
        "title": "Full Range of Advertising Materials",
        "subtitle": "From rigid boards to flexible vinyl films, we manufacture and supply a comprehensive range of advertising materials for sign-making, digital printing, and display applications worldwide.",
        "viewAll": "View All Products"
      },
      "products_detail": {
        "selfAdhesiveVinyl": "Self Adhesive Vinyl",
        "selfAdhesiveVinylDesc": "80g / 100g / 120g / 140g / 160g. Transparent, black back, high gloss. For vehicle wraps, window decoration, promotional signage.",
        "pvcFlexBanner": "PVC Flex Banner",
        "pvcFlexBannerDesc": "Front-lit, back-lit, knife-coated, blockout types. Ideal for outdoor billboards, light boxes, event banners and large format printing.",
        "pvcFoamBoard": "PVC Foam Board",
        "pvcFoamBoardDesc": "1–30mm thickness. Lightweight, waterproof, easy to cut. Widely used for sign boards, exhibition stands, furniture decoration.",
        "acrylicSheet": "Acrylic Sheet",
        "acrylicSheetDesc": "1–50mm, crystal clear or various colors. High transparency, UV resistant. For light boxes, signs, display racks and architecture.",
        "aluminumPanel": "Aluminum Composite Panel",
        "aluminumPanelDesc": "PE core, PVDF coating available. Fire resistant, weather resistant. For building cladding, outdoor signage, shop fronts.",
        "reflectiveSheet": "Reflective Sheeting",
        "reflectiveSheetDesc": "Engineering grade, high intensity, diamond grade. For road signs, safety markings, vehicle markings, traffic control."
      },
      "whyChooseUs": {
        "label": "Why Choose Us",
        "title": "Your Reliable Advertising Material Partner",
        "subtitle": "We combine manufacturing excellence with global trade expertise to deliver consistent quality and competitive pricing for B2B buyers worldwide.",
        "factory": "Own Factory Production",
        "factoryDesc": "Vertically integrated manufacturing in Foshan – from raw material procurement to finished product. Full quality control at every stage.",
        "rd": "In-house R&D Team",
        "rdDesc": "Dedicated R&D team established in 2023. Continuous product innovation and custom formulation to meet your specific market requirements.",
        "iso": "ISO 9001 Certified",
        "isoDesc": "Achieved ISO 9001 quality management certification in 2024. Standardized processes ensure consistent product quality batch after batch.",
        "global": "Global Export Experience",
        "globalDesc": "Exporting to Europe, Americas, Southeast Asia, and the Middle East since 2022. We understand compliance, documentation and logistics.",
        "customization": "Full Customization",
        "customizationDesc": "Custom sizes, colors, thickness, surface finish, and OEM branding available. We work closely with clients on product development.",
        "packaging": "Export-grade Packaging",
        "packagingDesc": "Products are packed to international shipping standards. Cartons, pallets, and moisture protection ensure safe delivery worldwide."
      },
      "applications": {
        "label": "Applications",
        "title": "Where Our Materials Perform",
        "subtitle": "Our advertising materials are trusted across a wide range of commercial and industrial sign-making applications globally.",
        "signBoard": "Sign Board",
        "signBoardDesc": "Retail signage, shop fronts, business signs",
        "lightBox": "Light Box",
        "lightBoxDesc": "Illuminated advertising, mall displays",
        "outdoor": "Outdoor Advertising",
        "outdoorDesc": "Billboards, banners, street signage",
        "digital": "Digital Printing",
        "digitalDesc": "UV printing, solvent printing substrates",
        "exhibition": "Exhibition Display",
        "exhibitionDesc": "Trade show stands, roll-ups, pop-up displays",
        "vehicle": "Vehicle Graphics",
        "vehicleDesc": "Vehicle wraps, fleet branding, window films"
      },
      "cta": {
        "title": "Ready to Source Premium Advertising Materials?",
        "subtitle": "Contact our team today for product specifications, pricing, and export shipping details. We respond within 24 hours on business days.",
        "getQuote": "Get a Quote",
        "whatsapp": "WhatsApp Us"
      },
      "caseStudies": {
        "label": "Case Studies",
        "title": "Real Projects. Real Results.",
        "subtitle": "See how our advertising materials have been deployed in commercial projects across multiple markets worldwide.",
        "viewAll": "View All Case Studies",
        "supermarket": "Supermarket Sign Project",
        "supermarketDesc": "Complete in-store signage system using PVC foam board and self-adhesive vinyl for a major supermarket chain in Southeast Asia.",
        "mallLightbox": "Mall Light Box Project",
        "mallLightboxDesc": "Acrylic and PVC flex banner light box panels installed across a shopping mall in the Middle East with consistent backlit performance.",
        "outdoorBillboard": "Outdoor Billboard Project",
        "outdoorBillboardDesc": "Large-format flex banner and aluminum composite panel supply for roadside billboard networks across European markets.",
        "viewCase": "View Case"
      },
      "about": {
        "label": "About Us",
        "title": "Factory-Direct Since 2021",
        "subtitle": "Foshan Jin Yu Advertising Material Co., Ltd is a professional advertising materials manufacturer integrating design, R&D, production and sales. Located in LiShui Town, Nanhai District, Foshan – the heart of China's advertising materials industry.",
        "iso2024": "ISO 9001 quality management certification achieved in 2024",
        "cantonnFair": "First international client partnership at Canton Fair, October 2022",
        "rd2023": "In-house R&D team established in March 2023",
        "production": "Production lines expanded with advanced equipment in July 2023",
        "learnMore": "Learn More About Us",
        "exportCountries": "Export Countries",
        "quoteResponse": "Quote Response"
      },
      "footer": {
        "brand": "Foshan Jin Yu Advertising Material Co., Ltd",
        "brandSub": "Professional Advertising Materials Manufacturer Since 2021",
        "brandDesc": "Integrated design, R&D, production and sales of advertising materials. ISO 9001 certified. Exporting to Europe, Americas, Southeast Asia, Middle East and beyond.",
        "products": "Products",
        "applications": "Applications",
        "company": "Company",
        "quickContact": "Quick Contact",
        "quickContactDesc": "Get pricing and product details within 24 hours.",
        "getQuote": "Get a Quote",
        "whatsappNow": "WhatsApp Now",
        "businessHours": "Business Hours",
        "weekday": "Mon – Fri: 09:00 – 18:00 (GMT+8)",
        "saturday": "Sat: 09:00 – 13:00",
        "copyright": "© 2024 Foshan Jin Yu Advertising Material Co., Ltd. All Rights Reserved.",
        "footerBottom": "ISO 9001 Certified · Foshan, Guangdong, China"
      },
      // Products page translations
      "products_page": {

        "cat": {
          "advertisingMedia": "Advertising Media",
          "advertisingPanel": "Advertising Panel",
          "displayStand": "Display Stand",
          "accessory": "Accessory"
        },
        "catDesc": {
          "advertisingMedia": "Wide range of printing media for digital inkjet, cutting and lamination applications.",
          "advertisingPanel": "Rigid board and panel materials for signage, display and construction applications.",
          "displayStand": "Professional display systems for exhibitions, retail promotions and outdoor events.",
          "accessory": "Essential tools and accessories for sign fabrication and installation."
        },
        "sub": {
          "selfAdhesiveVinyl": "Self Adhesive Vinyl",
          "transparentVinyl": "Transparent Self Adhesive Vinyl",
          "160Vinyl": "160 Self Adhesive Vinyl",
          "blackGlueVinyl": "Black Glue Self Adhesive Vinyl",
          "photoPaper": "Photo Paper",
          "petFilm": "PET Film",
          "backlitFilm": "Backlit Film For Light Box",
          "ecoPpBanner": "ECO PP Banner",
          "oneWayVision": "One Way Vision",
          "cuttingVinyl": "Cutting Vinyl",
          "pvcFlexBanner": "PVC Flex Banner",
          "polymericVinyl": "140 Polymeric Self-Adhesive Vinyl",
          "polymericLamination": "140 Polymeric Cold Lamination Film",
          "coldLamination": "Cold Lamination Film",
          "3dColdLamination": "3D Cold Lamination Film",
          "windowFilm": "Window Film",
          "reflective": "Reflective Materials",
          "canvasFabric": "Canvas, Flag Fabric, Soft Film, Heat Transfer Series",
          "pvcFoamBoard": "PVC Foam Board",
          "acrylicSheet": "Acrylic Sheet",
          "polystyreneSheet": "Polystyrene Sheet",
          "ppHollowSheet": "PP Hollow Sheet",
          "acp": "Aluminum Composite Panel",
          "absPvcKt": "ABS Sheet, ABS Double Color Sheet, PVC Rigid Sheet, KT Board",
          "xBanner": "X-Banner Series",
          "rollUpStand": "Roll Up Stand Series",
          "popUpBanner": "POP Up Banner",
          "aluminumReception": "Aluminum Reception",
          "ppPromotionTable": "PP Promotion Table",
          "tripodEasel": "Tripod POP Easel",
          "outdoorFlagpole": "Outdoor Flagpole Series",
          "foldingShelf": "Folding Shelf",
          "posterStand": "Poster Stand",
          "crystalLightBox": "Crystal Slim Light Box",
          "aluminumLightBox": "Aluminum Light Box",
          "waterInjectionFlagpole": "Water-Injection Flagpole",
          "lgateBanner": "Lgate Banner",
          "luxuryFoldingShelf": "Luxury Folding Shelf",
          "messageDisplay": "Message Display",
          "grommetMachine": "Grommet Machine",
          "ledChannelTrim": "LED Channelletter Trim",
          "ledModule": "LED Module",
          "ledLightBox": "LED Special for Light Box",
          "ledStrip": "LED Flexible Strip",
          "ledPowerSupply": "LED Power Supply",
          "cuttingMat": "Cutting Mat",
          "squeegee": "Squeegee",
          "knife": "Multi-functional Knife",
          "advertisingGlue": "Advertising Glue Series",
          "doubleSidesAdhesive": "Double Sides Adhesive, Sponge Sticker",
          "cableTieRope": "Nylon Cable Tie, Banner Rope",
          "hotWindGun": "Hot Wind Gun"
        },
        "desc": {
          "selfAdhesiveVinyl": "Premium self-adhesive vinyl for vehicle wraps, window graphics and general signage.",
          "transparentVinyl": "Crystal-clear adhesive vinyl for window and glass surface decoration.",
          "160Vinyl": "Heavy-duty 160g self-adhesive vinyl with excellent printability.",
          "blackGlueVinyl": "Black adhesive backing blocks underlying patterns, ideal for vehicle graphics.",
          "photoPaper": "High-gloss and matte photo paper for vivid indoor photo printing.",
          "petFilm": "Polyester film with high transparency, heat resistance and dimensional stability.",
          "backlitFilm": "Translucent film specially designed for backlit signage and light boxes.",
          "ecoPpBanner": "Eco-friendly polypropylene banner with water-resistant coating for outdoor printing.",
          "oneWayVision": "Perforated window film: full graphics outside, clear vision inside.",
          "cuttingVinyl": "Premium PVC cutting vinyl in 100+ colors for plotter cutting and lettering.",
          "pvcFlexBanner": "Durable PVC flex banner for outdoor billboards, frontlit and backlit applications.",
          "polymericVinyl": "High-performance polymeric vinyl with 5–7 year outdoor durability.",
          "polymericLamination": "Cold lamination film for protecting and enhancing printed graphics.",
          "coldLamination": "Pressure-sensitive lamination film for photo prints and digital graphics.",
          "3dColdLamination": "Textured 3D surface cold lamination film for decorative and high-end display prints.",
          "windowFilm": "Privacy, decorative and solar control window films for residential and commercial use.",
          "reflective": "Engineer-grade and high-intensity reflective sheeting for traffic signs and safety.",
          "canvasFabric": "Full range of fabric media including canvas, flag fabric, soft film and heat transfer paper.",
          "pvcFoamBoard": "Lightweight, rigid PVC foam board ideal for signs, exhibitions and interior decoration.",
          "acrylicSheet": "Crystal-clear cast and extruded acrylic sheets for signage, displays and light boxes.",
          "polystyreneSheet": "Economical PS sheet for vacuum forming, point-of-sale displays and packaging.",
          "ppHollowSheet": "Corrugated polypropylene sheet for temporary signage, packaging and reusable boards.",
          "acp": "Aluminium composite cladding panel for building facades, outdoor signs and canopy structures.",
          "absPvcKt": "Versatile rigid sheet series for engraving, routing and diverse advertising fabrication needs.",
          "xBanner": "Lightweight X-frame banner stands for indoor promotions and trade shows.",
          "rollUpStand": "Portable retractable roll-up banner stands, quick setup for exhibitions and events.",
          "popUpBanner": "Folding pop-up display system for large-format backdrops and trade show booths.",
          "aluminumReception": "Modular aluminum reception desk for trade shows and brand activation events.",
          "ppPromotionTable": "Foldable PP plastic promotion table for retail and outdoor sampling activities.",
          "tripodEasel": "Adjustable tripod easel stand for posters, canvas and display boards.",
          "outdoorFlagpole": "Feather and teardrop outdoor flagpoles for event promotion and storefront branding.",
          "foldingShelf": "Compact folding display shelf for retail product showcase and event use.",
          "posterStand": "Snap-open aluminum poster frame stand for A1/A0 posters in retail and public spaces.",
          "crystalLightBox": "Ultra-thin LED crystal light box for indoor illuminated signage and menus.",
          "aluminumLightBox": "Durable aluminum frame LED light box for outdoor and indoor advertising displays.",
          "waterInjectionFlagpole": "Water-fillable base flagpole for outdoor events without ground anchoring.",
          "lgateBanner": "L-shaped gate banner stand for entrance and event branding displays.",
          "luxuryFoldingShelf": "Premium folding display shelf with high-end finish for luxury brand presentations.",
          "messageDisplay": "Tabletop and freestanding message display board for retail and hospitality settings.",
          "grommetMachine": "Manual and electric grommet punch machine for banner finishing and signage production.",
          "ledChannelTrim": "Aluminum trim cap for channel letter sign fabrication, various profiles available.",
          "ledModule": "High-brightness LED modules for channel letters, sign boxes and backlit displays.",
          "ledLightBox": "Specially designed LED strips and modules optimized for even light box illumination.",
          "ledStrip": "Flexible LED strip lights for decorative, accent and signage backlighting.",
          "ledPowerSupply": "Waterproof and indoor LED drivers for all sign lighting applications.",
          "cuttingMat": "Self-healing cutting mat protecting work surfaces during vinyl and media cutting.",
          "squeegee": "Felt-edge and hard plastic squeegees for bubble-free vinyl and window film application.",
          "knife": "Professional snap-off and precision knives for vinyl cutting and media trimming.",
          "advertisingGlue": "Specialist adhesives for PVC, acrylic, ACP and fabric bonding in sign fabrication.",
          "doubleSidesAdhesive": "Double-sided tapes and foam sponge adhesives for panel mounting and sign assembly.",
          "cableTieRope": "Heavy-duty nylon cable ties and banner ropes for securing and hanging displays.",
          "hotWindGun": "Professional heat gun for vinyl wrapping, shrink film and sign installation."
        },
        "getQuote": "Get a Quote",
        "cta": {
          "title": "Need a Custom Quote?",
          "subtitle": "Tell us your requirements — we respond within 24 hours.",
          "contactBtn": "Contact Us"
        },
        "pageTitle": "Advertising Material Products",
        "pageSubtitle": "Comprehensive range of advertising substrates and display materials. Factory-direct pricing, custom specifications, global shipping.",
        "breadcrumb": "Products",
        "nav": {
          "selfAdhesiveVinyl": "Self Adhesive Vinyl",
          "flexBanner": "Flex Banner",
          "oneWayVision": "One Way Vision",
          "cuttingVinyl": "Cutting Vinyl",
          "polymericVinyl": "Polymeric / Lamination",
          "windowFilm": "Window Film / Reflective",
          "pvcFoamBoard": "PVC Foam Board",
          "acrylicSheet": "Acrylic Sheet",
          "acp": "ACP",
          "ppHollowSheet": "PP Hollow Sheet",
          "displayStand": "Display Stand",
          "accessories": "Accessories"
        },
        "selfAdhesiveVinyl": {
          "title": "Self Adhesive Vinyl",
          "tag": "Vinyl Films",
          "desc": "Premium self-adhesive vinyl available in multiple weights and finishes. Suitable for vehicle wraps, window graphics, promotional displays, floor graphics and general signage applications. Strong adhesion, easy application, clean removable options available.",
          "specs": "Specifications",
          "model": "Model",
          "weight": "Weight",
          "thickness": "Thickness",
          "finish": "Finish",
          "glossyMatte": "Glossy / Matte",
          "transparent": "Transparent",
          "blackBack": "Black Back / High Gloss",
          "width": "Width: 0.61 / 1.07 / 1.27 / 1.52 m",
          "rollLength": "Roll Length: 50 m standard",
          "customRoll": "Custom roll available",
          "printable": "Solvent / Eco / UV printable",
          "feature1": "High-tack and removable adhesive options",
          "feature2": "Excellent ink absorption for vivid color output",
          "feature3": "UV-resistant surface coating for outdoor durability (3–5 years)",
          "feature4": "Export packaging: sealed roll in carton, moisture-proof",
          "keyFeatures": "Key Features",
          "getQuote": "Get a Quote",
          "whatsapp": "WhatsApp"
        },
        "flexBanner": {
          "title": "PVC Flex Banner",
          "tag": "Banner Media",
          "desc": "High-quality PVC flex banner for large format outdoor and indoor advertising. Available in front-lit, back-lit, knife-coated and blockout types. Excellent tensile strength, waterproof, tear-resistant, and compatible with all major solvent and UV printers.",
          "specs": "Specifications",
          "productTypes": "Product Types",
          "type": "Type",
          "weight": "Weight",
          "application": "Application",
          "frontLit": "Front-lit",
          "frontLitApp": "Outdoor billboards, sunlit signage",
          "backLit": "Back-lit",
          "backLitApp": "Light boxes, illuminated signs",
          "knifeCoated": "Knife-coated",
          "knifeCoatedApp": "High-resolution outdoor printing",
          "blockout": "Blockout",
          "blockoutApp": "Double-sided, opaque applications",
          "width": "Width: 2.5 / 3.2 / 5.0 m",
          "length": "Length: 50 m per roll",
          "finishing": "Welded / Hemmed finishing",
          "feature1": "High tensile strength – withstands wind and weather",
          "feature2": "Waterproof, mildew-proof, UV-stabilized",
          "feature3": "Compliant with EU RoHS and REACH standards",
          "keyFeatures": "Key Features",
          "getQuote": "Get a Quote",
          "whatsapp": "WhatsApp"
        },
        "cta": {
          "title": "Need Specific Specifications or Custom Products?",
          "subtitle": "Contact our team with your exact requirements. We offer OEM manufacturing, custom sizes, private label, and tailored export packaging.",
          "getQuote": "Get a Quote",
          "whatsappNow": "WhatsApp Now"
        },
        "oneWayVision": {
          "title": "One Way Vision",
          "tag": "Window Media",
          "desc": "Perforated window film that provides full graphic display on the exterior while maintaining visibility from the inside. Ideal for shop windows, vehicle windows, glass partitions and large window advertising.",
          "specs": "Specifications",
          "specification": "Specification",
          "value": "Value",
          "perforation": "Perforation",
          "perforationVal": "50/50 (standard) / 60/40 available",
          "width": "Width",
          "widthVal": "1.07 m / 1.27 m / 1.52 m",
          "surface": "Surface",
          "surfaceVal": "Glossy / Matte",
          "adhesive": "Adhesive",
          "adhesiveVal": "Grey permanent adhesive",
          "outdoorLife": "Outdoor life",
          "outdoorLifeVal": "3–5 years",
          "feature1": "See-through from inside, full graphic from outside",
          "feature2": "Excellent sunlight resistance and color fastness",
          "feature3": "Compatible with eco-solvent and UV printing",
          "keyFeatures": "Key Features",
          "getQuote": "Get a Quote",
          "whatsapp": "WhatsApp"
        },
        "cuttingVinyl": {
          "title": "Cutting Vinyl",
          "tag": "Vinyl Films",
          "desc": "Professional grade cutting vinyl for plotter cutting applications. Available in 150+ solid colors, metallic, chrome, and specialty finishes. Consistent thickness for clean cutting and easy weeding.",
          "specs": "Specifications",
          "category": "Category",
          "thickness": "Thickness",
          "colors": "Colors",
          "monomeric": "Monomeric",
          "polymeric": "Polymeric",
          "metallic": "Metallic",
          "fluorescent": "Fluorescent",
          "reflective": "Reflective",
          "solidColors": "100+ solid colors",
          "metallicColors": "Gold, Silver, Chrome",
          "neonColors": "10 neon colors",
          "safetyColors": "15 safety colors",
          "feature1": "Clean, precise cutting with standard plotter blades",
          "feature2": "Easy to weed – even fine details",
          "feature3": "Pantone color matching available for OEM orders",
          "keyFeatures": "Key Features",
          "getQuote": "Get a Quote",
          "whatsapp": "WhatsApp"
        },
        "polymericVinyl": {
          "title": "Polymeric Vinyl & Cold Lamination",
          "tag": "Specialty Films",
          "desc": "Calendered and cast polymeric vinyl for demanding outdoor applications. Paired with cold lamination films (glossy, matte, satin) for UV and scratch protection on printed graphics.",
          "specs": "Specifications",
          "product": "Product",
          "type": "Type",
          "outdoorLife": "Outdoor Life",
          "polyVinyl": "Polymeric Vinyl",
          "calendered": "Calendered PVC",
          "castVinyl": "Cast Vinyl",
          "castPvc": "Cast PVC",
          "coldLamGlossy": "Cold Lam – Glossy",
          "coldLamMatte": "Cold Lam – Matte",
          "coldLamSatin": "Cold Lam – Satin",
          "feature1": "Conformable to curved surfaces without wrinkling",
          "feature2": "Lamination films provide scratch and chemical resistance",
          "feature3": "Anti-UV coating prolongs print life significantly",
          "keyFeatures": "Key Features",
          "getQuote": "Get a Quote",
          "whatsapp": "WhatsApp"
        },
        "windowFilm": {
          "title": "Window Film & Reflective Sheeting",
          "tag": "Safety & Decorative",
          "desc": "Frosted and decorative window films for privacy and aesthetics. Engineering-grade, high-intensity, and diamond-grade reflective sheeting for road safety, traffic signs, and vehicle markings.",
          "specs": "Specifications",
          "product": "Product",
          "gradeType": "Grade / Type",
          "application": "Application",
          "frosted": "Frosted Window Film",
          "translucent": "Translucent PVC",
          "frostedApp": "Privacy glass, office partitions",
          "solar": "Solar Control Film",
          "metallized": "Metallized PET",
          "solarApp": "Heat reduction, glare control",
          "eg": "Reflective Sheet – EG",
          "engGrade": "Engineering Grade",
          "egApp": "Road signs, parking lots",
          "hi": "Reflective Sheet – HI",
          "highIntensity": "High Intensity",
          "hiApp": "Highway signs, safety vests",
          "dg": "Reflective Sheet – DG",
          "diamondGrade": "Diamond Grade",
          "dgApp": "Premium traffic control",
          "feature1": "Reflective sheeting meets ASTM D4956 standards",
          "feature2": "Available in all standard safety colors",
          "feature3": "Window films with permanent or static-cling adhesive",
          "keyFeatures": "Key Features",
          "getQuote": "Get a Quote",
          "whatsapp": "WhatsApp"
        },
        "pvcFoamBoard": {
          "title": "PVC Foam Board",
          "tag": "Rigid Board",
          "desc": "Closed-cell PVC foam board – lightweight, rigid, waterproof, and easy to fabricate. Available in 1–30mm thickness. Used widely in advertising signs, exhibition panels, furniture backing, and construction decoration.",
          "specs": "Specifications",
          "thickness": "Thickness",
          "density": "Density",
          "commonUse": "Common Use",
          "thick1": "1 – 3 mm",
          "thick2": "5 – 8 mm",
          "thick3": "10 – 15 mm",
          "thick4": "18 – 25 mm",
          "thick5": "30 mm",
          "use1": "Display boards, printing substrate",
          "use2": "Sign boards, shop signs",
          "use3": "Exhibition stands, partitions",
          "use4": "Furniture backing, shelving",
          "use5": "Structural display applications",
          "standard": "Standard: 1220×2440 mm",
          "customSize": "Custom sheet size",
          "colors": "White / Black / Color",
          "uvPrint": "UV printable",
          "feature1": "Waterproof, moisture-resistant, pest-proof",
          "feature2": "Easy to cut, rout, glue, and screw",
          "feature3": "Custom thickness and sheet size available for OEM",
          "keyFeatures": "Key Features",
          "getQuote": "Get a Quote",
          "whatsapp": "WhatsApp"
        },
        "acrylicSheet": {
          "title": "Acrylic Sheet",
          "tag": "Rigid Board",
          "desc": "High optical clarity acrylic (PMMA) sheets in cast and extruded form. Available 1–50mm in clear, frosted, opal, tinted, and mirror finishes. Ideal for light boxes, illuminated signs, and display racks.",
          "specs": "Specifications",
          "type": "Type",
          "thickness": "Thickness",
          "transparency": "Transparency",
          "clearCast": "Clear Cast",
          "opalFrosted": "Opal / Frosted",
          "tinted": "Tinted / Color",
          "mirror": "Mirror Acrylic",
          "fluorescent": "Fluorescent",
          "diffused": "Diffused light",
          "various": "Various options",
          "reflective": "Reflective surface",
          "uvGlow": "UV-reactive glow",
          "keyFeatures": "Key Features",
          "getQuote": "Get a Quote",
          "whatsapp": "WhatsApp"
        },
        "acp": {
          "title": "Aluminum Composite Panel (ACP)",
          "tag": "Panel System",
          "desc": "Two aluminum skins bonded to a PE or mineral-filled core. Lightweight, rigid, flat, and weather-resistant. Used extensively for building façades, shop fronts, outdoor signage, and architectural cladding.",
          "specs": "Specifications",
          "keyFeatures": "Key Features",
          "getQuote": "Get a Quote",
          "whatsapp": "WhatsApp"
        },
        "ppHollowSheet": {
          "title": "PP Hollow Sheet (Corrugated)",
          "tag": "Plastic Board",
          "desc": "Polypropylene corrugated sheet – ultra-lightweight, recyclable, waterproof, and economical. Used for temporary signage, real estate signs, political signs, packaging, and short-term display applications.",
          "specs": "Specifications",
          "keyFeatures": "Key Features",
          "getQuote": "Get a Quote",
          "whatsapp": "WhatsApp"
        },
        "displayStand": {
          "title": "Display Stands & Exhibition Systems",
          "tag": "Display Solutions",
          "desc": "Complete range of portable display and exhibition stand systems for trade shows, retail, and events worldwide.",
          "requestQuote": "Request Display Stand Catalog",
          "whatsapp": "WhatsApp"
        },
        "accessories": {
          "title": "Sign-Making Accessories & Tools",
          "tag": "Accessories",
          "desc": "Complete accessories for professional sign fabrication and installation. Everything your sign shop needs, sourced from one supplier.",
          "requestQuote": "Request Accessories Catalog",
          "whatsapp": "WhatsApp"
        }
      },
      // Applications page translations
      "app_page": {
        "pageTitle": "Applications",
        "pageSubtitle": "Discover how our advertising materials are used across various industries and applications worldwide.",
        "breadcrumb": "Applications",
        "signBoard": "Sign Board",
        "signBoardDesc": "From retail shop fronts to large commercial building signs, our materials provide the structural durability and visual quality needed for professional sign making.",
        "signBoardMaterials": "Recommended Materials",
        "signBoardPvc": "PVC Foam Board (3–10mm)",
        "signBoardPvcDesc": "Lightweight, paintable, easy to router-cut channel letters",
        "signBoardAcp": "Aluminum Composite Panel (3–4mm)",
        "signBoardAcpDesc": "Metal look, rigid, weather-resistant for outdoor shop signs",
        "signBoardVinyl": "Self Adhesive Vinyl (100–140g)",
        "signBoardVinylDesc": "Face printed graphics, lettering and decorative overlays",
        "signBoardCta": "Get Materials for Sign Board",
        "lightBox": "Light Box",
        "lightBoxDesc": "Illuminated advertising panels require materials with specific light diffusion, transparency, and print adhesion properties.",
        "lightBoxMaterials": "Recommended Materials",
        "lightBoxAcrylic": "Opal Acrylic Sheet (3–5mm)",
        "lightBoxAcrylicDesc": "Even light diffusion, ideal for LED backlit signage",
        "lightBoxBanner": "Back-lit PVC Flex Banner",
        "lightBoxBannerDesc": "High clarity for illuminated printable graphic panels",
        "lightBoxLed": "LED Modules + Power Supply",
        "lightBoxLedDesc": "IP65 LED strips and 12V/24V power units",
        "lightBoxCta": "Get Materials for Light Box",
        "digitalPrinting": "Digital Printing",
        "digitalPrintingDesc": "Digital printing shops require substrates that deliver vibrant color output, consistent ink adhesion, and durability.",
        "outdoorAdvertising": "Outdoor Advertising",
        "outdoorAdvertisingDesc": "Outdoor advertising materials face harsh UV exposure, wind loads, rain, temperature cycles, and physical impacts. Our outdoor-grade products are formulated and tested for sustained performance in demanding exterior environments across global climates.",
        "outdoorMaterials": "Recommended Materials",
        "outdoorFrontLit": "Front-lit Flex Banner (440–650 g/m²)",
        "outdoorFrontLitDesc": "Large format billboards, outdoor flex displays",
        "outdoorAcp": "Aluminum Composite Panel",
        "outdoorAcpDesc": "Rigid outdoor signs, façade panels, bus shelters",
        "outdoorReflective": "Reflective Sheeting (HI / DG Grade)",
        "outdoorReflectiveDesc": "Road signs, safety markings, traffic control",
        "outdoorCta": "Get Outdoor Advertising Materials",
        "exhibitionDisplay": "Exhibition Display",
        "exhibitionDisplayDesc": "Trade shows, exhibitions, and corporate events demand portable, visually impactful display systems. Our display stands and print media combine ease of transport with professional presentation quality for global event professionals.",
        "exhibitionMaterials": "Recommended Materials",
        "exhibitionRollUp": "Roll Up Stands",
        "exhibitionRollUpDesc": "Portable, compact, quick setup",
        "exhibitionPopUp": "Pop Up Walls",
        "exhibitionPopUpDesc": "Large backdrop, modular systems",
        "exhibitionLightBox": "Light Box Panels",
        "exhibitionLightBoxDesc": "Illuminated fabric displays",
        "exhibitionFlags": "Feather Flags",
        "exhibitionFlagsDesc": "Outdoor event branding",
        "exhibitionCta": "Get Exhibition Display Materials",
        "vehicleGraphics": "Vehicle Graphics"
      },
      // Case Studies page translations
      "case_page": {
        "pageTitle": "Case Studies",
        "pageSubtitle": "Explore our successful projects and see how we've helped clients worldwide.",
        "breadcrumb": "Case Studies",
        "case1": "Supermarket Sign Project",
        "case1Location": "Location",
        "case1Scale": "Scale",
        "case1Volume": "Volume",
        "case1Materials": "Materials Supplied",
        "case1Outcomes": "Project Outcomes",
        "case2": "Mall Light Box Project",
        "case3": "Outdoor Billboard Project"
      },
      // Blog page translations
      "blog_page": {
        "pageTitle": "Blog",
        "pageSubtitle": "Stay updated with the latest industry news, product guides, and company updates.",
        "breadcrumb": "Blog",
        "industryKnowledge": "Industry Knowledge",
        "materialGuide": "Material Guide",
        "printingTechnology": "Printing Technology",
        "readMore": "Enquire About Products",
        "viewCert": "View Our Certificate",
        "requestDocs": "Request Compliance Docs"
      },
      // About page translations
      "about_page": {
        "pageTitle": "About Us",
        "pageSubtitle": "Learn more about Foshan Jin Yu Advertising Material Co., Ltd - your trusted partner in advertising materials.",
        "breadcrumb": "About Us",
        "companyProfile": "Company Profile",
        "whoWeAre": "Who We Are",
        "whoWeAreDesc": "Foshan Jin Yu Advertising Material Co., Ltd is a professional manufacturer of advertising materials established in 2021. We are located in the U+Zhigu Industrial Park, LiShui Town, Nanhai District, Foshan City, Guangdong Province – one of China's most concentrated hubs for advertising material production.",
        "businessDesc": "Our business integrates design, research and development, production and sales of advertising materials including self adhesive vinyl, PVC flex banner, PVC foam board, acrylic sheet, aluminum composite panel, PP hollow sheet, reflective sheeting, display stands and sign-making accessories.",
        "exportDesc": "We export to Southeast Asia, Europe, the Americas, the Middle East and other global markets. Our products are known for durability, customizability, and competitive factory-direct pricing.",
        "yearEstablished": "Year Established",
        "exportCountries": "Export Countries",
        "isoCertified": "ISO Certified",
        "productLines": "Core Product Lines",
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
        "year1": "Year 1",
        "companyEstablished": "Company Established",
        "companyEstablishedDesc": "Foshan Jin Yu Advertising Material Co., Ltd officially founded in Nanhai District, Foshan. Initial product range focused on PVC foam board and self adhesive vinyl for domestic market supply.",
        "oct2022": "October 2022",
        "firstInternational": "First International Clients – Canton Fair",
        "firstInternationalDesc": "Participated in the Canton Fair (China Import and Export Fair) for the first time. Successfully established partnerships with overseas buyers from Southeast Asia, the Middle and Europe.",
        "mar2023": "March 2023",
        "rdTeam": "R&D Team Established",
        "rdTeamDesc": "Dedicated research and development team formed to drive product innovation, custom formulation development, and technical support capabilities for international clients.",
        "jul2023": "July 2023",
        "capacityExpanded": "Production Capacity Expanded",
        "capacityExpandedDesc": "Significant investment in new production lines and advanced equipment. Manufacturing capacity increased substantially to meet growing international order volumes across all product categories.",
        "year2024": "2024",
        "isoAchieved": "ISO 9001 Certification Achieved",
        "isoAchievedDesc": "Successfully completed ISO 9001:2015 quality management system certification. Full quality documentation, process controls, and continuous improvement systems formalized across all operations.",
        "companyAtGlance": "Company at a Glance",
        "founded": "Founded",
        "location": "Location",
        "certification": "Certification",
        "products": "Products",
        "exportMarkets": "Export Markets",
        "contact": "Contact",
        "factory": "Factory",
        "factoryTitle": "State-of-the-Art Manufacturing Facility",
        "factoryDesc": "Located in U+Zhigu Industrial Park, LiShui Town, Nanhai District – one of Foshan's premium industrial zones dedicated to advanced manufacturing.",
        "factoryLocation": "Factory Location",
        "factoryLocationDesc": "D3168, U+Zhigu Industrial Park, LiShui Town, Nanhai District, Foshan City, Guangdong",
        "productionEquipment": "Production Equipment",
        "productionEquipmentDesc": "Advanced extrusion lines, calendering equipment, coating machines, and slitting systems expanded in 2023",
        "rdLaboratory": "R&D Laboratory",
        "rdLaboratoryDesc": "In-house testing lab and R&D team for custom formulation, product development, and quality verification",
        "exportWarehouse": "Export Warehouse",
        "exportWarehouseDesc": "Dedicated export packaging zone with moisture-proof and shock-resistant packing for international shipping",
        "productionCapacity": "Production Capacity",
        "scaleTitle": "Scale to Meet Your Volume Requirements",
        "scaleDesc": "Following our 2023 capacity expansion, we can handle large-scale orders with consistent quality from first sample to final batch.",
        "vinylCapacity": "sqm/month Vinyl Capacity",
        "flexBannerCapacity": "sqm/month Flex Banner",
        "rigidBoardCapacity": "sheets/month Rigid Board",
        "sampleLeadTime": "Sample Lead Time",
        "qualityControl": "Quality Control Process",
        "qualityControlDesc": "Raw material incoming inspection → in-process quality checks → final product testing → packaging verification → pre-shipment inspection available.",
        "exportLogistics": "Export Logistics",
        "exportLogisticsDesc": "FOB Guangzhou / Foshan. LCL and FCL available. We work with major freight forwarders and can assist with customs documentation, COO, and inspection certificates.",
        "oemCustom": "OEM / Custom Orders",
        "oemCustomDesc": "Private label packaging, custom specifications, color matching, and dedicated production runs available for established importers and distributors.",
        "certificates": "Certificates",
        "certTitle": "Quality & Compliance Credentials",
        "certDesc": "Our certifications demonstrate our commitment to internationally recognized quality management standards and product compliance.",
        "iso9001": "ISO 9001:2015",
        "iso9001Desc": "Quality Management System certification. Achieved in 2024. Covers all manufacturing operations including vinyl, board products and accessories.",
        "valid": "Valid & Current",
        "reachRohs": "REACH / RoHS",
        "reachRohsDesc": "EU chemical and hazardous substance compliance for applicable product lines. Supporting documentation provided for EU import requirements.",
        "onRequest": "On Request",
        "testReports": "Test Reports",
        "testReportsDesc": "Third-party laboratory test reports for physical performance, weather resistance, fire rating and other product-specific certifications available per product line.",
        "needCert": "Need specific certification documentation for your import requirements?",
        "requestCert": "Request Certificate Copies",
        "ourTeam": "Our Team",
        "teamTitle": "People Behind Jin Yu",
        "teamDesc": "Our team combines manufacturing expertise, international trade experience, and technical knowledge to serve global B2B clients professionally.",
        "vivian": "Vivian",
        "vivianRole": "Export Sales Manager",
        "vivianDesc": "International B2B sales, client relations and export documentation. Direct contact for all international enquiries.",
        "rdDept": "R&D Department",
        "rdDeptRole": "Technical Development Team",
        "rdDeptDesc": "Product innovation, custom formulation, quality control, and technical documentation for international compliance requirements.",
        "productionTeam": "Production Team",
        "productionTeamRole": "Manufacturing & QC",
        "productionTeamDesc": "Experienced production workforce operating our expanded manufacturing facility with ISO 9001 quality procedures.",
        "ready": "Ready to Start a Partnership?",
        "readyDesc": "We welcome inquiries from distributors, importers, sign-making companies, and print shop owners worldwide. Let's build a long-term business relationship.",
        "contactNow": "Contact Us Now",
        "whatsappNow": "WhatsApp"
      },
      // Contact page translations
      "contact_page": {
        "pageTitle": "Contact Us",
        "pageSubtitle": "Get in touch with our team for product inquiries, quotes, and technical support.",
        "breadcrumb": "Contact Us",
        "getInTouch": "Get in Touch",
        "factoryAddress": "Factory Address",
        "address": "Address",
        "phone": "Phone",
        "email": "Email",
        "whatsapp": "WhatsApp",
        "businessHours": "Business Hours",
        "weekday": "Mon – Fri: 09:00 – 18:00 (GMT+8)",
        "saturday": "Sat: 09:00 – 13:00",
        "sendMessage": "Send Message",
        "yourName": "Your Name",
        "yourEmail": "Your Email",
        "subject": "Subject",
        "message": "Message",
        "submit": "Submit",
        "contactInfo": "Contact Information"
      }
    },
    "zh": {
      "nav": {
        "home": "首页",
        "products": "产品",
        "applications": "应用场景",
        "caseStudies": "案例研究",
        "blog": "博客",
        "aboutUs": "关于我们",
        "contactUs": "联系我们",
        "getQuote": "获取报价",
        "products_sub": {
          "pvcFoamBoard": "PVC发泡板",
          "acrylicSheet": "亚克力板",
          "aluminumPanel": "铝塑板",
          "ppHollowSheet": "PP中空板",
          "selfAdhesiveVinyl": "自粘贴纸",
          "flexBanner": "灯箱布"
        },
        "applications_sub": {
          "signBoard": "标识牌",
          "lightBox": "灯箱",
          "digitalPrinting": "数码印刷",
          "outdoorAdvertising": "户外广告"
        },
        "caseStudies_sub": {
          "supermarket": "超市标识项目",
          "mallLightbox": "商场灯箱项目",
          "outdoorBillboard": "户外广告牌项目",
          "shopSign": "门店标识项目"
        },
        "blog_sub": {
          "industryKnowledge": "行业知识",
          "materialGuide": "材料指南",
          "printingTechnology": "印刷技术"
        },
        "about_sub": {
          "companyProfile": "公司介绍",
          "factory": "工厂",
          "productionCapacity": "生产能力",
          "certificates": "证书资质"
        }
      },
      "hero": {
        "badge": "ISO 9001认证制造商 · 成立于2021年",
        "title": "中国<span style='color: #E8751A; font-weight: bold;'>头部</span>广告材料工厂",
        "subtitle": "佛山市金昱广告材料有限公司——专业生产PVC泡沫板、亚克力板、乙烯基板、柔性横幅、反光板及广告配件。深受欧洲、美洲、东南亚及中东买家的信赖。",
        "exploreProducts": "浏览产品",
        "getQuote": "获取报价",
        "downloadCatalog": "下载产品目录",
        "stats": {
          "countries": "出口国家",
          "products": "产品系列",
          "clients": "全球客户",
          "certified": "ISO 9001认证"
        }
      },
      "trustBar": {
        "ownFactory": "佛山自有工厂",
        "export50": "出口50+国家",
        "isoCertified": "ISO 9001认证",
        "rdTeam": "自有研发团队",
        "customPackaging": "定制出口包装",
        "whatsapp": "WhatsApp: +86 138 0882 8019"
      },
      "stats": {
        "yearEstablished": "成立年份",
        "productLines": "核心产品线",
        "countries": "出口国家/地区",
        "qualityCertified": "质量认证"
      },
      "products": {
        "label": "我们的产品",
        "title": "全系列广告材料",
        "subtitle": "从硬质板材到柔性膜材，我们生产和供应全方位的广告材料，广泛应用于全球标识制作、数码印刷和展示领域。",
        "viewAll": "查看全部产品"
      },
      "products_detail": {
        "selfAdhesiveVinyl": "自粘贴纸",
        "selfAdhesiveVinylDesc": "80g / 100g / 120g / 140g / 160g。透明、黑色底、高光。适用于车身贴膜、橱窗装饰、促销标识。",
        "pvcFlexBanner": "PVC灯箱布",
        "pvcFlexBannerDesc": "前打光、后打光、刀刮、遮光类型。适用于户外广告牌、灯箱、活动横幅和大幅面印刷。",
        "pvcFoamBoard": "PVC发泡板",
        "pvcFoamBoardDesc": "1-30mm厚度。轻便、防水、易切割。广泛应用于标识牌、展架、家具装饰。",
        "acrylicSheet": "亚克力板",
        "acrylicSheetDesc": "1-50mm，透明或多种颜色。高透明度、抗紫外线。适用于灯箱、标识、展示架和建筑装饰。",
        "aluminumPanel": "铝塑板",
        "aluminumPanelDesc": "PE芯材，可选PVDF涂层。防火、耐候。适用于建筑幕墙、户外标识、店铺门头。",
        "reflectiveSheet": "反光贴",
        "reflectiveSheetDesc": "工程级、高强级、钻石级。适用于道路标志、安全标识、车辆标识、交通管理。"
      },
      "whyChooseUs": {
        "label": "为什么选择我们",
        "title": "您可信赖的广告材料合作伙伴",
        "subtitle": "我们结合制造实力和全球贸易经验，为全球B2B客户提供稳定的质量和具有竞争力的价格。",
        "factory": "自有工厂生产",
        "factoryDesc": "佛山垂直整合制造——从原材料采购到成品。每个阶段全程质量控制。",
        "rd": "自有研发团队",
        "rdDesc": "2023年成立的专用研发团队。持续产品创新和定制配方，满足您的特定市场需求。",
        "iso": "ISO 9001认证",
        "isoDesc": "2024年获得ISO 9001质量管理认证。标准化流程确保每批产品质量一致。",
        "global": "全球出口经验",
        "globalDesc": "自2022年出口到欧洲、美洲、东南亚和中东。我们了解合规、文件和物流。",
        "customization": "全方位定制",
        "customizationDesc": "可定制尺寸、颜色、厚度、表面处理和OEM品牌。我们与客户紧密合作开发产品。",
        "packaging": "出口级包装",
        "packagingDesc": "产品按国际海运标准包装。纸箱、托盘和防潮保护确保全球安全交付。"
      },
      "applications": {
        "label": "应用领域",
        "title": "我们的材料应用场景",
        "subtitle": "我们的广告材料在全球范围内广泛用于商业和工业标识制作应用。",
        "signBoard": "标识牌",
        "signBoardDesc": "零售标识、店铺门面、企业标识",
        "lightBox": "灯箱",
        "lightBoxDesc": "照明广告、商场展示",
        "outdoor": "户外广告",
        "outdoorDesc": "广告牌、横幅、街边标识",
        "digital": "数码印刷",
        "digitalDesc": "UV印刷、溶剂印刷基材",
        "exhibition": "展览展示",
        "exhibitionDesc": "展台、展架、易拉宝",
        "vehicle": "车贴广告",
        "vehicleDesc": "车身贴膜、车队标识、窗贴"
      },
      "cta": {
        "title": "准备好采购优质广告材料了吗？",
        "subtitle": "今天就联系我们获取产品规格、定价和出口运输详情。我们将在24小时内回复。",
        "getQuote": "获取报价",
        "whatsapp": "WhatsApp咨询"
      },
      "caseStudies": {
        "label": "案例研究",
        "title": "真实项目。真实效果。",
        "subtitle": "了解我们的广告材料如何在全球多个市场的商业项目中得到应用。",
        "viewAll": "查看全部案例",
        "supermarket": "超市标识项目",
        "supermarketDesc": "为东南亚某大型超市连锁店提供完整的店内标识系统，使用PVC发泡板和自粘贴纸。",
        "mallLightbox": "商场灯箱项目",
        "mallLightboxDesc": "为中东某购物中心安装亚克力和PVC灯箱布灯箱面板，背光效果一致。",
        "outdoorBillboard": "户外广告牌项目",
        "outdoorBillboardDesc": "为欧洲市场的路边广告牌网络供应大幅面灯箱布和铝塑板。",
        "viewCase": "查看详情"
      },
      "about": {
        "label": "关于我们",
        "title": "自2021年自有工厂直销",
        "subtitle": "佛山金誉广告材料有限公司是一家集设计、研发、生产、销售于一体的专业广告材料制造商。位于佛山市南海区里水镇——中国广告材料产业的核心地带。",
        "iso2024": "2024年获得ISO 9001质量管理认证",
        "cantonnFair": "2022年10月广交会首次国际客户合作",
        "rd2023": "2023年3月成立自有研发团队",
        "production": "2023年7月引进先进设备扩大生产线",
        "learnMore": "了解更多关于我们",
        "exportCountries": "出口国家",
        "quoteResponse": "报价响应"
      },
      "footer": {
        "brand": "佛山金誉广告材料有限公司",
        "brandSub": "专业广告材料制造商 自2021年",
        "brandDesc": "集设计、研发、生产、销售于一体的广告材料制造商。ISO 9001认证。出口欧洲、美洲、东南亚、中东等地区。",
        "products": "产品",
        "applications": "应用",
        "company": "公司",
        "quickContact": "快速联系",
        "quickContactDesc": "24小时内获取报价和产品详情。",
        "getQuote": "获取报价",
        "whatsappNow": "WhatsApp咨询",
        "businessHours": "工作时间",
        "weekday": "周一至周五: 09:00 – 18:00 (GMT+8)",
        "saturday": "周六: 09:00 – 13:00",
        "copyright": "© 2024 佛山金誉广告材料有限公司 版权所有",
        "footerBottom": "ISO 9001认证 · 广东佛山"
      },
      // Products page translations
      "products_page": {

        "cat": {
          "advertisingMedia": "广告介质",
          "advertisingPanel": "广告板材",
          "displayStand": "展示架",
          "accessory": "配件"
        },
        "catDesc": {
          "advertisingMedia": "涵盖数码喷绘、刻字及覆膜等多种应用的广告介质。",
          "advertisingPanel": "适用于标识、展示及建筑工程的刚性板材。",
          "displayStand": "专业展示系统，适用于展览、零售促销及户外活动。",
          "accessory": "标识制作与安装所需的工具及配件。"
        },
        "sub": {
          "selfAdhesiveVinyl": "自粘乙烯基",
          "transparentVinyl": "透明自粘乙烯基",
          "160Vinyl": "160 自粘乙烯基",
          "blackGlueVinyl": "黑胶自粘乙烯基",
          "photoPaper": "相纸",
          "petFilm": "PET 膜",
          "backlitFilm": "灯箱背光膜",
          "ecoPpBanner": "ECO PP 横幅",
          "oneWayVision": "单向透视膜",
          "cuttingVinyl": "刻字膜",
          "pvcFlexBanner": "PVC 柔性横幅",
          "polymericVinyl": "140 聚合自粘乙烯基",
          "polymericLamination": "140 聚合冷裱膜",
          "coldLamination": "冷裱膜",
          "3dColdLamination": "3D 冷裱膜",
          "windowFilm": "窗膜",
          "reflective": "反光材料",
          "canvasFabric": "画布、旗帜布、软膜、热转印系列",
          "pvcFoamBoard": "PVC 发泡板",
          "acrylicSheet": "亚克力板",
          "polystyreneSheet": "聚苯乙烯板",
          "ppHollowSheet": "PP 中空板",
          "acp": "铝塑板",
          "absPvcKt": "ABS 板、ABS 双色板、PVC 硬板、KT 板",
          "xBanner": "X 展架系列",
          "rollUpStand": "易拉宝系列",
          "popUpBanner": "POP 展架",
          "aluminumReception": "铝合金接待台",
          "ppPromotionTable": "PP 促销台",
          "tripodEasel": "三脚架 POP 画架",
          "outdoorFlagpole": "户外旗杆系列",
          "foldingShelf": "折叠展示架",
          "posterStand": "海报架",
          "crystalLightBox": "水晶超薄灯箱",
          "aluminumLightBox": "铝制灯箱",
          "waterInjectionFlagpole": "注水旗杆",
          "lgateBanner": "Lgate 横幅架",
          "luxuryFoldingShelf": "高档折叠架",
          "messageDisplay": "信息展示架",
          "grommetMachine": "打扣机",
          "ledChannelTrim": "LED 围边字包边条",
          "ledModule": "LED 模组",
          "ledLightBox": "灯箱专用 LED 灯",
          "ledStrip": "LED 灯带",
          "ledPowerSupply": "LED 电源",
          "cuttingMat": "切割垫",
          "squeegee": "刮胶板",
          "knife": "多功能刀具",
          "advertisingGlue": "广告胶水系列",
          "doubleSidesAdhesive": "双面胶、海绵胶",
          "cableTieRope": "尼龙扎带、广告绳",
          "hotWindGun": "热风枪"
        },
        "desc": {
          "selfAdhesiveVinyl": "优质自粘乙烯基，适用于车身贴、橱窗图形及标识制作。",
          "transparentVinyl": "透明自粘乙烯基，适用于玻璃及橱窗表面装饰。",
          "160Vinyl": "160g 重型自粘乙烯基，印刷适性优良。",
          "blackGlueVinyl": "黑胶背层遮盖原有图案，适合车身贴及重复粘贴应用。",
          "photoPaper": "高光及哑光相纸，适用于室内高清照片打印。",
          "petFilm": "聚酯薄膜，具备高透明度、耐热性及尺寸稳定性。",
          "backlitFilm": "专为灯箱背光标识设计的透光薄膜。",
          "ecoPpBanner": "环保聚丙烯横幅，覆防水涂层，适用于户外打印。",
          "oneWayVision": "单向透视打孔膜：外侧显示图案，内侧保持视野通透。",
          "cuttingVinyl": "100+ 颜色高品质 PVC 刻字膜，适用于刻字机及字母贴。",
          "pvcFlexBanner": "耐用 PVC 柔性横幅，适用于户外广告牌、正面及背光应用。",
          "polymericVinyl": "高性能聚合自粘乙烯基，户外耐候 5–7 年。",
          "polymericLamination": "冷裱膜，用于保护和增强打印图形。",
          "coldLamination": "压敏冷裱膜，适用于照片及数码图形覆膜。",
          "3dColdLamination": "3D 纹理冷裱膜，适用于装饰及高端展示打印。",
          "windowFilm": "隐私膜、装饰膜及隔热膜，适用于住宅及商业玻璃。",
          "reflective": "工程级及高强度反光膜，适用于交通标识及安全应用。",
          "canvasFabric": "全系列织物介质，包括画布、旗帜布、软膜及热转印纸。",
          "pvcFoamBoard": "轻质刚性 PVC 发泡板，适用于标识、展览及室内装饰。",
          "acrylicSheet": "高透明浇铸及挤出亚克力板，适用于标识、展示及灯箱。",
          "polystyreneSheet": "经济实惠的 PS 板，适用于吸塑成型、POS 展示及包装。",
          "ppHollowSheet": "瓦楞聚丙烯中空板，适用于临时标识、包装及可重复使用板材。",
          "acp": "铝塑复合板，适用于建筑幕墙、户外标识及雨篷结构。",
          "absPvcKt": "多用途刚性板材系列，适用于雕刻、铣削及各种广告制作需求。",
          "xBanner": "轻便 X 型展架，适用于室内促销及展览。",
          "rollUpStand": "便携式易拉宝展架，快速安装，适用于展览及活动。",
          "popUpBanner": "折叠弹出式展示系统，适用于大幅背景板及展会展位。",
          "aluminumReception": "模块化铝合金接待台，适用于展会及品牌推广活动。",
          "ppPromotionTable": "折叠 PP 塑料促销台，适用于零售及户外试用活动。",
          "tripodEasel": "可调节三脚架画架，适用于海报、画布及展示板。",
          "outdoorFlagpole": "羽毛形及水滴形户外旗杆，适用于活动促销及门店形象。",
          "foldingShelf": "紧凑型折叠展示架，适用于零售产品展示及活动使用。",
          "posterStand": "弹簧开合铝制海报架，适用于零售及公共场所 A1/A0 海报。",
          "crystalLightBox": "超薄 LED 水晶灯箱，适用于室内照明标识及菜单展示。",
          "aluminumLightBox": "铝制框架 LED 灯箱，适用于户外及室内广告展示。",
          "waterInjectionFlagpole": "注水底座旗杆，无需地面固定，适用于户外活动。",
          "lgateBanner": "L 型门架横幅展架，适用于入口及活动品牌展示。",
          "luxuryFoldingShelf": "高档折叠展示架，精致外观，适用于奢侈品牌展示。",
          "messageDisplay": "桌面及落地式信息展示板，适用于零售及酒店场所。",
          "grommetMachine": "手动及电动打扣机，适用于横幅收边及标识生产。",
          "ledChannelTrim": "铝合金包边条，适用于围边字标识制作，多种规格可选。",
          "ledModule": "高亮度 LED 模组，适用于围边字、灯箱及背光展示。",
          "ledLightBox": "专为灯箱均匀照明设计的 LED 灯条及模组。",
          "ledStrip": "柔性 LED 灯带，适用于装饰、重点照明及标识背光。",
          "ledPowerSupply": "防水及室内型 LED 驱动电源，适用于各类标识照明。",
          "cuttingMat": "自愈合切割垫，在切割乙烯基及介质时保护工作台面。",
          "squeegee": "毛毡边及硬质塑料刮板，适用于无气泡贴膜及橱窗膜施工。",
          "knife": "专业美工刀及精密刻刀，适用于乙烯基裁切及介质修边。",
          "advertisingGlue": "专用胶水，适用于 PVC、亚克力、铝塑板及织物粘接。",
          "doubleSidesAdhesive": "双面胶及泡棉胶，适用于面板安装及标识组装。",
          "cableTieRope": "重型尼龙扎带及广告绳，适用于展示物料固定及悬挂。",
          "hotWindGun": "专业热风枪，适用于车贴施工、热缩膜及标识安装。"
        },
        "getQuote": "获取报价",
        "cta": {
          "title": "需要定制报价？",
          "subtitle": "告诉我们您的需求——我们 24 小时内回复。",
          "contactBtn": "联系我们"
        },
        "pageTitle": "广告材料产品",
        "pageSubtitle": "全系列广告基板和展示材料。工厂直销价格，定制规格，全球发货。",
        "breadcrumb": "产品",
        "nav": {
          "selfAdhesiveVinyl": "自粘贴纸",
          "flexBanner": "灯箱布",
          "oneWayVision": "单面透",
          "cuttingVinyl": "切割贴纸",
          "polymericVinyl": "高分子贴纸/覆膜",
          "windowFilm": "窗膜/反光贴",
          "pvcFoamBoard": "PVC发泡板",
          "acrylicSheet": "亚克力板",
          "acp": "铝塑板",
          "ppHollowSheet": "PP中空板",
          "displayStand": "展示架",
          "accessories": "配件"
        },
        "selfAdhesiveVinyl": {
          "title": "自粘贴纸",
          "tag": "贴纸薄膜",
          "desc": "优质自粘贴纸，多种重量和表面处理可选。适用于车身贴膜、橱窗图形、促销展示、地贴和一般标识。强粘性，易施工，可清除选项。",
          "specs": "规格参数",
          "model": "型号",
          "weight": "克重",
          "thickness": "厚度",
          "finish": "表面",
          "glossyMatte": "光膜 / 哑膜",
          "transparent": "透明",
          "blackBack": "黑胶 / 高光",
          "width": "幅宽: 0.61 / 1.07 / 1.27 / 1.52 米",
          "rollLength": "卷长: 50米/卷",
          "customRoll": "可定制卷长",
          "printable": "溶剂/弱溶剂/UV可打印",
          "feature1": "强粘和可移除胶水可选",
          "feature2": "出色吸墨性，色彩鲜艳",
          "feature3": "UV抗表面涂层，户外耐久性(3-5年)",
          "feature4": "出口包装: 纸箱密封卷装，防潮",
          "keyFeatures": "主要特点",
          "getQuote": "获取报价",
          "whatsapp": "WhatsApp咨询"
        },
        "flexBanner": {
          "title": "PVC灯箱布",
          "tag": "广告布",
          "desc": "高品质PVC灯箱布，用于大幅面户外和室内广告。有前打光、后打光、刀刮和遮光类型可选。优异的拉伸强度，防水，耐撕裂，兼容所有主流溶剂和UV打印机。",
          "specs": "规格参数",
          "productTypes": "产品类型",
          "type": "类型",
          "weight": "克重",
          "application": "应用",
          "frontLit": "前打光",
          "frontLitApp": "户外广告牌、向阳标识",
          "backLit": "后打光",
          "backLitApp": "灯箱、发光标识",
          "knifeCoated": "刀刮布",
          "knifeCoatedApp": "高分辨率户外印刷",
          "blockout": "遮光布",
          "blockoutApp": "双面、不透光应用",
          "width": "幅宽: 2.5 / 3.2 / 5.0 米",
          "length": "卷长: 50米/卷",
          "finishing": "焊接/锁边工艺",
          "feature1": "高拉伸强度 - 抗风耐候",
          "feature2": "防水、防霉、UV稳定",
          "feature3": "符合欧盟RoHS和REACH标准",
          "keyFeatures": "主要特点",
          "getQuote": "获取报价",
          "whatsapp": "WhatsApp咨询"
        },
        "cta": {
          "title": "需要特殊规格或定制产品？",
          "subtitle": "联系我们的团队，提供您的具体要求。我们提供OEM制造、定制尺寸、私人标签和定制出口包装。",
          "getQuote": "获取报价",
          "whatsappNow": "WhatsApp咨询"
        },
        "oneWayVision": {
          "title": "单面透",
          "tag": "窗贴媒体",
          "desc": "穿孔窗贴，在外部提供完整图形显示的同时保持内部可见性。适用于商店橱窗、汽车窗膜、玻璃隔断和大型窗贴广告。",
          "specs": "规格参数",
          "specification": "规格",
          "value": "参数",
          "perforation": "孔距",
          "perforationVal": "50/50(标准) / 60/40可选",
          "width": "幅宽",
          "widthVal": "1.07米 / 1.27米 / 1.52米",
          "surface": "表面",
          "surfaceVal": "光膜 / 哑膜",
          "adhesive": "胶水",
          "adhesiveVal": "灰色永久性胶水",
          "outdoorLife": "户外寿命",
          "outdoorLifeVal": "3-5年",
          "feature1": "内部透视，外部全广告画面",
          "feature2": "优异的抗晒性和色牢度",
          "feature3": "兼容弱溶剂和UV印刷",
          "keyFeatures": "主要特点",
          "getQuote": "获取报价",
          "whatsapp": "WhatsApp咨询"
        },
        "cuttingVinyl": {
          "title": "切割贴纸",
          "tag": "贴纸薄膜",
          "desc": "专业级刻字贴纸，用于绘图仪切割应用。有150多种纯色、金属、铬银和特殊面漆可选。厚度均匀，切割整洁，剥离容易。",
          "specs": "规格参数",
          "category": "类别",
          "thickness": "厚度",
          "colors": "颜色",
          "monomeric": "单体级",
          "polymeric": "高分子级",
          "metallic": "金属色",
          "荧光色": "Fluorescent",
          "reflective": "反光",
          "solidColors": "100+纯色",
          "metallicColors": "金、银、铬银",
          "neonColors": "10种荧光色",
          "safetyColors": "15种安全色",
          "feature1": "使用标准刻刀干净、精确切割",
          "feature2": "易剥离 - 即使精细细节",
          "feature3": "OEM订单可提供潘通配色",
          "keyFeatures": "主要特点",
          "getQuote": "获取报价",
          "whatsapp": "WhatsApp咨询"
        },
        "polymericVinyl": {
          "title": "高分子贴纸和冷裱膜",
          "tag": "特种薄膜",
          "desc": "压延和铸造高分子贴纸，适用于严苛的户外应用。配合冷裱膜（光膜、哑膜、绸纹膜）为印刷图形提供UV和防刮保护。",
          "specs": "规格参数",
          "product": "产品",
          "type": "类型",
          "outdoorLife": "户外寿命",
          "polyVinyl": "高分子贴纸",
          "calendered": "压延PVC",
          "castVinyl": "铸造贴纸",
          "castPvc": "铸造PVC",
          "coldLamGlossy": "冷裱膜 - 光膜",
          "coldLamMatte": "冷裱膜 - 哑膜",
          "coldLamSatin": "冷裱膜 - 绸纹膜",
          "feature1": "可贴合曲面不起皱",
          "feature2": "冷裱膜提供防刮和耐化学性",
          "feature3": "抗UV涂层显著延长印刷品寿命",
          "keyFeatures": "主要特点",
          "getQuote": "获取报价",
          "whatsapp": "WhatsApp咨询"
        },
        "windowFilm": {
          "title": "窗膜和反光贴",
          "tag": "安全与装饰",
          "desc": "磨砂和装饰窗膜，兼具隐私和美观。工程级、高强级、钻石级反光贴，适用于道路安全、交通标志和车辆标识。",
          "specs": "规格参数",
          "product": "产品",
          "gradeType": "级别/类型",
          "application": "应用",
          "frosted": "磨砂窗膜",
          "translucent": "半透明PVC",
          "frostedApp": "隐私玻璃、办公隔断",
          "solar": "隔热膜",
          "metallized": "金属化PET",
          "solarApp": "隔热、防眩光",
          "eg": "反光贴 - EG级",
          "engGrade": "工程级",
          "egApp": "道路标识、停车场",
          "hi": "反光贴 - HI级",
          "highIntensity": "高强级",
          "hiApp": "高速公路标识、安全背心",
          "dg": "反光贴 - DG级",
          "diamondGrade": "钻石级",
          "dgApp": "高级交通管制",
          "feature1": "反光贴符合ASTM D4956标准",
          "feature2": "可选所有标准安全颜色",
          "feature3": "窗膜配有永久胶或静电胶",
          "keyFeatures": "主要特点",
          "getQuote": "获取报价",
          "whatsapp": "WhatsApp咨询"
        },
        "pvcFoamBoard": {
          "title": "PVC发泡板",
          "tag": "硬质板材",
          "desc": "闭孔PVC发泡板——轻便、坚固、防水、易加工。厚度1-30mm。广泛应用于广告标识、展板、家具背板和建筑装饰。",
          "specs": "规格参数",
          "thickness": "厚度",
          "density": "密度",
          "commonUse": "常见用途",
          "thick1": "1-3毫米",
          "thick2": "5-8毫米",
          "thick3": "10-15毫米",
          "thick4": "18-25毫米",
          "thick5": "30毫米",
          "use1": "展示板、印刷基材",
          "use2": "标识牌、店铺门头",
          "use3": "展架、隔断",
          "use4": "家具背板、搁板",
          "use5": "结构展示应用",
          "standard": "标准: 1220×2440 mm",
          "customSize": "定制尺寸",
          "colors": "白色/黑色/彩色",
          "uvPrint": "UV可打印",
          "feature1": "防水、防潮、防虫",
          "feature2": "易切割、开槽、粘合和螺丝固定",
          "feature3": "OEM可定制厚度和尺寸",
          "keyFeatures": "主要特点",
          "getQuote": "获取报价",
          "whatsapp": "WhatsApp咨询"
        },
        "acrylicSheet": {
          "title": "亚克力板",
          "tag": "硬质板材",
          "desc": "高透明度亚克力(PMMA)板，有浇铸和挤出两种形式。1-50mm厚度，有透明、磨砂、蛋白色、染色和镜面可选。适用于灯箱、发光标识和展示架。",
          "specs": "规格参数",
          "type": "类型",
          "thickness": "厚度",
          "transparency": "透明度",
          "clearCast": "透明浇铸板",
          "opalFrosted": "磨砂/蛋白色",
          "tinted": "染色/彩色",
          "mirror": "镜面亚克力",
          "fluorescent": "荧光板",
          "diffused": "漫射光",
          "various": "多种可选",
          "reflective": "反光面",
          "uvGlow": "UV反应发光",
          "keyFeatures": "主要特点",
          "getQuote": "获取报价",
          "whatsapp": "WhatsApp咨询"
        },
        "acp": {
          "title": "铝塑板 (ACP)",
          "tag": "板材系统",
          "desc": "两层铝皮粘合在PE或矿物填充芯材上。轻便、坚固、平整、耐候。广泛用于建筑幕墙、店铺门头、户外标识和装饰包层。",
          "specs": "规格参数",
          "keyFeatures": "主要特点",
          "getQuote": "获取报价",
          "whatsapp": "WhatsApp咨询"
        },
        "ppHollowSheet": {
          "title": "PP中空板 (瓦楞板)",
          "tag": "塑料板",
          "desc": "聚丙烯瓦楞板——超轻、可回收、防水、经济。用于临时标识、房地产标牌、政治标语、包装和短期展示应用。",
          "specs": "规格参数",
          "keyFeatures": "主要特点",
          "getQuote": "获取报价",
          "whatsapp": "WhatsApp咨询"
        },
        "displayStand": {
          "title": "展示架和展览系统",
          "tag": "展示解决方案",
          "desc": "全系列便携式展示和展览架系统，适用于全球贸易展会、零售和活动。",
          "requestQuote": "索取展示架目录",
          "whatsapp": "WhatsApp咨询"
        },
        "accessories": {
          "title": "标识制作配件和工具",
          "tag": "配件",
          "desc": "专业标识制作和安装的完整配件。一站式供应标识店所需的所有产品。",
          "requestQuote": "索取配件目录",
          "whatsapp": "WhatsApp咨询"
        }
      },
      // Applications page translations
      "app_page": {
        "pageTitle": "应用领域",
        "pageSubtitle": "了解我们的广告材料如何在全球各行业和应用中使用。",
        "breadcrumb": "应用场景",
        "signBoard": "标识牌",
        "signBoardDesc": "从零售店铺门面到大型商业建筑标识，我们的材料提供专业标识制作所需的结构耐久性和视觉效果。",
        "signBoardMaterials": "推荐材料",
        "signBoardPvc": "PVC发泡板 (3-10mm)",
        "signBoardPvcDesc": "轻便、可喷漆、易于雕刻开槽",
        "signBoardAcp": "铝塑板 (3-4mm)",
        "signBoardAcpDesc": "金属外观、坚固、耐候，适用于户外店铺标识",
        "signBoardVinyl": "自粘贴纸 (100-140g)",
        "signBoardVinylDesc": "印刷图形、字帖和装饰覆层",
        "signBoardCta": "获取标识牌材料",
        "lightBox": "灯箱",
        "lightBoxDesc": "照明广告牌需要具有特定光线漫射、透明度和印刷附着力的材料。",
        "lightBoxMaterials": "推荐材料",
        "lightBoxAcrylic": "磨砂亚克力板 (3-5mm)",
        "lightBoxAcrylicDesc": "均匀光线漫射，适用于LED背光标识",
        "lightBoxBanner": "后打光PVC灯箱布",
        "lightBoxBannerDesc": "高透明度，适用于照明可印刷图形面板",
        "lightBoxLed": "LED模组 + 电源",
        "lightBoxLedDesc": "IP65防水LED灯条和12V/24V电源",
        "lightBoxCta": "获取灯箱材料",
        "digitalPrinting": "数码印刷",
        "digitalPrintingDesc": "数码印刷店需要能够提供鲜艳色彩输出、持续墨水附着力和耐久性的基材。",
        "outdoorAdvertising": "户外广告",
        "outdoorAdvertisingDesc": "户外广告材料面临严苛的UV曝晒、风荷载、雨淋、温度循环和物理冲击。我们的户外级产品经过配制和测试，可在全球各种气候条件下持续表现。",
        "outdoorMaterials": "推荐材料",
        "outdoorFrontLit": "前打光旗帜布 (440–650 g/m²)",
        "outdoorFrontLitDesc": "大型广告牌、户外旗帜展示",
        "outdoorAcp": "铝塑板",
        "outdoorAcpDesc": "刚性户外标识、外墙板、候车亭",
        "outdoorReflective": "反光贴 (高强级/钻石级)",
        "outdoorReflectiveDesc": "道路标识、安全标记、交通控制",
        "outdoorCta": "获取户外广告材料",
        "exhibitionDisplay": "展览展示",
        "exhibitionDisplayDesc": "贸易展会、展览和企业活动需要便携式、视觉冲击力强的展示系统。我们的展示架和印刷媒体结合了便于运输和专业展示品质，为全球活动专业人士服务。",
        "exhibitionMaterials": "推荐材料",
        "exhibitionRollUp": "易拉宝",
        "exhibitionRollUpDesc": "便携、紧凑、快速搭建",
        "exhibitionPopUp": "折叠展墙",
        "exhibitionPopUpDesc": "大型背景墙、模块化系统",
        "exhibitionLightBox": "灯箱面板",
        "exhibitionLightBoxDesc": "照明面料展示",
        "exhibitionFlags": "羽毛旗",
        "exhibitionFlagsDesc": "户外活动品牌",
        "exhibitionCta": "获取展览展示材料",
        "vehicleGraphics": "车贴广告"
      },
      // Case Studies page translations
      "case_page": {
        "pageTitle": "案例研究",
        "pageSubtitle": "探索我们的成功项目，了解我们如何帮助全球客户。",
        "breadcrumb": "案例研究",
        "case1": "超市标识项目",
        "case1Location": "位置",
        "case1Scale": "规模",
        "case1Volume": "数量",
        "case1Materials": "供应材料",
        "case1Outcomes": "项目成果",
        "case2": "商场灯箱项目",
        "case3": "户外广告牌项目"
      },
      // Blog page translations
      "blog_page": {
        "pageTitle": "博客",
        "pageSubtitle": "了解最新行业新闻、产品指南和公司动态。",
        "breadcrumb": "博客",
        "industryKnowledge": "行业知识",
        "materialGuide": "材料指南",
        "printingTechnology": "印刷技术",
        "readMore": "咨询产品",
        "viewCert": "查看证书",
        "requestDocs": "索取合规文件"
      },
      // About page translations
      "about_page": {
        "pageTitle": "关于我们",
        "pageSubtitle": "了解更多关于佛山金誉广告材料有限公司的信息 - 您可信赖的广告材料合作伙伴。",
        "breadcrumb": "关于我们",
        "companyProfile": "公司介绍",
        "whoWeAre": "我们是谁",
        "whoWeAreDesc": "佛山金誉广告材料有限公司是一家专业成立于2021年的广告材料制造商。位于佛山市南海区里水镇U+智谷产业园——中国广告材料生产最集中的地区之一。",
        "businessDesc": "我们的业务集设计、研发、生产和销售于一体，产品包括自粘贴纸、PVC灯箱布、PVC发泡板、亚克力板、铝塑板、PP中空板、反光贴、展示架及标识配件。",
        "exportDesc": "我们出口到东南亚、欧洲、美洲、中东等全球市场。我们的产品以耐用性、可定制性和竞争力的工厂直销价格著称。",
        "yearEstablished": "成立年份",
        "exportCountries": "出口国家",
        "isoCertified": "ISO认证",
        "productLines": "核心产品线",
        "ourPurpose": "我们的宗旨",
        "missionVisionValues": "使命、愿景与价值观",
        "mission": "使命",
        "missionDesc": "为全球广告专业人士和标识制作企业提供可靠、高质量的材料，帮助他们以具有竞争力的工厂直销价格完成出色的创意作品。",
        "vision": "愿景",
        "visionDesc": "成为全球知名的广告材料制造商——以产品创新、质量稳定性和长期客户合作关系著称。",
        "values": "价值观",
        "valuesDesc": "质量第一。诚信经营。持续改进。以客户为中心的开发。每一批产品必须达到我们为自己设定的标准——而不仅仅是可接受的程度。",
        "ourJourney": "我们的历程",
        "companyMilestones": "公司里程碑",
        "milestonesDesc": "从2021年的新起点到获得ISO认证的全球出口商，仅用三年时间——以下是我们的发展历程。",
        "year1": "第一年",
        "companyEstablished": "公司成立",
        "companyEstablishedDesc": "佛山金誉广告材料有限公司正式在佛山市南海区成立。初期产品线主要为PVC发泡板和自粘贴纸，供应国内市场。",
        "oct2022": "2022年10月",
        "firstInternational": "首批国际客户——广交会",
        "firstInternationalDesc": "首次参加中国进出口商品交易会（广交会），成功与东南亚、中东和欧洲的海外买家建立了合作关系。",
        "mar2023": "2023年3月",
        "rdTeam": "研发团队成立",
        "rdTeamDesc": "组建专门的研发团队，推动产品创新、定制配方开发和国际客户技术支持能力。",
        "jul2023": "2023年7月",
        "capacityExpanded": "生产能力扩大",
        "capacityExpandedDesc": "投资新生产线和先进设备。生产能力大幅提升，以满足所有产品类别不断增长的国际订单量。",
        "year2024": "2024年",
        "isoAchieved": "获得ISO 9001认证",
        "isoAchievedDesc": "成功完成ISO 9001:2015质量管理体系认证。整个运营流程全面实施质量文档、过程控制和持续改进系统。",
        "companyAtGlance": "公司概览",
        "founded": "成立时间",
        "location": "所在地",
        "certification": "认证",
        "products": "产品",
        "exportMarkets": "出口市场",
        "contact": "联系方式",
        "factory": "工厂",
        "factoryTitle": "先进制造设施",
        "factoryDesc": "位于佛山市南海区里水镇U+智谷产业园——佛山专注于先进制造业的优质工业区之一。",
        "factoryLocation": "工厂位置",
        "factoryLocationDesc": "广东省佛山市南海区里水镇U+智谷产业园D3168",
        "productionEquipment": "生产设备",
        "productionEquipmentDesc": "先进的挤出生产线、压延设备、涂布机和分切系统，2023年扩大规模",
        "rdLaboratory": "研发实验室",
        "rdLaboratoryDesc": "内部测试实验室和研发团队，用于定制配方、产品开发和质量验证",
        "exportWarehouse": "出口仓库",
        "exportWarehouseDesc": "专用出口包装区，采用防潮、防震包装，确保国际运输安全",
        "productionCapacity": "生产能力",
        "scaleTitle": "满足您的批量需求",
        "scaleDesc": "2023年产能扩张后，我们可以从第一个样品到最终批次以一致的质量处理大批量订单。",
        "vinylCapacity": "每月平方米 贴纸产能",
        "flexBannerCapacity": "每月平方米 灯箱布产能",
        "rigidBoardCapacity": "每月张 硬板产能",
        "sampleLeadTime": "样品交期",
        "qualityControl": "质量控制流程",
        "qualityControlDesc": "原材料进厂检验→过程质量检查→成品测试→包装验证→装运前检验。",
        "exportLogistics": "出口物流",
        "exportLogisticsDesc": "FOB广州/佛山。可提供散货和整柜。我们与主要货代合作，可协助办理清关文件、产地证和检验证书。",
        "oemCustom": "OEM/定制订单",
        "oemCustomDesc": "可提供私人标签包装、定制规格、颜色调配和专属生产线，适用于成熟的进口商和分销商。",
        "certificates": "证书",
        "certTitle": "质量与合规资质",
        "certDesc": "我们的认证表明我们致力于遵守国际公认的质量管理标准和产品合规要求。",
        "iso9001": "ISO 9001:2015",
        "iso9001Desc": "质量管理体系认证。2024年获得。涵盖所有制造业务，包括贴纸、板材产品和配件。",
        "valid": "有效且当前",
        "reachRohs": "REACH / RoHS",
        "reachRohsDesc": "适用于相关产品线的欧盟化学物质和危险物质合规性。可提供欧盟进口要求的支持文件。",
        "onRequest": "按需提供",
        "testReports": "检测报告",
        "testReportsDesc": "第三方实验室测试报告，包括物理性能、耐候性、阻燃等级及其他产品特定认证，可按产品线提供。",
        "needCert": "需要特定的认证文件以满足您的进口要求？",
        "requestCert": "索取证书副本",
        "ourTeam": "我们的团队",
        "teamTitle": "金誉背后的团队",
        "teamDesc": "我们的团队结合了制造专业知识、国际贸易经验和技术知识，为全球B2B客户提供专业服务。",
        "vivian": "Vivian",
        "vivianRole": "出口销售经理",
        "vivianDesc": "国际B2B销售、客户关系和出口文件。所有国际咨询的直接联系人。",
        "rdDept": "研发部门",
        "rdDeptRole": "技术开发团队",
        "rdDeptDesc": "产品创新、定制配方、质量控制和国际合规要求的技术文档。",
        "productionTeam": "生产团队",
        "productionTeamRole": "制造与质检",
        "productionTeamDesc": "经验丰富的生产团队，在扩大后的制造设施中按照ISO 9001质量程序运营。",
        "ready": "准备好开始合作了吗？",
        "readyDesc": "我们欢迎全球分销商、进口商、标识制作公司和印刷店业主的咨询。让我们建立长期的业务关系。",
        "contactNow": "立即联系我们",
        "whatsappNow": "WhatsApp咨询"
      },
      // Contact page translations
      "contact_page": {
        "pageTitle": "联系我们",
        "pageSubtitle": "联系我们的团队，获取产品咨询、报价和技术支持。",
        "breadcrumb": "联系我们",
        "getInTouch": "联系我们",
        "factoryAddress": "工厂地址",
        "address": "地址",
        "phone": "电话",
        "email": "邮箱",
        "whatsapp": "WhatsApp",
        "businessHours": "工作时间",
        "weekday": "周一至周五: 09:00 – 18:00 (GMT+8)",
        "saturday": "周六: 09:00 – 13:00",
        "sendMessage": "发送消息",
        "yourName": "您的姓名",
        "yourEmail": "您的邮箱",
        "subject": "主题",
        "message": "留言内容",
        "submit": "提交",
        "contactInfo": "联系方式"
      }
    },
    "vi": {
      "nav": {
        "home": "Trang chủ",
        "products": "Sản phẩm",
        "products_sub": {
          "selfAdhesiveVinyl": "Vinyl Tự Dính",
          "flexBanner": "Bạt Flex",
          "pvcFoamBoard": "Tấm PVC Foam",
          "acrylicSheet": "Tấm Acrylic",
          "aluminumPanel": "Tấm Nhôm Ghép",
          "reflectiveSheet": "Tấm Phản Quang"
        },
        "applications": "Ứng dụng",
        "applications_sub": {
          "signBoard": "Bảng Hiệu",
          "lightBox": "Hộp Ánh Sáng",
          "digitalPrinting": "In Kỹ Thuật Số",
          "outdoorAdvertising": "Quảng Cáo Ngoài Trời",
          "exhibitionDisplay": "Trưng Bày Triển Lãm"
        },
        "caseStudies": "Dự án",
        "caseStudies_sub": {
          "supermarket": "Dự Án Biển Siêu Thị",
          "mallLightbox": "Dự Án Hộp Ánh Sáng Trung Tâm",
          "outdoorBillboard": "Dự Án Biển Ngoài Trời",
          "shopSign": "Dự Án Biển Cửa Hàng"
        },
        "blog": "Blog",
        "blog_sub": {
          "industryKnowledge": "Kiến Thức Ngành",
          "materialGuide": "Hướng Dẫn Vật Liệu",
          "printingTechnology": "Công Nghệ In Ấn"
        },
        "aboutUs": "Về chúng tôi",
        "about_sub": {
          "companyProfile": "Giới Thiệu Công Ty",
          "factory": "Nhà Máy",
          "productionCapacity": "Năng Lực Sản Xuất",
          "certificates": "Chứng Nhận"
        },
        "contactUs": "Liên hệ",
        "getQuote": "Báo giá"
      },
      "hero": {
        "badge": "Nhà sản xuất ISO 9001 · Thành lập 2021",
        "title": "Nhà sản xuất Vật liệu Quảng cáo Chất lượng cao",
        "subtitle": "Công ty TNHH Vật liệu Quảng cáo Foshan Jin Yu – Nhà sản xuất chuyên nghiệp tấm PVC foam, tấm acrylic, decal, bạt flex, tấm phản quang và phụ kiện quảng cáo. Được tin tưởng bởi khách hàng tại Châu Âu, Châu Mỹ, Đông Nam Á & Trung Đông.",
        "exploreProducts": "Xem sản phẩm",
        "requestQuote": "Yêu cầu báo giá",
        "getQuote": "Báo giá ngay",
        "downloadCatalog": "Tải xuống Catalog",
        "stats": {
          "countries": "Quốc gia xuất khẩu",
          "products": "Dòng sản phẩm",
          "clients": "Khách hàng toàn cầu",
          "certified": "Chứng nhận ISO 9001"
        }
      }
    },
    "tl": {
      "nav": {
        "home": "Home",
        "products": "Mga Produkto",
        "products_sub": {
          "selfAdhesiveVinyl": "Self Adhesive Vinyl",
          "flexBanner": "Flex Banner",
          "pvcFoamBoard": "PVC Foam Board",
          "acrylicSheet": "Acrylic Sheet",
          "aluminumPanel": "Aluminum Composite Panel",
          "reflectiveSheet": "Reflective Sheet"
        },
        "applications": "Mga Application",
        "applications_sub": {
          "signBoard": "Sign Board",
          "lightBox": "Light Box",
          "digitalPrinting": "Digital Printing",
          "outdoorAdvertising": "Outdoor Advertising",
          "exhibitionDisplay": "Exhibition Display"
        },
        "caseStudies": "Mga Case Studies",
        "caseStudies_sub": {
          "supermarket": "Supermarket Sign Project",
          "mallLightbox": "Mall Light Box Project",
          "outdoorBillboard": "Outdoor Billboard Project",
          "shopSign": "Shop Sign Project"
        },
        "blog": "Blog",
        "blog_sub": {
          "industryKnowledge": "Industry Knowledge",
          "materialGuide": "Material Guide",
          "printingTechnology": "Printing Technology"
        },
        "aboutUs": "Tungkol sa Amin",
        "about_sub": {
          "companyProfile": "Company Profile",
          "factory": "Factory",
          "productionCapacity": "Production Capacity",
          "certificates": "Certificates"
        },
        "contactUs": "Makipag-ugnayan",
        "getQuote": "Kumuha ng Quote"
      },
      "hero": {
        "badge": "ISO 9001 Certified Manufacturer · Est. 2021",
        "title": "Your <span style='color: #E8751A; font-weight: bold;'>#1</span> Advertising Material Factory in China",
        "subtitle": "Foshan Jin Yu Advertising Material Co., Ltd – Propesyonal na manufacturer ng PVC foam board, acrylic sheet, vinyl, flex banner, reflective sheet at mga accessories sa advertising. Pinagkakatiwalaan ng mga buyer sa Europe, Americas, Southeast Asia at Middle East.",
        "exploreProducts": "Tingnan ang Mga Produkto",
        "requestQuote": "Humingi ng Quote",
        "getQuote": "Kumuha ng Quote",
        "downloadCatalog": "I-download ang Catalog",
        "stats": {
          "countries": "Mga Bansa na Nag-eexport",
          "products": "Mga Product Line",
          "clients": "Mga Global na Kliyente",
          "certified": "ISO 9001 Certified"
        }
      }
    },
    "pt": {
      "nav": {
        "home": "Início",
        "products": "Produtos",
        "applications": "Aplicações",
        "caseStudies": "Casos de Estudo",
        "blog": "Blog",
        "aboutUs": "Sobre Nós",
        "contactUs": "Contato",
        "getQuote": "Orçamento"
      },
      "hero": {
        "badge": "Fabricante Certificado ISO 9001 · Fundado em 2021",
        "title": "Fabricante de Materiais Publicitários Premium",
        "subtitle": "Foshan Jin Yu Advertising Material Co., Ltd – Fabricante profissional de placa PVC foam, folha acrílica, vinil, lona flex, folha refletiva.",
        "exploreProducts": "Ver Produtos",
        "requestQuote": "Solicitar Orçamento",
        "stats": {
          "countries": "Países Exportados",
          "products": "Linhas de Produtos",
          "clients": "Clientes Globais",
          "certified": "Certificado ISO 9001"
        }
      }
    },
    "ar": {
      "nav": {
        "home": "الرئيسية",
        "products": "المنتجات",
        "applications": "التطبيقات",
        "caseStudies": "دراسات الحالة",
        "blog": "المدونة",
        "aboutUs": "من نحن",
        "contactUs": "اتصل بنا",
        "getQuote": "احصل على عرض سعر"
      },
      "hero": {
        "badge": "مصنع معتمد ISO 9001 · تأسس 2021",
        "title": "مصنع مواد الإعلان المتميزة",
        "subtitle": "شركة Foshan Jin Yu Advertising Material Co., Ltd – المصنع المحترف لأن لوح PVC الرغوي، лист الاكريليك، الفينيل، بانر مرن، лист الانعكاسي.",
        "exploreProducts": "استكشف المنتجات",
        "requestQuote": "طلب عرض سعر",
        "stats": {
          "countries": "البلدان المصدرة",
          "products": "خطوط المنتجات",
          "clients": "العملاء العالميون",
          "certified": "معتمد ISO 9001"
        }
      }
    }
  },

  // Initialize the i18n system
  init() {
    // Get saved language or detect from URL
    this.currentLang = this.getSavedLanguage() || this.detectLanguageFromURL() || 'en';

    // Apply translations
    this.applyTranslations();

    // Setup language switcher
    this.setupLanguageSwitcher();
  },

  // Detect language from URL parameters
  detectLanguageFromURL() {
    const params = new URLSearchParams(window.location.search);
    const lang = params.get('lang');
    if (lang && this.supportedLanguages.includes(lang)) {
      return lang;
    }
    return null;
  },

  // Get saved language from localStorage
  getSavedLanguage() {
    try {
      return localStorage.getItem('jinyu_lang');
    } catch (e) {
      return null;
    }
  },

  // Save language to localStorage
  saveLanguage(lang) {
    try {
      localStorage.setItem('jinyu_lang', lang);
    } catch (e) {
      // localStorage might not be available
    }
  },

  // Change language
  changeLanguage(lang) {
    if (!this.supportedLanguages.includes(lang)) {
      console.error('Unsupported language:', lang);
      return;
    }

    this.currentLang = lang;
    this.saveLanguage(lang);
    this.applyTranslations();
    this.updateLanguageSwitcher();
    this.updatePageURL(lang);
  },

  // Update page URL without reload
  updatePageURL(lang) {
    try {
      const url = new URL(window.location.href);
      url.searchParams.set('lang', lang);
      window.history.pushState({}, '', url);
    } catch (e) {
      // Might fail in some environments
    }
  },

  // Get translation by key path (e.g., 'nav.home')
  t(key) {
    const keys = key.split('.');
    let value = this.translations[this.currentLang];
    
    if (!value) {
      value = this.translations['en'];
    }
    
    for (const k of keys) {
      if (value && value[k]) {
        value = value[k];
      } else {
        // Fallback to English
        value = this.translations['en'];
        for (const k2 of keys) {
          if (value && value[k2]) {
            value = value[k2];
          } else {
            return key; // Return key if not found
          }
        }
        break;
      }
    }
    return value || key;
  },

  // Apply translations to all elements with data-i18n attribute
  applyTranslations() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      const translation = this.t(key);
      
      if (el.tagName === 'INPUT' && el.getAttribute('placeholder')) {
        el.setAttribute('placeholder', translation);
      } else {
        el.textContent = translation;
      }
    });

    // Apply translations to elements with data-i18n-html attribute (for HTML content)
    const htmlElements = document.querySelectorAll('[data-i18n-html]');
    htmlElements.forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      const translation = this.t(key);
      el.innerHTML = translation;
    });

    // Update document title
    this.updateDocumentTitle();
  },

  // Update document title based on current page
  updateDocumentTitle() {
    const page = this.detectCurrentPage();
    let titleKey = '';
    
    switch(page) {
      case 'home':
        titleKey = 'hero.title';
        break;
      case 'products':
        titleKey = 'nav.products';
        break;
      case 'applications':
        titleKey = 'nav.applications';
        break;
      case 'case-studies':
        titleKey = 'nav.caseStudies';
        break;
      case 'blog':
        titleKey = 'nav.blog';
        break;
      case 'about':
        titleKey = 'nav.aboutUs';
        break;
      case 'contact':
        titleKey = 'nav.contactUs';
        break;
      default:
        titleKey = 'hero.title';
    }
    
    const title = this.t(titleKey);
    document.title = `${title} | Jin Yu Advertising Material`;
  },

  // Detect current page from URL
  detectCurrentPage() {
    const path = window.location.pathname;
    if (path.includes('products')) return 'products';
    if (path.includes('applications')) return 'applications';
    if (path.includes('case-studies')) return 'case-studies';
    if (path.includes('blog')) return 'blog';
    if (path.includes('about')) return 'about';
    if (path.includes('contact')) return 'contact';
    return 'home';
  },

  // Setup language switcher UI
  setupLanguageSwitcher() {
    const switcher = document.getElementById('language-switcher');
    if (!switcher) return;

    // Check if dropdown already exists
    if (switcher.querySelector('.lang-dropdown')) return;

    // Create dropdown menu
    const dropdown = document.createElement('div');
    dropdown.className = 'lang-dropdown';
    dropdown.innerHTML = `
      <div class="lang-dropdown-arrow"></div>
      ${this.supportedLanguages.map(lang => `
        <div class="lang-option ${lang === this.currentLang ? 'active' : ''}" data-lang="${lang}">
          <span class="lang-code">${this.langCodes[lang]}</span>
          <span class="lang-name">${this.langNames[lang]}</span>
        </div>
      `).join('')}
    `;

    switcher.appendChild(dropdown);

    // Add click handlers
    switcher.addEventListener('click', (e) => {
      e.stopPropagation();
      switcher.classList.toggle('active');
    });

    // Add click handlers for language options
    dropdown.querySelectorAll('.lang-option').forEach(option => {
      option.addEventListener('click', (e) => {
        e.stopPropagation();
        const lang = option.getAttribute('data-lang');
        this.changeLanguage(lang);
        switcher.classList.remove('active');
      });
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', () => {
      switcher.classList.remove('active');
    });

    // Update initial state
    this.updateLanguageSwitcher();
  },

  // Update language switcher display
  updateLanguageSwitcher() {
    const switcher = document.getElementById('language-switcher');
    if (!switcher) return;

    // Update current language display
    const display = switcher.querySelector('.lang-display');
    if (display) {
      display.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10"/>
          <line x1="2" y1="12" x2="22" y2="12"/>
          <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
        </svg>
        <span class="lang-code">${this.langCodes[this.currentLang]}</span>
      `;
    }

    // Update active state in dropdown
    const dropdown = switcher.querySelector('.lang-dropdown');
    if (dropdown) {
      dropdown.querySelectorAll('.lang-option').forEach(option => {
        option.classList.toggle('active', option.getAttribute('data-lang') === this.currentLang);
      });
    }
  }
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  i18n.init();
});

// Export for use in other scripts
window.i18n = i18n;
