import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss'

ReactDOM.render(
  //检查代码错误
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


