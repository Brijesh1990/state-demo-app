import React from 'react';
import ReactDOM from 'react-dom/client';
import StateDemo from './components/StateDemo';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './assets/css/style.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StateDemo />
  </React.StrictMode>,
)
