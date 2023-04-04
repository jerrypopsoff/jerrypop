export interface Product {
  allergens: string[];
  description: string;
  ingredients: string[];
  image: string;
  imageWebp: string;
  packagingImage: string;
  packagingImageWebp: string;
  priceCatering: number;
  subtitle: string;
  title: string;
}

export interface RetailProduct extends Product {
  priceMsrp: number;
  priceRetailer: number;
}
