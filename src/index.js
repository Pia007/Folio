import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min';
import '../node_modules/bootswatch/dist/quartz/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import 'react-toastify/dist/ReactToastify.css';
import 'typeface-muli';
import 'typeface-roboto';
import App from './App';


ReactDOM.render(
  <React.Fragment>
      <App /> 
  </React.Fragment>,
  document.getElementById('root')

);
