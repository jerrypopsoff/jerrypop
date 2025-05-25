import Image from 'next/image';
import { Product } from '../../types/product';

export default function ProductImage({ product }: { product: Product }) {
  const { image, title, weight } = product;

  return (
    <div
      className="
        relative mx-auto aspect-[600/771] w-[min(95vw,15rem)] max-w-[300px]
      "
    >
      <Image
        alt={`Photograph of a ${weight} bag of ${title} craft popcorn`}
        fill
        sizes="(min-width: 300px) 300px, 95vw"
        src={image}
      />
    </div>
  );
}
