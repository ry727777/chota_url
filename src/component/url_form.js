import React, { useState } from 'react';
import axios from 'axios';
import LongUrlInput from './input';
import ShortenButton from './button';
import ShortenedUrl from './display_url';
import Error from './error';
import styles from '../css/block.module.css'
import styles1 from '../css/font.module.css'

const ShortenUrlForm = () => {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (event) => {
    setLongUrl(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:5000/shorten', { longUrl });
      setShortUrl(response.data.short_url);
      setError('');
    } catch (err) {
      setError('Error shortening URL');
      console.error(err);
    }
  };

  return (
    <div>
      <p className={styles1.font}>CHOTA URL</p>
      <form onSubmit={handleSubmit} className={styles.custom}>
        <LongUrlInput value={longUrl} onChange={handleInputChange} />
        <ShortenButton onSubmit={handleSubmit} />
      </form>
      {shortUrl && <ShortenedUrl url={shortUrl} />}
      {error && <Error message={error} />}
    </div>
  );
};

export default ShortenUrlForm;
