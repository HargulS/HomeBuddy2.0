import { Link } from "react-router-dom";
import calculator from "../assets/images/calculator.svg"
import ParticleBackground from "./Particles/ParticlesBackground"
import HumbleVersion from "./HumbleVersion"
import SavingsCalculator from "./SavingsCalculator"
import DocumentsInterestRates from "./DocumentsInterestRates"
import SummaryPage from "./SummaryPage"
import Swiper from "./Swiper/Swiper"

export default function Homepage() {
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
              <HumbleVersion />
            </div>
           

          </div>

          <div className="homepage__cards">
            <div className="homepage__cardItems">
              <SavingsCalculator />
            </div>
           

          </div>
          <div className="homepage__cards">
            <div className="homepage__cardItems">
              <DocumentsInterestRates />
            </div>
          </div>
        </div>
      </container>
      <container className="homepage__summary">
        <SummaryPage/>
      </container>
    </section>
  );
}
