import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// Import Dashboard component instead of App
import { Dashboard } from './components/Dashboard';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
  <Dashboard /> {/* Use Dashboard component here */}
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();