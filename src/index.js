import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ThinkingProvider from './components/thinking/ThinkingProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThinkingProvider>
    <App />
  </ThinkingProvider>
);
