

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.mjs';
import './assets/styles/index.css'; // Ensure correct path

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);
