import React from 'react';
import ReactGA from 'react-ga';
import { hydrate, render } from 'react-dom';
import App from './App';

ReactGA.initialize('G-MZL4V1N70Z'); // add your tracking id here.
ReactGA.pageview(window.location.pathname + window.location.search);

// See https://reactjs.org/docs/strict-mode.html
const StrictApp = () => (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const rootElement = document.getElementById('root');

// hydrate is required by react-snap.
if (rootElement.hasChildNodes()) {
  hydrate(<StrictApp />, rootElement);
} else {
  render(<StrictApp />, rootElement);
}
