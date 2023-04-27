import { RetailProduct } from './product';

export interface Retailer {
  address: string;
  href: string;
  name: string;
  products: RetailProduct[];
}
