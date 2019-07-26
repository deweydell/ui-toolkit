import React from 'react';
import PropTypes from 'prop-types';
import base from '../base.css';
import styles from './label.module.css';

const Label = ({ level, text }) => {
  return (
    text.length > 0 && (
      <span className={`${styles.label} ${styles[level]}`}>{text}</span>
    )
  );
};

Label.propTypes = {
  text: PropTypes.string,
  level: PropTypes.string
};

export { Label };
