import { Product } from '../types/product';
import { OptimizedImage } from './common/OptimizedImage';

export function ProductListing({ product }: { product: Product }) {
  const { allergens, description, image, ingredients, subtitle, title } =
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
      <h2 className="mt-6 text-2xl font-semibold">{title}</h2>
      <p className="mt-1 text-xs uppercase">{subtitle}</p>
      <p className="my-6">{description}</p>
      <p className="text-justify text-xs uppercase">
        <b>Ingredients:</b> {ingredients.join(', ')}
      </p>
      {allergens.length ? (
        <p className="mt-2 text-justify text-xs uppercase">
          <b>Contains:</b> {allergens.join(', ')}
        </p>
      ) : null}
    </li>
  );
}
