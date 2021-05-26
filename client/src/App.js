import React from 'react';
import "./style/App.css";
import { Switch, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import NavBar from "./Pages/NavBar";
import Footer from "./Pages/Footer";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab,faTwitterSquare,faHouzz,faFacebookSquare,faInstagramSquare,faLinkedin,faSourcetree} from '@fortawesome/free-brands-svg-icons'
import { faHome,faCommentsDollar,faBars,faSignInAlt} from '@fortawesome/free-solid-svg-icons'


library.add(fab,faHome,faSignInAlt,faBars,faSourcetree,faHouzz,faCommentsDollar,faTwitterSquare,faFacebookSquare,faInstagramSquare,faLinkedin)
export default function App() {
 
  
    return (
      <>
      <NavBar />
      <main className="app-container"> 
               <Switch>
          <Route path="/" exact>
            <Homepage />
          </Route> 
          </Switch>

      </main>
      <Footer />
      </>
    );
  }


