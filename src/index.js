import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import {disableReactDevTools} from "@fvilers/disable-react-devtools"

if (process.env.NODE_ENV === 'production') {
  disableReactDevTools();
} 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>
);


