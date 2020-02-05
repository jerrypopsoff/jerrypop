import '../styles/Recipe.scss';
import React from 'react';

export default function Recipe({ recipe }) {
  return (
    <div className="Recipe">
      <h2 className="Recipe__title">{recipe.title}</h2>
      <span className="Recipe__time">{recipe.time}</span>
      <h5 className="Recipe__inner-heading">Materials</h5>
      <ul className="Recipe__materials">
        {recipe.materials.map(({ amount, name }) => (
          <li className="Recipe__material" key={name}>
            <span className="Recipe__material-name">{name}</span>
            <span className="Recipe__material-amount">{amount}</span>
          </li>
        ))}
      </ul>
      <h5 className="Recipe__inner-heading">Instructions</h5>
      <ol className="Recipe__steps">
        {recipe.steps.map(({ aside, content }) => (
          <li className="Recipe__step" key={content}>
            <div>
              <span className="Recipe__step-content">{content}</span>
              <span className="Recipe__aside">{aside}</span>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
