import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {TinderProvider} from './context'

ReactDOM.render(
  <React.StrictMode>
    <TinderProvider>
    <App />
    </TinderProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

