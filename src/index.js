import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
     domain="YOUR_DOMAIN"
	 clientId="YOUR_CLIENTID"
    authorizationParams={{
      redirect_uri: window.location.origin,
      audience: "https://timesheet-api", // optional (needed for .NET API)
    }}
  >
    <App />
  </Auth0Provider>
);
reportWebVitals();
