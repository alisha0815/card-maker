import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './app';
import { firebaseApp } from './service/firebase';
import AuthService from './service/auth_service';

const authService = new AuthService(firebaseApp);

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} />
  </React.StrictMode>,
  document.getElementById('root')
);
