import { StaticImageData } from 'next/image';
import { NumberRange } from './number';

export interface Product {
  allergens: string[];
  description: string;
  ingredients: string[];
  image: StaticImageData;
  priceCatering: number | NumberRange;
  subtitle: string;
  title: string;
  weight: string;
}

export type CateringProduct = Product;

export interface RetailProduct extends CateringProduct {
  priceMsrp: number;
  priceRetailer: number;
}
