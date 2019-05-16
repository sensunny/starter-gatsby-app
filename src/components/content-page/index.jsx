import React from 'react';
import classNames from 'classnames';

// import styles from './styles.module.css';

const ContentPage = ({ ...props, children, className }) => (
  <section {...props} className={classNames({}, className)}>
    {children}
  </section>
);

export default ContentPage;
