'use client';

import Heading1 from './common/Heading1';
import PageHeaderPhotograph from './common/PageHeaderPhotograph';
import PageHeaderPhotographSrc from '../images/glamorous-pbj-sheet.jpeg';
import Paragraph from './common/Paragraph';
import PageContentLayout from './PageContentLayout';

const NotFound = () => {
  return (
    <>
      <PageHeaderPhotograph
        alt="Photograph of PB&J Craft Popcorn spread onto a baking sheet"
        aspectRatioCss="4032 / 3024"
        src={PageHeaderPhotographSrc}
      />
      <PageContentLayout>
        <Heading1>Ope!</Heading1>
        <Paragraph>
          Someone spilled the kernels. That page does not exist.
        </Paragraph>
      </PageContentLayout>
    </>
  );
};

export default NotFound;
