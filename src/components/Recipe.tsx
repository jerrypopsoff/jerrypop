import { useState } from 'react';
import { Recipe } from '../types/recipe';
import Heading4 from './common/Heading4';

interface Props {
  recipe: Recipe;
}

const RecipeComponent = ({ recipe }: Props) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const onRecipeClick = () => {
    setIsCollapsed(!isCollapsed);
  };

  const onRecipeKeyDown = ({ key }: { key: string } = { key: '' }) => {
    if (key !== 'Enter') {
      return;
    }

    setIsCollapsed(!isCollapsed);
  };

  const dynamicClassName = isCollapsed
    ? 'cursor-pointer hover:animate-wiggle focus:animate-wiggle'
    : '';

  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <li
      className={`my-8 rounded-sm ${dynamicClassName}`}
      onClick={isCollapsed ? onRecipeClick : undefined}
      onKeyDown={isCollapsed ? onRecipeKeyDown : undefined}
      role={isCollapsed ? 'button' : undefined}
      // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
      tabIndex={isCollapsed ? 0 : undefined}
    >
      <div className="px-4 py-6 text-left">
        <h3 className="mb-2 text-center text-xl font-bold">{recipe.title}</h3>
        <div className="text-center text-sm">{recipe.time}</div>
        {isCollapsed ? null : (
          <>
            {recipe.href ? (
              <div className="xs:h-66 my-4 h-48 w-full">
                <iframe
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  height="100%"
                  width="100%"
                  src={recipe.href}
                  title={recipe.title}
                ></iframe>
              </div>
            ) : null}
            <Heading4>Materials</Heading4>
            <ul className="ml-4 list-[circle]">
              {recipe.materials.map(({ amount, name }) => (
                <li className="my-4" key={name}>
                  <div>{name}</div>
                  <div className="mt-1 text-sm lowercase italic">{amount}</div>
                </li>
              ))}
            </ul>
            <Heading4>Instructions</Heading4>
            <ol className="ml-4 list-decimal">
              {recipe.steps.map(({ aside, content }) => (
                <li className="my-4 last:mb-0" key={content}>
                  <div>{content}</div>
                  {aside && (
                    <div
                      className="mt-2 text-sm italic"
                      dangerouslySetInnerHTML={{ __html: aside }}
                    />
                  )}
                </li>
              ))}
            </ol>
          </>
        )}
      </div>
    </li>
  );
};

export default RecipeComponent;
