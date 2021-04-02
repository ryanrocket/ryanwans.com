import React from 'react';
import ReactDOM from 'react-dom';
import AppStyles from './App.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GeistProvider, CssBaseline } from '@geist-ui/react'
import { BrowserRouter } from 'react-router-dom';
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

Sentry.init({
  dsn: "https://486f479830564061a5260face7f23cd0@o563831.ingest.sentry.io/5704204",
  integrations: [new Integrations.BrowserTracing()],
  tracesSampleRate: 0.7,
  release: 'main.5.0.3@vercel'
});

ReactDOM.render(
  <BrowserRouter>
    <GeistProvider style={AppStyles}>
      <CssBaseline />
      <App />
    </GeistProvider>
  </BrowserRouter>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals((a) => {
  window.vitals = window.vitals || {};
  window.vitals[a.name] = a;
});
