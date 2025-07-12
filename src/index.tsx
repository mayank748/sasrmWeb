import React from 'react';
import ReactDOM from 'react-dom/client'; // or 'react-dom' for older React versions
import App from './App'; // Assuming your main component is in App.tsx
import './index.css'; // Optional: for global styles

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);