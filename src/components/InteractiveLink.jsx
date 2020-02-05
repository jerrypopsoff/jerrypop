import '../styles/InteractiveLink.scss';
import { Link } from 'react-router-dom';
import React from 'react';
import UseInteraction from '../hooks/UseInteraction';

export default function InteractiveLink({
  className,
  defaultText,
  interactiveText,
  to,
}) {
  const [ref, isInteracting] = UseInteraction();

  return (
    <Link className={`interactive-link ${className}`} to={to} ref={ref}>
      {isInteracting ? interactiveText : defaultText}
    </Link>
  );
}
