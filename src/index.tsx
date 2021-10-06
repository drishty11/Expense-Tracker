import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { SpeechProvider } from '@speechly/react-client';
import { Provider } from './Context/Context';

ReactDOM.render(
  <SpeechProvider appId="8786b760-90c8-4bb1-8d25-0967a0e4ddf5" language="en-US">
      <Provider>
        <App />
      </Provider>
  </SpeechProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
