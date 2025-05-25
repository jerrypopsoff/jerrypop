import { CateringProduct, RetailProduct } from '../../types/product';
import { displayCurrency } from '../../utilities/currency';
import ProductImage from './ProductImage';

interface CateringProps {
  product: CateringProduct;
  type: 'catering';
}

interface RetailProps {
  product: RetailProduct;
  type: 'retail';
}

export default function ProductPricingListItem({
  product,
  type,
}: CateringProps | RetailProps) {
  const { description, priceCatering, subtitle, title, weight } = product;

  return (
    <li key={title} className="mx-4 my-8 max-w-[18rem] text-center sm:mx-6">
      <ProductImage product={product} />
      <h3 className="mt-6 text-2xl font-semibold">{title}</h3>
      <p className="mt-1 text-sm uppercase">{`${weight} ${subtitle}`}</p>
      <p className="text-normal my-6">
        <span dangerouslySetInnerHTML={{ __html: description }} />
      </p>
      <dl>
        {type === 'retail' && (
          <>
            <dt className="text-sm uppercase">Suggested retail price</dt>
            <dd className="mb-6 mt-1 text-[2rem] font-light leading-none">
              {displayCurrency(product.priceMsrp)}
            </dd>
          </>
        )}
        <dt className="text-sm uppercase">
          {type === 'retail' ? 'Your price' : 'Price'}
        </dt>
        <dd className="mt-1 text-[2rem] font-light leading-none">
          {displayCurrency(
            type === 'retail' ? product.priceRetailer : priceCatering,
          )}
        </dd>
      </dl>
    </li>
  );
}
