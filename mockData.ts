/* -------------------- Shared Types -------------------- */

export interface NavItem {
  name: string;
  path: string;
  hasDropdown: boolean;
  items?: {
    name: string;
    path: string;
  }[];
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface Statistic {
  value: number;
  label: string;
  suffix?: string;
}

export interface Service {
  title: string;
  description: string;
  image: string;
  slug: string;
}

export interface Partner {
  name: string;
}

export interface Skill {
  name: string;
  percentage: number;
}

export interface Testimonial {
  text: string;
  name: string;
  role: string;
  image: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  slug?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface BlogPost {
  title: string;
  date: string;
  comments: number;
  excerpt: string;
  image: string;
  slug?: string;
}

/* -------------------- Section Types -------------------- */

export interface AboutSection {
  subtitle: string;
  title: string;
  description: string;
  images: string[];
  vision: string[];
  mission: string[];
}

export interface HeroSection {
  subtitle: string;
  title: string;
  description: string;
  image: string;
}

export interface WhyChooseSection {
  subtitle: string;
  title: string;
  description1: string;
  description2: string;
  skills: Skill[];
}

export interface HowWeWorkSection {
  subtitle: string;
  title: string;
  description1: string;
  description2: string;
  steps: {
    title: string;
    description: string;
    icon: string;
  }[];
}

/* -------------------- Root Type -------------------- */

export interface MockData {
  topBar: {
    phone: string;
    email: string;
    address: string;
  };
  navigation: NavItem[];
  hero: HeroSection;
  features: Feature[];
  about: AboutSection;
  statistics: Statistic[];
  services: Service[];
  partners: Partner[];
  whyChoose: WhyChooseSection;
  testimonials: Testimonial[];
  projects: Project[];
  howWeWork: HowWeWorkSection;
  faq: FAQ[];
  blog: BlogPost[];
}

/* -------------------- Typed Data -------------------- */

export const mockData: MockData = {
  topBar: {
    phone: "+123-234-1234",
    email: "hello@awesomesite.com",
    address: "KLLG st, No.99, Pku City, ID 28289",
  },

  navigation: [
    { name: "Home", path: "/", hasDropdown: false },
    { name: "About Us", path: "/about", hasDropdown: false },
    {
      name: "Services",
      path: "/services",
      hasDropdown: true,
      items: [
        { name: "Garment Stitching", path: "/services/garment-stitching" },
        { name: "Custom Apparel", path: "/services/custom-apparel" },
        { name: "Fabric Printing", path: "/services/fabric-printing" },
        { name: "Fabric Dyeing", path: "/services/fabric-dyeing" },
        { name: "Satin Weaving", path: "/services/satin-weaving" },
        { name: "Linen Weaving", path: "/services/linen-weaving" },
      ],
    },
    {
      name: "Project",
      path: "/project",
      hasDropdown: true,
      items: [
        {
          name: "T-Shirts",
          path: "/project/premium-tshirt-manufacturing",
        },
        {
          name: "Shirts",
         path: "/project/premium-shirt-manufacturing",
        },
        {
          name: "Ethnic Wear",
         path: "/project/premium-ethnic-wear-manufacturing",
        },
        {
         name: "Western Wear",
          path: "/project/contemporary-western-wear-manufacturing",
        },
         {
         name: "Uniforms",
        path: "/project/professional-uniform-manufacturing",
        },
         {
         name: "Sportswear",
         path: "/project/high-performance-sportswear-manufacturing",
        },
         {
          name: "Private Label Apparel",
          path: "/project/end-to-end-private-label-apparel-manufacturing",
        },
      ],
    },
    {
      name: "Pages",
      path: "#",
      hasDropdown: true,
      items: [
        { name: "Pricing", path: "/pricing" },
        { name: "Team", path: "/team" },
        { name: "FAQ", path: "/faq" },
        { name: "Blog", path: "/blog" },
      ],
    },
    { name: "Contact Us", path: "/contact", hasDropdown: false },
  ],

  hero: {
    subtitle: "GARMEN TEXTILE INDUSTRY",
    title: "You Can Never Go Wrong With Our Quality",
    description:
      "Integer id ipsum eu massa pretium pulvinar non vitae massa donec ut dignissim.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=80",
  },

  features: [
    {
      icon: "🎯",
      title: "Excellent Material",
      description: "Luctus nec ullamcorper ipsum mattis pulvinar dolor.",
    },
    {
      icon: "✓",
      title: "Quality Product",
      description: "Luctus nec ullamcorper ipsum mattis pulvinar dolor.",
    },
    {
      icon: "👥",
      title: "Trusted by Clients",
      description: "Luctus nec ullamcorper ipsum mattis pulvinar dolor.",
    },
  ],

  about: {
    subtitle: "ABOUT GARMEN",
    title: "Complete Garment Manufacturing From Fabric to Finished Apparel",
    description: `We are a garment manufacturing company offering end-to-end stitching and apparel production services. From raw fabric handling to final finishing, we convert materials into ready-to-sell garments with precision and consistency.
    Clients may supply their own raw material, or choose from our range of quality fabrics sourced as per design, usage, and budget. With skilled workmanship and strict quality control, we support brands, retailers, and wholesalers with reliable manufacturing solutions.`,
    images: [
      "https://images.unsplash.com/photo-1558769132-cb1aea1c8b6d?w=600&q=80",
      "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=600&q=80",
    ],
    vision: [
      "To deliver consistent garment quality across every order",
      "To support brands with flexible manufacturing options.",
      "To combine skilled craftsmanship with modern processes.",
      "To build long-term partnerships through trust and reliability.",
      "To grow as a dependable apparel production unit.",
    ],
    mission: [
      "To provide end-to-end stitching solutions under one roof.",
      "To maintain strict quality checks at every production stage.",
      "Morbi sed volutpat neTo offer flexibility in raw material sourcingque et.",
      "To ensure timely delivery for all order sizes.",
      "To help clients bring market-ready garments faster",
    ],
  },

  statistics: [
    { value: 1240, label: "Completed Project", suffix: "+" },
    { value: 98, label: "Export Country", suffix: "+" },
    { value: 2840, label: "Satisfied Customer", suffix: "+" },
  ],

  services: [
    {
      image:
        "https://customcraftapparel.in/wp-content/uploads/2026/01/Service-4.png",
      title: "Garment Stitching",
      slug: "garment-stitching",
      description:
        "Complete garment stitching services with precision tailoring, strong seams, and quality finishing for ready-to-sell apparel.",
    },
    {
      image:
        "https://customcraftapparel.in/wp-content/uploads/2026/01/Service-1.png",
      title: "Custom Apparel",
      slug: "custom-apparel",
      description:
        "Customized garment production based on your designs, measurements, and requirements from sampling to bulk manufacturing.",
    },
    {
      image:
        "https://customcraftapparel.in/wp-content/uploads/2026/01/Service-6.png",
      title: "Fabric Printing",
      slug: "fabric-printing",
      description:
        "High-quality fabric printing with sharp detailing, vibrant colors, and long-lasting results suitable for bulk apparel production.",
    },
    {
      image:
        "https://customcraftapparel.in/wp-content/uploads/2026/01/Service-2.png",
      title: "Fabric Dyeing",
      slug: "fabric-dyeing",
      description:
        "We offer uniform and color-fast fabric dyeing using reliable processes to ensure consistent shades, durability, and fabric safety across batches.",
    },
    {
      image:
        "https://customcraftapparel.in/wp-content/uploads/2026/01/Service-3.png",
      title: "Satin Weaving",
      slug: "satin-weaving",
      description:
        "Smooth, high-quality satin weaving with controlled texture and finish, suitable for garments requiring elegance, softness, and strength.",
    },
    {
      image:
        "https://customcraftapparel.in/wp-content/uploads/2026/01/Service-5.png",
      title: "Linen Weaving",
      slug: "linen-weaving",
      description:
        "Breathable and durable linen weaving with attention to fabric strength, texture, and comfort for long-lasting garments.",
    },
  ],

  partners: [
    { name: "Fast Truck" },
    { name: "Strong Steel" },
    { name: "Astrorry" },
    { name: "Lighthouse" },
  ],
  whyChoose: {
    subtitle: "WHY CHOOSE GARMEN",
    title: "Lowest Price Guaranteed, Quality Never Compromised",
    description1: `We combine efficient production processes, skilled workmanship, and reliable sourcing to offer competitive pricing without compromising on quality. By managing stitching, finishing, and quality control in-house, we reduce unnecessary costs while maintaining consistent standards across every order.
       Our focus is on long-term partnerships, transparent pricing, and dependable delivery — ensuring our clients receive the best value for their investment.
      `,
    description2: `With experienced workers, modern machinery, and flexible raw material options, we are equipped to handle both small and bulk orders efficiently. Every garment undergoes strict quality checks to meet market expectations before delivery.
     Aenean libero eros ultrices vel tristique non, porta eget dolor. Donec vel ipsum imperdiet neque, sit amet porta facilisis elit. Donec vel ipsum imperdiet neque amet porta facilisis elit. Integer eto eros vehicula odio cursus egestas vel tristique faucibus tortor.`,
    skills: [
      { name: "Factory Experience", percentage: 95 },
      { name: "Textile Material", percentage: 97 },
      { name: "Worker Skills", percentage: 96 },
      { name: "Machinery & Equipment", percentage: 93 },
    ],
  },
  testimonials: [
    {
      text: "This platform completely changed the way we manage our workflow. ",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      name: "Rahul Sharma",
      role: "Product Manager",
    },
    {
      text: "Amazing experience! The UI is clean and the performance is top-notch.",
      image: "https://randomuser.me/api/portraits/women/45.jpg",
      name: "Ananya Verma",
      role: "UI/UX Designer",
    },
    {
      text: "Customer support is fast and helpful. Everything works exactly as promised.",
      image: "https://randomuser.me/api/portraits/men/76.jpg",
      name: "Mohit Khan",
      role: "Startup Founder",
    },
    {
      text: "We saved a lot of time after switching to this solution. Great value for money.",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      name: "Priya Singh",
      role: "Operations Lead",
    },
  ],
  projects: [
    {
      image: "https://images.unsplash.com/photo-1600180758895-7a8a2e2e6b8a",
      title: "Garment Manufacturing Unit",
      description:
        "End-to-end garment manufacturing covering cutting, stitching, finishing, and quality inspection processes.",
      slug: "/garment-manufacturing-unit",
    },
    {
      image: "https://images.unsplash.com/photo-1593032465171-cf5c8f1a9c96",
      title: "Textile Fabric Production",
      description:
        "Fabric production including weaving, dyeing, printing, and finishing for domestic and export markets.",
      slug: "/textile-fabric-production",
    },
    {
      image: "https://images.unsplash.com/photo-1585386959984-a4155224a1a1",
      title: "Apparel Export Operations",
      description:
        "Export-oriented garment production managing buyer requirements, compliance standards, and bulk shipments.",
      slug: "/apparel-export-operations",
    },
    {
      image: "https://images.unsplash.com/photo-1603252109303-2751441dd157",
      title: "Fashion Sampling & Design Studio",
      description:
        "Garment sampling and design development with pattern making, fittings, and style finalization.",
      slug: "/fashion-sampling-design-studio",
    },
  ],

  howWeWork: {
    subtitle: "HOW WE WORK",
    title: "Find The Fabric, Enjoy The Process and The Results",
    description1:
      "We follow a clear and structured production process to ensure quality, efficiency, and timely delivery. From the initial consultation to final garment finishing, every step is handled with attention to detail and consistent quality checks.",
    description2:
      "Whether you bring your own fabric or choose from our sourced materials, we guide you through each stage to ensure the final product meets your expectations and market requirements.",
    steps: [{ icon: "", title: "", description: "" }],
  },
  faq: [
    {
      question: "Do you provide raw materials or should clients supply them?",
      answer:
        "Clients may supply their own fabric, or we can arrange high-quality raw materials based on design, usage, and budget requirements.",
    },
    {
      question: "How do you ensure garment quality?",
      answer:
        "Each garment goes through multiple quality checks during stitching, finishing, and final inspection to ensure consistent quality and durability.",
    },
    {
      question: "What types of garments do you manufacture?",
      answer:
        "We manufacture a wide range of garments including casual wear, formal wear, uniforms, ethnic wear, and custom apparel for men, women, and kids.",
    },
    {
      question: "What is the typical production timeline?",
      answer:
        "Production timelines depend on order quantity, design complexity, and material availability. We provide clear timelines after the initial consultation.",
    },
  ],
  blog: [
    {
      image: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f",
      title: "Getting Started with the MERN Stack",
      date: "Jan 12, 2026",
      comments: 8,
      excerpt:
        "Learn the basics of the MERN stack and how to build full-stack applications step by step.",
    },
    {
      image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd",
      title: "Top React Hooks Every Developer Should Know",
      date: "Feb 02, 2026",
      comments: 12,
      excerpt:
        "A practical guide to the most useful React hooks with real-world use cases.",
    },
    {
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
      title: "How to Build Scalable APIs with Node.js",
      date: "Feb 18, 2026",
      comments: 5,
      excerpt:
        "Best practices for structuring, securing, and scaling REST APIs using Node.js and Express.",
    },
  ],
};
