import '../styles/Footer.scss';
import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">© {new Date().getFullYear()} Jerrypop</footer>
  );
}
