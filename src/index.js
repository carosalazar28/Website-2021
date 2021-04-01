import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { FormspreeProvider } from '@formspree/react';
import theme from './assets/theme';
import { ThemeProvider } from 'styled-components';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <FormspreeProvider project="1621591400397143328">
        <App />
      </FormspreeProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
