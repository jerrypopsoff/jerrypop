import { CateringProduct, RetailProduct } from '../../types/product';
import { ProductPricingListItem } from './ProductPricingListItem';

interface CateringProps {
  products: CateringProduct[];
  type: 'catering';
}

interface RetailProps {
  products: RetailProduct[];
  type: 'retail';
}

export function ProductPricingList({
  products,
  type,
}: CateringProps | RetailProps) {
  return (
    <ul className="flex flex-wrap justify-center">
      {type === 'retail'
        ? products.map((product) => (
            <ProductPricingListItem
              key={product.title}
              product={product}
              type={type}
            />
          ))
        : products.map((product) => (
            <ProductPricingListItem
              key={product.title}
              product={product}
              type={type}
            />
          ))}
    </ul>
  );
}
