import React from 'react';
import Helmet from 'react-helmet';
import { siteMetadata as config } from '../../../gatsby-config';

const Meta = props => {
  const mainTitle = `${config.title}`
  const metaTitle = props.title ? `${props.title}` : mainTitle;
  // const metaDescription = "Black Elephant’, a cross between a ‘black swan’, and the ‘elephant in the room’, gives name to the inertia that prevents brands from driving significant and impactful digital marketing"
  const metaDescription = props.description || config.description;
  const absoluteUrl = `${config.url}${props.location.pathname}`;
  const metaImage = props.image || config.image
  const metaKeywords = props.keywords || config.keywords

  const meta = [
    { name: 'description', content: metaDescription },
    { name: 'title', content: metaTitle },
    { name: 'keywords', content: metaKeywords },
    { property: 'og:title', content: metaTitle },
    { property: 'og:image', content: metaImage },
    { property: 'og:description', content: metaDescription },
    { property: 'og:url', content: absoluteUrl },
    { name: 'twitter:title', content: metaTitle },
    { name: 'twitter:description', content: metaDescription },
    { property: 'twitter:url', content: absoluteUrl },
  ];

  if (props.noIndex) {
    meta.push({ name: 'robots', content: 'noindex' });
  }

  return (
    <Helmet title={metaTitle} meta={meta} />
  );
};

export default Meta;
