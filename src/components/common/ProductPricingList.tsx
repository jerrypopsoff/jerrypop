import { Product } from '../../types/product';
import ProductPricingListItem from './ProductPricingListItem';

export default function ProductPricingList({
  products,
  type,
}: {
  products: Product[];
  type: 'catering' | 'retail';
}) {
  return (
    <ul className="flex flex-wrap justify-center">
      {products.map((product) => (
        <ProductPricingListItem
          key={product.title}
          product={product}
          type={type}
        />
      ))}
    </ul>
  );
}
