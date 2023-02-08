import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ColoerContextProider } from './compoent/colormode/Dark';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ColoerContextProider> 
   <React.StrictMode>
    <App />
  </React.StrictMode>
  </ColoerContextProider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

