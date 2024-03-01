import React from 'react';
import ShortenUrlForm from './component/url_form'
import styles from './css/block.module.css'

function App() {
  return (
    <div className={styles.divsegment}>
      <ShortenUrlForm />
    </div>
  );
}

export default App;