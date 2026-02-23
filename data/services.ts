export interface ServiceSection {
  title: string;
  desc:string;
  points: string[];
}

export interface Capacity {
  type: string;
  range: string;
}

export interface Service {
  slug: string;
  title: string;
  subTitle:string;
  shortDescription: string;
  desc1:string;
  desc2:string;
  about?: string;
  image: string;
  features?: {
    title:string;
    subTitle?:string;
    list:ServiceSection[]};
  processes?: {
    title:string;
    list:string[];
    note:string;
  };
  capacity?:{
    title:string;
    list: Capacity[];
    note:string;
  };
  industries?: {
    title:string;
    desc:string;
    list:string[];
    note:string;
  };
  fabrics?: string[];
  types?:{
    title:string;
    desc?:string;
    list:string[];
    note:string;
  };
  options?:{
   title:string;
   desc?:string;
   list:string[];
   note?:string;
  };
  quality?:{
   title:string;
   desc:string;
   list:string[];
   note:string;
  };
  enviromentalResponsibility?:{
   title:string;
   desc:string;
   list:string[];
   note:string;
  };
  applications?:{
   title:string;
   desc:string;
   list:string[];
   note?:string;
  };
  packaging?:{
   title:string;
   subTitle:string;
   list:string[]
  }; 
  machinery?:{
    title:string;
    subTitle:string;
    list:string[];
    note:string;
  }
  whyChooseUs?: {
    title:string;
    list:string[];
    note:string;
  };
  cta?: {
    title:string;
    question:string;
    answer:string;
    note:string;
  };
}

export const services: Service[] = [
  {
    slug: "garment-stitching",
    title: "Garment Stitching",
    shortDescription: "At Garmen, we provide end-to-end garment stitching services that transform raw fabric into high-quality, ready-to-sell apparel. Our experienced tailors, modern machinery, and strict quality standards ensure every garment meets international production benchmarks.",
    subTitle:'Complete Precision Stitching for Market-Ready Apparel',
    desc1:'At Garmen, we provide end-to-end garment stitching services that transform raw fabric into high-quality, ready-to-sell apparel. Our experienced tailors, modern machinery, and strict quality standards ensure every garment meets international production benchmarks.',
    desc2:'From small custom batches to large-scale manufacturing, we deliver consistent workmanship, strong seams, and perfect finishing for every order.',
    image:"/services/garment-stitching.png",
    features:{
    title:' Our Garment Stitching Services',
    list: [
      {
        title: "Fabric Cutting & Preparation",
        desc:'We begin every project with accurate fabric cutting using advanced cutting techniques to minimize waste and ensure perfect garment proportions.',
        points: [
          "Manual & automated cutting", 
          "Pattern-based cutting",
          "Fabric inspection", 
          "Size grading"
        ]
      },
      {
        title: "Stitching & Assembly",
        desc:'Our skilled stitching team carefully assembles each garment using industrial-grade machines for durability and comfort.',
        points: [
          "Single & multi-needle stitching",
          "Overlock & flatlock seams", 
          "Reinforced stress points", 
          "Custom stitch patterns"
        ]
      },
      {
        title: "Customized Garment Production",
        desc:'We manufacture garments as per your designs, samples, and technical specifications.',
        points: [
          "T-shirts, shirts, trousers, dresses, uniforms",
          "Kidswear, menswear, womenswear", 
          "Private label manufacturing", 
          "Brand-specific sizing"
        ]
      },
      {
        title: "Quality Control & Finishing",
        desc:'Every garment goes through multi-level quality checks before dispatch.',
        points: [
          "Stitch consistency inspection",
          "Thread trimming", 
          "Ironing & pressing", 
          "Measurement verification",
          "Defect removal"
        ]
      },
    ],
  },
  whyChooseUs: {
   title:'Why Choose Our Garment Stitching Service?',
   list: [ 
    "Skilled workforce", 
    "Modern machinery", 
    "Consistent quality", 
    "On-time delivery", 
    "Flexible order quantities"
    ],
    note:'We focus on building long-term partnerships by delivering reliable stitching solutions you can trust.'
  },
   processes:{
    title:'Our Stitching Process',
    list: [
      "Fabric Inspection", 
      "Pattern Development", 
      "Stitching & Assembly", 
      "Quality Check", 
      "Finishing & Pressing", 
      "Packing & Dispatch"
    ],
    note:'This structured workflow ensures accuracy and efficiency at every stage.'
  },
   industries:{ 
    title:'Industries We Serve',
    desc:'We provide garment stitching services for:',
    list: ["Fashion brands", "Corporate uniforms", "E-commerce sellers", "Export houses"],
    note:'No matter the scale, we adapt our production to meet your business needs.'
  },
  machinery:{
    title:'Machinery & Technology',
    subTitle:'Our production unit is equipped with:',
    list:[
      'High-speed sewing machines',
      'Overlock machines',
      'Button & zipper machines',
      'Automatic cutting tools',
      'Steam pressing systems',
    ],
    note:'This allows us to maintain high productivity with superior finishing.'
  },
  capacity:{ 
   title:'Order Capacity',
   list:[
     { type: "Sample", range: "20–100 pcs" },
     { type: "Small Batch", range: "500–2,000 pcs" },
     { type: "Bulk", range: "10,000+ pcs" }
   ],
   note:'Custom capacity planning available based on project requirements.'
  },
  packaging:{
   title:'Packaging & Delivery',
   subTitle:'We provide safe and professional packaging to protect your garments during transit.',
   list:[
    'Polybag packing',
    'Size-wise packing',
    'Carton labeling',
    'Export-ready packaging',
    'Timely dispatch'
   ],
  },
  cta: {
    title:'Let’s Start Your Project',
    question:'Looking for reliable garment stitching services for your brand?',
    answer:'Our team is ready to turn your ideas into premium-quality apparel.',
    note:'Contact us today for quotes, samples, and production planning.',
   }
  },
  {
    slug: "custom-apparel",
    title: "Custom Apparel",
    shortDescription: "Bespoke garment manufacturing tailored to your brand identity.",
    subTitle:'Bespoke Garment Production Tailored to Your Brand',
    desc1:'At Garmen, we specialize in custom apparel manufacturing designed to match your brand identity, market needs, and customer expectations. From concept to final production, we work closely with you to create unique, high-quality garments that reflect your vision.',
    desc2:'Whether you are launching a new fashion line, expanding your collection, or creating uniforms, we deliver customized solutions with precision and consistency.',
    image: "/services/custom-apparel.png",
    features: {
      title:'Our Custom Apparel Services',
      list:[
      {
        title: "Design & Prototyping",
        desc:'We convert your ideas into practical designs and samples before mass production.',
        points: [ "Design consultation","Sample development", "Fit testing", "Prototype approval"]
      },
      {
        title: "Pattern Development",
        desc:'Our expert pattern makers ensure perfect fit and comfort for every size.',
        points: [
           "Manual & digital patterns", 
           "Size grading", 
           "Style modifications", 
           "Measurement accuracy"
          ]
      },
      {
        title: "Made-to-Order Manufacturing",
        desc:'Each garment is produced according to your specifications.',
        points: [
           "Customized sizing", 
           "Fabric selection support", 
           "Stitching style options", 
           "Trim & accessory selection"
          ]
      },
      {
        title: "Brand Customization",
        desc:'We help you build strong brand identity through personalized branding.',
        points: [
           "Logo embroidery", 
           "Label & tag printing", 
           "Packaging customization", 
           "Private labeling"
          ]
      },
    ]
  },
  whyChooseUs: {
   title:'Why Choose Our Custom Apparel Service?',
   list: [ 
    "End-to-end customization", 
    "Dedicated design support", 
    "Premium quality fabrics", 
    "Skilled craftsmanship", 
    "Flexible production volumes",
    "Reliable delivery timelines"
    ],
    note:'We ensure that every piece represents your brand with excellence.'
  },
   processes:{
    title:'Our Custom Apparel Process',
    list: [
      "Requirement Analysis", 
      "Design & Sampling", 
      "Pattern Creation", 
      "Sample Approval", 
      "Bulk Production", 
      "Quality Inspection",
      "Packaging & Dispatch"
    ],
    note:'This structured approach guarantees smooth execution and consistent results.'
  },
  types:{ 
    title:'Types of Custom Apparel We Produce',
    list: [
      "T-Shirts & Polo Shirts",
      "Shirts & Formal Wear", 
      "Dresses & Ethnic Wear",
      "Sportswear & Activewear",
      "Corporate Uniforms",
      "Promotional Clothing"
    ],
    note:'Custom styles are developed as per client demand.'
  },
  options:{ 
    title:'Fabric & Material Options',
    list: [
      "Cotton & Blends",
      "Polyester & Lycra", 
      "Denim & Twill",
      "Linen & Rayon",
      "Sustainable Fabrics"
    ],
    note:'Clients may also supply their own materials.'
  },
  quality:{
    title:'Quality Assurance',
    desc:'Every custom order passes through strict quality checks:',
    list:[
      'Fabric inspection',
      'Stitch durability testing',
      'Fit verification',
      'Color fastness testing',
      'Final product review',
    ],
    note:'We maintain consistent quality across every batch.'
  },
  capacity:{ 
   title:'Order Capacity',
   list:[
     { type: "Sampling", range: "10–50 pcs" },
     { type: "Small Batch", range: "300–1,500 pcs" },
     { type: "Bulk Orders", range: "5,000+ pcs" }
   ],
   note:'Production capacity can be adjusted based on project size.'
  },
  packaging:{
   title:'Packaging & Delivery',
   subTitle:'We ensure secure and professional packaging:',
   list:[
    'Size-wise packing',
    'Brand labeling',
    'Export-ready cartons',
    'Safe transportation',
    'Timely dispatch'
   ],
  },
  cta: {
    title:'Start Your Custom Apparel Project',
    question:'Turn your designs into premium-quality garments with Garmen’s custom manufacturing expertise.',
    answer:'Our team is ready to support you at every stage of production.',
    note:'Contact us today for design consultation and pricing.',
   }
  },
  {
    slug: "fabric-printing",
    title: "Fabric Printing",
    shortDescription: "Bespoke garment manufacturing tailored to your brand identity.",
    subTitle:'High-Quality Prints for Stylish & Durable Fabrics',
    desc1:'At Garmen, we offer advanced fabric printing solutions that bring your designs to life with vibrant colors and long-lasting quality. Our printing process ensures sharp detailing, smooth finish, and excellent color retention.',
    desc2:'We serve fashion brands, designers, and manufacturers with reliable and cost-effective printing services.',
    image: "/services/fabric-printing.png",
    features: {
      title:'Our Fabric Printing Services',
      list:[
      {
        title: "🖨️ Digital & Screen Printing",
        desc:'',
        points: [ 
          "Digital fabric printing",
          "Screen printing", 
          "Heat transfer printing", 
          "Sublimation printing"
        ]
      },
      {
        title: "Design Customization",
        desc:'',
        points: [
           "Custom patterns", 
           "Logo printing", 
           "Color matching", 
           "Artwork support"
          ]
      },
      {
        title: "Quality Finishing",
        desc:'',
        points: [
           "Color fastness testing", 
           "Wash durability", 
           "Texture inspection", 
           "Final quality approval"
          ]
      },
    ]
  },
  whyChooseUs: {
   title:'Why Choose Our Custom Apparel Service?',
   list: [ 
    "End-to-end customization", 
    "Dedicated design support", 
    "Premium quality fabrics", 
    "Skilled craftsmanship", 
    "Flexible production volumes",
    "Reliable delivery timelines"
    ],
    note:'We ensure that every piece represents your brand with excellence.'
  },
   processes:{
    title:'Our Printing Process',
    list: [
      "Design Submission", 
      "Color Sampling", 
      "Test Printing", 
      "Bulk Production", 
      "Quality Check", 
      "Delivery",
    ],
    note:''
  },
  },
  {
    slug: "fabric-dyeing",
    title: "Fabric Dyeing",
    shortDescription: "Bespoke garment manufacturing tailored to your brand identity.",
    subTitle:'Uniform, Color-Fast & Long-Lasting Fabric Dyeing Solutions',
    desc1:'At Garmen, we provide advanced fabric dyeing services that deliver rich, consistent, and durable colors for all types of textiles. Using modern dyeing techniques and high-quality dyes, we ensure every batch meets strict quality and environmental standards.',
    desc2:'From fashion fabrics to industrial textiles, our dyeing unit is equipped to handle small and large orders with precision and efficiency.',
    image: "/services/fabric-dyeing.png",
    features: {
      title:'Our Fabric Dyeing Services',
      list:[
      {
        title: "🌈 Color Development & Matching",
        desc:'We create accurate shades based on your design requirements and market trends.',
        points: [ 
          "Pantone shade matching",
          "Custom color development", 
          "Sample testing", 
          "Shade approval process"
        ]
      },
      {
        title: "🧪 Professional Dyeing Techniques",
        desc:'We use reliable and fabric-safe dyeing methods to achieve long-lasting results.',
        points: [
           "Reactive dyeing", 
           "Vat dyeing", 
           "Disperse dyeing", 
           "Pigment dyeing",
           "Natural dyeing (on request)"
          ]
      },
      {
        title: "💧 Fabric Pre-Treatment & Processing",
        desc:'Proper pre-treatment ensures better dye absorption and color consistency.',
        points: [
           "Scouring & bleaching", 
           "De-sizing", 
           "Pre-washing", 
           "Softening treatment",
           "Anti-shrink processing"
          ]
      },
      {
        title: "✔️ Post-Dyeing Finishing",
        desc:'After dyeing, fabrics undergo finishing treatments for enhanced performance.',
        points: [
           "Color fixation", 
           "Wrinkle control", 
           "Soft touch finish", 
           "Strength enhancement",
           "Moisture control"
          ]
      },
    ]
  },
  whyChooseUs: {
   title:'Why Choose Our Fabric Dyeing Service?',
   list: [ 
    "Uniform and consistent coloring", 
    "Excellent color fastness", 
    "Eco-friendly chemicals", 
    "Water-efficient processes", 
    "Experienced technical team",
    "Bulk and custom batch handling"
    ],
    note:'We focus on delivering stable shades that maintain quality after repeated washing and usage.'
  },
   processes:{
    title:'Our Fabric Dyeing Process',
    list: [
      "Fabric Inspection & Testing", 
      "Pre-Treatment & Cleaning", 
      "Shade Preparation", 
      "Dye Application", 
      "Color Fixation", 
      "Washing & Drying",
      "Quality Inspection",
      "Packing & Dispatch"
    ],
    note:'This systematic workflow ensures reliable and repeatable results.'
  },
  types:{ 
    title:'Fabrics We Dye',
    desc:'We provide dyeing services for a wide range of fabrics, including:',
    list: [
      "Cotton & Cotton Blends",
      "Polyester & Synthetic Fabrics", 
      "Linen & Rayon",
      "Denim & Twill",
      "Silk & Wool",
      "Knitted & Woven Fabrics"
    ],
    note:'Custom fabric types are accepted on request.'
  },
  industries:{ 
    title:'Color Fastness & Quality Control',
    desc:'Every dyed fabric batch passes through strict quality checks:',
    list: [
      "Wash fastness testing",
      "Rubbing resistance testing", 
      "Light fastness testing",
      "Shade consistency inspection",
      "Fabric strength testing"
    ],
    note:'Our quality system ensures long-term performance.'
  },
  machinery:{
    title:'Environmental Responsibility',
    subTitle:'We follow responsible dyeing practices to minimize environmental impact',
    list:[
      'Low-water dyeing techniques',
      'Safe chemical usage',
      'Wastewater treatment',
      'Energy-efficient systems',
      'Sustainable dye options',
    ],
    note:'We support eco-conscious manufacturing standards.'
  },
  capacity:{ 
   title:'Order Capacity',
   list:[
     { type: "Sampling", range: "50–200 meters" },
     { type: "Small Batch", range: "500–2,000 meters" },
     { type: "Bulk Orders", range: "5,000+ meters" }
   ],
   note:'Custom capacities available based on project needs.'
  },
  packaging:{
   title:'Packaging & Delivery',
   subTitle:'We ensure safe handling and delivery of dyed fabrics',
   list:[
    'Roll-wise packing',
    'Moisture-resistant wrapping',
    'Batch labeling',
    'Export-ready cartons',
    'On-time dispatch'
   ],
  },
  cta: {
    title:'Start Your Dyeing Project With Us',
    question:'Looking for reliable fabric dyeing with consistent color quality?',
    answer:'Garmen’s expert team is ready to support your production requirements with precision and care.',
    note:'Contact us today for sampling, pricing, and scheduling.',
   }
  },
  {
    slug: "satin-weaving",
    title: "Satin Weaving",
    shortDescription: "Bespoke garment manufacturing tailored to your brand identity.",
    subTitle:'Premium Satin Fabric with Smooth Texture & Elegant Finish',
    desc1:'At Garmen, we specialize in high-quality satin weaving that produces luxurious, smooth, and glossy fabrics for premium garments. Using advanced looms and carefully selected yarns, we ensure consistent weave structure, rich appearance, and long-lasting performance.',
    desc2:'Our satin fabrics are ideal for fashion brands, designers, and manufacturers seeking superior comfort and elegance.',
    image: "/services/satin-weaving.png",
    features: {
      title:'Our Satin Weaving Services',
      list:[
      {
        title: "🧶 Yarn Selection & Testing",
        desc:'We begin every project with strict yarn quality control.',
        points: [ 
          "Silk, polyester & blended yarns",
          "Strength & smoothness testing", 
          "Uniform thickness selection", 
          "Custom yarn sourcing"
        ]
      },
      {
        title: "🪡 Precision Weaving Process",
        desc:'Our weaving process ensures a flawless satin surface.',
        points: [
           "Controlled weave density", 
           "Balanced warp & weft tension", 
           "Smooth surface formation", 
           "High-speed automated looms",
          ]
      },
      {
        title: "✨ Fabric Finishing & Polishing",
        desc:'We apply advanced finishing techniques for enhanced appearance.',
        points: [
           "Gloss enhancement", 
           "Soft touch treatment", 
           "Anti-wrinkle finishing", 
           "Static control",
          ]
      },
      {
        title: "✔️ Quality Inspection",
        desc:'Each batch undergoes detailed inspection.',
        points: [
           "Surface smoothness check", 
           "Shine uniformity test", 
           "Fabric strength testing", 
           "Defect identification",
          ]
      },
    ]
  },
  whyChooseUs: {
   title:'Why Choose Our Satin Weaving Service?',
   list: [ 
    "Premium shine & smoothness", 
    "Durable fabric structure", 
    "Consistent batch quality", 
    "Modern weaving technology", 
    "Flexible production capacity",
    "Competitive pricing"
    ],
    note:'We deliver satin fabrics that meet international fashion standards.'
  },
   processes:{
    title:'Our Satin Weaving Process',
    list: [
      "Yarn Selection & Testing", 
      "Loom Setup", 
      "Weaving", 
      "Fabric Polishing", 
      "Quality Inspection", 
      "Rolling & Packing",
      "Dispatch",
    ],
    note:'This workflow ensures high-quality output at every stage.'
  },
  types:{ 
    title:'Types of Satin We Produce',
    desc:'We manufacture different satin varieties, including:',
    list: [
      "Silk Satin",
      "Polyester Satin", 
      "Crepe Satin",
      "Charmeuse Satin",
      "Stretch Satin",
      "Bridal Satin"
    ],
    note:'Custom finishes are available on request.'
  },
  applications:{ 
    title:'Applications of Satin Fabric',
    desc:'Our satin fabrics are widely used in:',
    list: [
      "Evening gowns",
      "Party wear", 
      "Lingerie & nightwear",
      "Blouses & scarves",
      "Bridal wear",
      "Luxury home textiles"
    ],
    note:'Our quality system ensures long-term performance.'
  },
  machinery:{
    title:'Color & Design Options',
    subTitle:'We support multiple customization options:',
    list:[
      'Solid shades',
      'Printed satin',
      'Ombre effects',
      'Embossed textures',
      'Custom color matching',
    ],
    note:'We support eco-conscious manufacturing standards.'
  },
  quality:{
   title:'Quality Assurance',
   desc:'Our satin fabrics undergo strict quality testing:',
   list:[
    'Tear resistance testing',
    'Color fastness checks',
    'Shine durability testing',
    'Shrinkage control',
    'Texture consistency'
   ],
   note:'We guarantee premium-grade fabric in every shipment.'
  },
  capacity:{ 
   title:'Order Capacity',
   list:[
     { type: "Sampling", range: "50-150 meters" },
     { type: "Small Batch", range: "500–2,000 meters" },
     { type: "Bulk Orders", range: "5,000+ meters" }
   ],
   note:'Custom production plans are available.'
  },
  packaging:{
   title:'Packaging & Delivery',
   subTitle:'We ensure secure handling and professional delivery:',
   list:[
    'Roll packing with moisture protection',
    'Brand labeling',
    'Export-quality cartons',
    'Damage-free transport',
    'On-time dispatch'
   ],
  },
  cta: {
    title:'Start Your Satin Weaving Project',
    question:'Looking for premium satin fabric for your next collection?',
    answer:'Partner with Garmen for reliable weaving, elegant finishes, and consistent quality.',
    note:'Contact us today for sampling and pricing.',
   }
  },
  {
    slug: "linen-weaving",
    title: "Linen Weaving",
    shortDescription: "Bespoke garment manufacturing tailored to your brand identity.",
    subTitle:'Premium Natural Linen Fabric with Strength, Comfort & Breathability',
    desc1:'At Garmen, we specialize in high-quality linen weaving that produces durable, breathable, and eco-friendly fabrics. Using carefully selected natural fibers and modern weaving technology, we ensure excellent texture, strength, and long-lasting performance.',
    desc2:'Our linen fabrics are ideal for fashion brands, home textile manufacturers, and sustainable clothing producers.',
    image: "/services/linen-weaving.png",
    features: {
      title:'Our Linen Weaving Services',
      list:[
      {
        title: "🌿 Fiber & Yarn Selection",
        desc:'We start with premium-quality linen fibers to ensure superior fabric performance.',
        points: [ 
          "Natural flax-based yarns",
          "Strength & durability testing", 
          "Fiber blending (on request)", 
          "Uniform thickness selection"
        ]
      },
      {
        title: "🧵 Precision Weaving Process",
        desc:'Our controlled weaving process ensures even texture and consistent fabric quality.',
        points: [
           "Modern shuttle & shuttle-less looms", 
           "Balanced warp & weft tension", 
           "Uniform thread density", 
           "Defect-minimized weaving",
          ]
      },
      {
        title: "✨ Fabric Finishing & Treatment",
        desc:'We apply advanced finishing methods to enhance comfort and usability.',
        points: [
           "Softening treatment", 
           "Anti-shrink processing", 
           "Wrinkle control", 
           "Surface polishing",
          ]
      },
      {
        title: "✔️ Quality Inspection",
        desc:'Each batch  passes through strict quality checks.',
        points: [
           "Fabric strength testing", 
           "Weave consistency check", 
           "Dimensional stability testing", 
           "Visual defect inspection",
          ]
      },
    ]
  },
  whyChooseUs: {
   title:'Why Choose Our Linen Weaving Service?',
   list: [ 
    "Natural and breathable fabric", 
    "Long-lasting durability", 
    "Sustainable production practices", 
    "Consistent batch quality", 
    "Flexible production volumes",
    "Competitive pricing"
    ],
    note:'We deliver premium linen fabrics that meet modern fashion and sustainability standards.'
  },
   processes:{
    title:'Our Linen Weaving Process',
    list: [
      "Fiber Selection & Testing", 
      "Yarn Preparation", 
      "Loom Setup", 
      "Weaving", 
      "Finishing & Treatment", 
      "Quality Inspection",
      "Rolling & Packing",
      "Dispatch"
    ],
    note:'This systematic workflow ensures reliable production and superior quality.'
  },
  types:{ 
    title:'Types of Linen Fabrics We Produce',
    desc:'We manufacture various linen fabric types, including:',
    list: [
      "Pure Linen",
      "Linen-Cotton Blends", 
      "Linen-Viscose Blends",
      "Heavyweight Linen",
      "Lightweight Linen",
      "Washed Linen"
    ],
    note:'Custom blends are available on request.'
  },
  applications:{ 
    title:'Applications of Linen Fabric',
    desc:'Our linen fabrics are widely used in:',
    list: [
      "Casual wear & summer clothing",
      "Shirts & trousers", 
      "Dresses & skirts",
      "Home textiles (curtains, bedsheets)",
      "Table linens",
      "Resort wear"
    ],
  },
  options:{
    title:' Color & Design Options',
    desc:'We offer multiple customization options for linen fabrics:',
    list:[
      'Solid dyed shades',
      'Yarn-dyed linen',
      'Printed linen',
      'Textured finishes',
      'Custom color matching'
    ],
  },
  quality:{
   title:'Quality Assurance',
   desc:'We follow strict quality control procedures to maintain high standards:',
   list:[
    'Tear resistance testing',
    'Shrinkage control',
    'Color fastness checks',
    'Fabric weight verification',
    'Texture uniformity'
   ],
   note:'Each batch meets international quality benchmarks.'
  },
  enviromentalResponsibility:{
    title:'Enviromental Responsibilty',
    desc:'Our linen weaving process supports sustainable manufacturing:',
    list:[
    'Use of natural fibers',
    'Low chemical processing',
    'Energy-efficient machinery',
    'Waste minimization',
    'Eco-friendly finishing methods' 
   ],
   note:'We are committed to responsible textile production.'
  },
  capacity:{ 
   title:'Order Capacity',
   list:[
     { type: "Sampling", range: "50-150 meters" },
     { type: "Small Batch", range: "400–15,00 meters" },
     { type: "Bulk Orders", range: "5,000+ meters" }
   ],
   note:'Custom capacity planing available.'
  },
  packaging:{
   title:'Packaging & Delivery',
   subTitle:'We ensure safe and professional handling:',
   list:[
    'Roll packing with moisture protection',
    'Labeling & documentation',
    'Export-quality cartons',
    'Secure transportation',
    'Timely dispatch'
   ],
  },
  cta: {
    title:'Start Your Linen Weaving Project',
    question:'Looking for high-quality linen fabrics for your next collection?',
    answer:'Partner with Garmen for reliable weaving, sustainable production, and consistent quality.',
    note:'Contact us today for sampling and pricing.',
   }
  },
];
