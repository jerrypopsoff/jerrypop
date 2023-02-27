import { Helmet } from 'react-helmet-async';
import React from 'react';
import Typography from './Typography';
import GlamorPhotograph from './GlamorPhotograph';
import Baklava600 from '../images/glamorous-baklava-600.jpeg';
import Baklava1200 from '../images/glamorous-baklava-1200.jpeg';
import Baklava2400 from '../images/glamorous-baklava-2400.jpeg';
import BaklavaWebp600 from '../images/glamorous-baklava-600.webp';
import BaklavaWebp1200 from '../images/glamorous-baklava-1200.webp';
import BaklavaWebp2400 from '../images/glamorous-baklava-2400.webp';

const Press: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Press · Jerrypop</title>
      </Helmet>
      <GlamorPhotograph
        alt="Photograph of a wooden bowl of Baklava Craft Popcorn taken outdoors"
        aspectRatio={1800 / 2400}
        fallbackSrc={Baklava2400}
        fallbackSrcSet={`${Baklava600} 600w, ${Baklava1200} 1200w, ${Baklava2400} 2400w`}
        srcSet={`${BaklavaWebp600} 600w, ${BaklavaWebp1200} 1200w, ${BaklavaWebp2400} 2400w`}
      />
      <Typography type="h1">Press</Typography>
    </>
  );
};

export default Press;
