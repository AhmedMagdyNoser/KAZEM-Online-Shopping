import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './Testing Data/store';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import './Styles/fontawesome/all.min.css';
import './Styles/master.css';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);