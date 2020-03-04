import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App/App.js';

// import dla "translations"
import { LocalizeProvider } from "react-localize-redux";

// opakować cała aplikację <LocalizeProvider>
const jsx = (
    <LocalizeProvider>
          <App />
    </LocalizeProvider>
);

ReactDOM.render(jsx, document.getElementById('root'));
