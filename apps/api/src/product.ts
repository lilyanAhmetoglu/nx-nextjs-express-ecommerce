import type {Product} from '@bahag/shared-types'

export const products: Product[] = [
  {
    id: 1,
    name: {
      english: 'Door',
      german: 'Tür',
    },
    tags: ['wood', 'house'],
    features: {
      height: 45,
      width: 49,
      price: 49,
      code: 65,
    },
  },
  {
    id: 2,
    name: {
      english: 'Window',
      german: 'Fenster',
    },
    tags: ['glass', 'house'],
    features: {
      height: 45,
      width: 49,
      price: 49,
      code: 66,
    },
  },
  {
    id: 3,
    name: {
      english: 'Tv',
      german: 'Fenster',
    },
    tags: ['electic', 'house', 'living room'],
    features: {
      height: 45,
      width: 49,
      price: 49,
      code: 66,
    },
  },
];
