import React from 'react';
import ReactDOM from 'react-dom';
//import '../node_modules/bootswatch/dist/[vapor]/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route } from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route  path="/" component={App} /> 
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


