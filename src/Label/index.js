import React from 'react';
import styles from './label.module.css';

const Label = ({ level, text }) => {
  return (
    text.length > 0 && (
      <span className={`${styles.label} ${styles[level]}`}>{text}</span>
    )
  );
};

export { Label };