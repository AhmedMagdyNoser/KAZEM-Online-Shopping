import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './Testing Data/store';
import { Provider } from 'react-redux';
import App from './App';

import './Styles/fontawesome/all.min.css';
import './Styles/master.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);