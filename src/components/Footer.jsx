import '../styles/Footer.scss';
import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <span>© {new Date().getFullYear()} Jerrypop</span>
      <span>
        Artwork by{' '}
        <a
          href="http://anthonytesija.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          Anthony Tesija
        </a>
      </span>
    </footer>
  );
}
