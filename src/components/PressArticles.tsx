import { ARTICLES } from '../constants/press';
import OptimizedImage from './common/OptimizedImage';
import Link from 'next/link';

const PressArticles = () => {
  return (
    <ul className="flex flex-col flex-wrap justify-center md:flex-row">
      {ARTICLES.map(
        ({ date, href, image, imageAltText, publication, title }) => (
          <li className="inline-flex" key={href}>
            <Link
              className="mx-auto my-6 flex flex-col items-center p-4 md:m-6 md:flex-row"
              href={href}
              rel="noreferrer"
              target="_blank"
            >
              <OptimizedImage
                alt={imageAltText}
                aspectRatioCss="600 / 600"
                sizes={`300px (min-width: 333px), 90vw`}
                src={image}
                widthCss="min(90vw, 18.75rem)"
              />
              <div className="max-w-75 mt-4 text-center md:ml-6 md:mt-0 md:text-left">
                <p className="font-light uppercase">{publication}</p>
                <h2 className="mb-4 mt-2 text-2xl font-semibold">{title}</h2>
                <p className="text-xs">{date}</p>
              </div>
            </Link>
          </li>
        ),
      )}
    </ul>
  );
};

export default PressArticles;
