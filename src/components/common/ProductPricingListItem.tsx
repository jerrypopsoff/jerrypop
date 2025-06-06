import { CateringProduct, RetailProduct } from '../../types/product';
import { displayCurrency } from '../../utilities/currency';
import { OptimizedImage } from './OptimizedImage';

interface CateringProps {
  product: CateringProduct;
  type: 'catering';
}

interface RetailProps {
  product: RetailProduct;
  type: 'retail';
}

export function ProductPricingListItem({
  product,
  type,
}: CateringProps | RetailProps) {
  const { description, image, priceCatering, subtitle, title, weight } =
    product;

  return (
    <li className="mx-4 my-8 max-w-[18rem] text-center sm:mx-6">
      <OptimizedImage
        alt={`Photograph of a bag of ${title} craft popcorn`}
        aspectRatioCss="600 / 771"
        className="mx-auto"
        sizes="(min-width: 300px) 300px, 95vw"
        src={image}
        widthCss="min(95vw,15rem)"
      />
      <h3 className="mt-6 text-3xl font-semibold">{title}</h3>
      <p className="mt-2 text-xs uppercase">{`${weight} ${subtitle}`}</p>
      <p className="my-6">
        <span dangerouslySetInnerHTML={{ __html: description }} />
      </p>
      <dl>
        {type === 'retail' && (
          <>
            <dt className="text-xs uppercase">Suggested retail price</dt>
            <dd className="mb-6 mt-1 text-3xl font-light leading-none">
              {displayCurrency(product.priceMsrp)}
            </dd>
          </>
        )}
        <dt className="text-xs uppercase">
          {type === 'retail' ? 'Your price' : 'Price'}
        </dt>
        <dd className="mt-1 text-3xl font-light leading-none">
          {displayCurrency(
            type === 'retail' ? product.priceRetailer : priceCatering,
          )}
        </dd>
      </dl>
    </li>
  );
}
