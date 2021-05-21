import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";

import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <section className="app">
       
    <App/>
   
    </section>

    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


