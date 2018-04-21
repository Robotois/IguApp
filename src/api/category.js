import { chunkArray } from '../utils/arrays';

export const categoryList = [
  {
    title: 'Recamara',
    active: 0,
  },
  {
    title: 'Cocina',
    active: 1,
  },
  {
    title: 'Comedor',
    active: 3,
  },
  {
    title: 'Estudio',
    active: 1,
  },
  {
    title: 'Comedor',
    active: 3,
  },
  {
    title: 'Estudio',
    active: 1,
  },
];

export const list = chunkArray(categoryList, 2);
