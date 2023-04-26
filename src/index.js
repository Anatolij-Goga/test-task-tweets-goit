import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './GlobalStyle';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/test-task-tweets-goit">
      <App />
      <GlobalStyle />
    </BrowserRouter>
  </React.StrictMode>
);

// basename = "/test-task-tweets-goit";
