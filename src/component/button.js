import React from 'react';
import styles from '../css/Button.module.css'

const ShortenButton = ({ onSubmit }) => {
  return (
    <button type="submit" onClick={onSubmit} className={styles.button}>Shorten URL</button>
  );
};

export default ShortenButton;