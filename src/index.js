import React from 'react';
import ReactDOM from 'react-dom';
import App from './app'; // Importing the root component of your application

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Rendering the root component into the DOM
);