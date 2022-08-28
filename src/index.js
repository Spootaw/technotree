import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/styles/styles.css';
import { BrowserRouter } from 'react-router-dom';
import AppContextProvider from './context/appContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
