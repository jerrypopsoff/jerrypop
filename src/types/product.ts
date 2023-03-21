export interface Product {
  allergens: string[];
  description: string;
  ingredients: string[];
  image: string;
  imageWebp: string;
  subtitle: string;
  title: string;
}

export interface RetailProduct extends Product {
  packagingImage: string;
  packagingImageWebp: string;
  priceMsrp: number;
  priceRetailer: number;
}
