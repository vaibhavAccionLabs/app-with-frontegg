import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { FronteggProvider } from '@frontegg/react';
import { createBrowserHistory } from "history";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const contextOptions = {
  baseUrl: 'https://app-qukfqptmquso.frontegg.com',
  clientId: '457f6149-84c9-4094-894e-a5d1724dd062'
};
const history = createBrowserHistory();
// // Replace this with your app logo 👇
const headerImage = 'https://assets.frontegg.com/public-frontegg-assets/acme-logo.svg';

const APPINIT = () => {

  return (<Router history={history}>
    <FronteggProvider history={history} contextOptions={contextOptions} headerImage={headerImage} hostedLoginBox={true} >
      <App />
    </FronteggProvider>
  </Router>)
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <APPINIT />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/C hostedLoginBox={true}RA-vitals
reportWebVitals();
