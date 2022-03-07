import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import './index.css';

import { store } from './store/store';
import { AuthProvider } from './providers/auth-provider/provider';
import { AddPopupProvider } from './providers/add-popup-provider/provider';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <AddPopupProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </AddPopupProvider>
      </AuthProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
