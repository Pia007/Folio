import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootswatch/dist/quartz/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min';
import './index.css';
import '../node_modules/bootswatch/dist/quartz/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min';
import 'font-awesome/css/font-awesome.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route  path="/" component={App} /> 
    </Router>
  </React.StrictMode>,
  document.getElementById('root')

);
