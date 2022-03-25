//Index.js is traditional entry point for all node apps and helps in rendering the application

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './navbar.css';
import App from './App';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

