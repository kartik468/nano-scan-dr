export interface ProductFeature {
  icon: string; // inline SVG path data or named identifier
  title: string;
  description: string;
}

export interface ProductSpec {
  label: string;
  value: string;
}

export interface ProductSpecGroup {
  category: string;
  specs: ProductSpec[];
}

export interface ProductPerformanceStat {
  value: string;
  unit: string;
  label: string;
  description: string;
}

export interface ProductPdfs {
  brochure: string;
  catalogue: string;
}

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  tagline: string;
  overview: string;
  heroImage: string;
  features: ProductFeature[];
  performanceStats: ProductPerformanceStat[];
  specGroups: ProductSpecGroup[];
  pdfs: ProductPdfs;
}
