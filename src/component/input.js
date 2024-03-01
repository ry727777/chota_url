import React from 'react';
import styles from '../css/LongUrlInput.module.css'

const LongUrlInput = ({ value, onChange }) => {
  return (
    <input 
      type="text" 
      placeholder="Enter long URL" 
      value={value} 
      onChange={onChange} 
      className={styles.input}
    />
  );
};

export default LongUrlInput;
