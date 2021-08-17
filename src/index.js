import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Router } from "react-router-dom";
import createHistory from "history/createBrowserHistory";


ReactDOM.render(
  <Router history={createHistory()} forceRefresh={true} >
    <App />
  </Router>,
  document.getElementById('root')
);