import React, { useState } from 'react';
import "./style/App.css";
import { Switch, Route } from "react-router-dom";
import HumbleVersion from "./Pages/HumbleVersion";
import Homepage from "./Pages/Homepage";
import SavingsCalculator from "./Pages/SavingsCalculator";
import DocumentsInterestRates from "./Pages/DocumentsInterestRates";
import NavBar from "./Pages/NavBar";
import Footer from "./Pages/Footer";
import SummaryPage from "./Pages/SummaryPage";
import { library } from '@fortawesome/fontawesome-svg-core'

import { fab,faTwitterSquare,faHouzz,faFacebookSquare,faInstagramSquare,faLinkedin,faSourcetree} from '@fortawesome/free-brands-svg-icons'

import { faHome,faCommentsDollar,faBars,faSignInAlt} from '@fortawesome/free-solid-svg-icons'

import ParticleBackground from "./Pages/Particles/ParticlesBackground"
library.add(fab,faHome,faSignInAlt,faBars,faSourcetree,faHouzz,faCommentsDollar,faTwitterSquare,faFacebookSquare,faInstagramSquare,faLinkedin)
export default function App() {
 const [id, setId] =useState(null);
  
    return (
      <>
      <NavBar />
      <main className="app-container"> 
               <Switch>
          <Route path="/homepage" exact>
          <Homepage />
          </Route>
          <Route path="/" exact>
            <Homepage />
          </Route>
        
          <Route path="/mortgageaffordability" exact>
            <HumbleVersion id={setId}/>
          </Route>
          <Route path="/documentsandinterestrates" exact>
            <DocumentsInterestRates />
          </Route>
          <Route path="/savingscalculator" exact>
            <SavingsCalculator id={id} />
          </Route>
           <Route path="/summary" exact>
            <SummaryPage id={id} />
          </Route>
        </Switch>
      </main>
      <Footer />
      </>
    );
  }


