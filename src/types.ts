export interface ComponentItem {
  id: string;
  name: string;
  brand: string;
  price: number;
  image: string;
  rating: number;
  category: 'CPU' | 'GPU' | 'RAM' | 'Cooling' | 'Case' | 'Accessories' | 'Displays';
  specs: {
    [key: string]: string;
  };
  status: 'IN STOCK' | 'LIMITED STOCK' | 'OUT OF STOCK' | 'NEW ARRIVAL' | 'LIMITED EDITION';
  wattage: number;
}

export interface PreconfiguredRig {
  id: string;
  name: string;
  price: number;
  image: string;
  status: 'IN STOCK' | '2 WEEK LEAD';
  specs: {
    cpu: string;
    gpu: string;
    ram: string;
    cooling: string;
    case: string;
    accessories?: string;
  };
  estimatedFps?: {
    cyberpunk: number;
    valorant: number;
    benchmarkScore: string;
  };
}

export interface BuildState {
  CPU: ComponentItem | null;
  GPU: ComponentItem | null;
  RAM: ComponentItem | null;
  Cooling: ComponentItem | null;
  Case: ComponentItem | null;
  Accessories: ComponentItem | null;
  Displays: ComponentItem | null;
}
