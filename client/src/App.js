import React from 'react';
import "./style/App.css";
import { Switch, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import NavBar from "./Pages/NavBar";
import Footer from "./Pages/Footer";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faTwitterSquare,  faFacebookSquare, faInstagramSquare, faLinkedin, faSourcetree } from '@fortawesome/free-brands-svg-icons'
import {  faBars, faSignInAlt,faUsers } from '@fortawesome/free-solid-svg-icons'


library.add(fab,faUsers, faSignInAlt, faBars, faSourcetree,  faTwitterSquare, faFacebookSquare, faInstagramSquare, faLinkedin)
export default function App() {


  return (
    <>
      <NavBar />
      <container className="app-container">
        <Switch>
          <Route path="/" exact>
            <Homepage />
          </Route>
        </Switch>
      </container>
      <Footer />
    </>
  );
}


