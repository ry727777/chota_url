import React from 'react';
import styles from '../css/display.module.css'

const ShortenedUrl = ({ url }) => {
  return (
    <div>
      <a href={url} target="_blank" rel="noopener noreferrer" className={styles.display}>{url}</a>
    </div>
  );
};

export default ShortenedUrl;
