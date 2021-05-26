import ParticleBackground from "./Particles/ParticlesBackground"
import HumbleVersion from "./HumbleVersion"
import SavingsCalculator from "./SavingsCalculator"
import DocumentsInterestRates from "./DocumentsInterestRates"
import SummaryPage from "./SummaryPage"
import DisplaySummary from "./DisplaySummary"
import Swiper from "./Swiper/Swiper"

import React, { useState } from "react";


export default function Homepage(props) {
  const [id, setId] =useState()
  return (
   

    <section className="homepage">
      <container className="homepage__heroBanner">
     <div className="homepage__swiper">
          <Swiper/>
          </div>
        <div className="homepage__particles">
          <ParticleBackground />
        </div>
      
      </container>
      <container className="homepage__cardsWrapper">

        <div className="homepage__cardsBar">
          <p className="homepage__cardsBarText">Let's Get You Started</p>
        </div>
              <div className="homepage__cardsAll">
          <div className="homepage__cards">
            <div className="homepage__cardItems">
              <HumbleVersion id={setId} />
            </div>
           

          </div>

          <div className="homepage__cards">
            <div className="homepage__cardItems">
              <SavingsCalculator id={id} />
            </div>
           

          </div>
          <div className="homepage__cards">
            <div className="homepage__cardItems">
              <DocumentsInterestRates id={id} />
            </div>
          </div>
          <div className="homepage__cards homepage__cards--summary">
            <div className="homepage__cardItems">
            <SummaryPage id={id}/>
            {/* <DisplaySummary id={id}/> */}
       
            </div>
          </div>
          <div className="homepage__cardsSmWr"></div>

        </div>
      </container>
  
   
    </section>
  );
}
