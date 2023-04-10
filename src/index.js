import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { store } from './Testing Data/Store';
import { Provider } from 'react-redux';

import './Styles/master.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);