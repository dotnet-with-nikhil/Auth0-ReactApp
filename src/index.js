import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-crackdotnetinterviews.us.auth0.com"
    clientId="sduvlISXlj2aMAEiCfjo08QYFXQKejv1"
    authorizationParams={{
      redirect_uri: window.location.origin,
      audience: "https://timesheet-api", // optional (needed for .NET API)
    }}
  >
    <App />
  </Auth0Provider>
);
reportWebVitals();
