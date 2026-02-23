// types/project.ts

export interface Button {
  text: string;
  className: string;
}

export interface CapabilitySection {
  title: string;
  items: string[];
  footer?: string;
}

export interface PrintingSection {
  title: string;
  items: string[];
}

export interface PrivateLabelSection {
  title: string;
  description?: string;
  items: string[];
  footer?: string;
  primaryColor?: boolean;
}

export interface PrivateLabelControl {
  you: string[];
  we: string[];
}

export interface ProductDevelopmentSection {
  title: string;
  items: string[];
}

export interface ProductDevelopment {
  title: string;
  description: string;
  sections: ProductDevelopmentSection[];
}

export interface BrandingSection {
  title: string;
  items: string[];
  footer?: string;
}

export interface Branding {
  title: string;
  description: string;
  sections: BrandingSection[];
}

export interface Confidentiality {
  title: string;
  description: string;
  items: string[];
  footer: string;
}

export interface Process {
  title: string;
  steps: string[];
  footer: string;
}

export interface TableRow {
  type: string;
  quantity: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Industries {
  title: string;
  description?: string;
  items: string[];
}

export interface Sustainable {
  title: string;
  description?: string;
  items: string[];
  footer?: string;
}

export interface WhyChoose {
  title: string;
  items: string[];
  footer?: string;
}

export interface QualityAssurance {
  title: string;
  description?: string;
  items: string[];
  footer?: string;
}

export interface BulkContracts {
  title: string;
  description?: string;
  items: string[];
  footer?: string;
}

export interface PrivateLabel {
  title?: string;
  description?: string;
  items?: string[];
  footer?: string;
  sections?: PrivateLabelSection[];
  industries?: Industries;
  sustainable?: Sustainable;
  whyChoose?: WhyChoose;
  control?: PrivateLabelControl;
}

export interface ProductionCapacity {
  title: string;
  tableData: TableRow[];
  footer: string;
}

export interface FAQ {
  title: string;
  items: FAQItem[];
}

export interface FinalCta {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonClassName: string;
}

export interface Hero {
  imageSrc: string;
  title: string;
  description1: string;
  description2: string;
  buttons: Button[];
}

export interface Capabilities {
  title?: string;
  subtitle?: string;
  sections?: CapabilitySection[];
  items?: string[];
  footer?: string;
}

export interface PrintingBranding {
  title: string;
  sections: PrintingSection[];
}

export interface ProjectData {
  id: string;
  slug: string;
  name: string;
  category: string;
  icon?: string;
  hero: Hero;
  capabilities?: Capabilities;
  printingBranding?: PrintingBranding;
  privateLabel?: PrivateLabel;
  qualityAssurance?: QualityAssurance;
  productionCapacity?: ProductionCapacity;
  industries?: Industries;
  sustainable?: Sustainable;
  whyChoose?: WhyChoose;
  bulkContracts?: BulkContracts;
  productDevelopment?: ProductDevelopment;
  branding?: Branding;
  confidentiality?: Confidentiality;
  process?: Process;
  faq?: FAQ;
  finalCta?: FinalCta;
}