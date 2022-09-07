export * from './lib/shared-types';

export interface Product {
    id: number;
    name: {
      english: string;
      german: string;
    };
    tags: string[];
    features: {
      height: number;
      width: number;
      price: number;
      code: number;
    };
  }