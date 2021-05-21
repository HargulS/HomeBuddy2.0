import React, { useState } from "react";
import Modal from "./Modals/ModalNOA";
import ModalPaycheck from "./Modals/ModalPaycheck";
import ModalT1Gen from "./Modals/ModalT1Gen";
import ModalArticlesIncorporation from "./Modals/ModalArticlesIncorporation";
import ModalCashFlow from "./Modals/ModalCashFlow";
import ModalCRARegNumber from "./Modals/ModalCRARegNumber";
import doneChecking from "../assets/images/doneChecking2.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

export default function DocumentsInterestRates() {
  const [employment, setEmployment] = useState("salaried");
  const [isOpen, setIsOpen] = useState(null);
  const [isOpenPaycheck, setIsOpenPaycheck] = useState(null);
  const [isOpenT1Gen, setIsOpenT1Gen] = useState(null);
  const [isOpenArticles, setIsOpenArticles] = useState(null);
  const [isOpenCashFlow, setIsOpenCashFlow] = useState(null);
  const [isOpenCRAReg, setIsOpenCRAReg] = useState(null);

  const handleEmployment = (e) => {
    setEmployment(e.target.value.toLowerCase());
  };


 
  return (
    <>
    
      <Modal open={isOpen} onClose={() => setIsOpen(false)}></Modal>

      <ModalT1Gen
        open={isOpenT1Gen}
        onClose={() => setIsOpenT1Gen(false)}
      ></ModalT1Gen>

      <ModalPaycheck
        open={isOpenPaycheck}
        onClose={() => setIsOpenPaycheck(false)}
      ></ModalPaycheck>

      <ModalArticlesIncorporation
        open={isOpenArticles}
        onClose={() => setIsOpenArticles(false)}
      ></ModalArticlesIncorporation>

      <ModalCashFlow
        open={isOpenCashFlow}
        onClose={() => setIsOpenCashFlow(false)}
      ></ModalCashFlow>

      <ModalCRARegNumber
        open={isOpenCRAReg}
        onClose={() => setIsOpenCRAReg(false)}
      ></ModalCRARegNumber>
      <main className="docsRates">
    <h2 className="docsRates__formHeading">3. Documents For Mortgage Application</h2> 
   
        <form className="docsRates__form">
        <div className="docsRates__cardImgWrapper">
              <img alt="calculator illustration" className="docsRates__cardImg" src={doneChecking}/>
            </div>
            <div className="docsRates__formHeading2">
        <h2 className="docsRates__formHeading-text">Choose A Category:</h2>
      </div>
          <label>Salaried
            <input
            type="radio"
            name="employmentType"
            placeholder="Salaried or Self-Employed"
           value="salaried"
           defaultChecked={true}
            onClick={handleEmployment}
          />
          </label>
          <label>Self-employed
            <input
            type="radio"
            name="employmentType"
            placeholder="Salaried or Self-Employed"
            value="self-employed"
            onClick={handleEmployment} 
          />
          </label>
        
        </form>
      
      <div className="docsRates__ternaryWrapper">
      
              {employment === "Salaried".toLowerCase() ? (
                <ul className="docsRates__listSalaried">
                    <h3>Documents Needed:</h3>
                  <li className="docsRates__listItems">
                    1. Annual Income Documents( to confirm consistency of income)
                  </li>
                  <li>
                    Two years most recent
                    <span className="info" onClick={() => setIsOpen(true)}>
                      {" "}
                      Notice of Assessment{" "}
                      <sup className="sup">
                        <FontAwesomeIcon icon={faInfoCircle} />{" "}
                      </sup>
                    </span>
                  </li>
                  <li>or

                  </li>
                  <li>
                    Year end paystubs of previous two years mentioning{" "}
                    <span
                      className="info"
                      href="#"
                      onClick={() => setIsOpenPaycheck(true)}
                    >
                      Year To Date(YTD)
                      <sup className="sup">
                        <FontAwesomeIcon icon={faInfoCircle} />
                      </sup>
                    </span>
                    amount
                  </li>
                  <li className="tips"></li>
                  <li>2. Current Income(To confirm your employment status)</li>
                  <li>
                    {" "}
                    Three-four most recent paychecks or Direct Deposit
                    history of last 2-3 months{" "}
                  </li>
                  <li> or</li>
                  <li>
                    {" "}
                    Letter Of Employment(no older than 90 days is preferable){" "}
                  </li>
                </ul>
              ) : employment === "Self Employed".toLowerCase() ||
                employment === "Self-Employed".toLowerCase() ? (
                  
                <ul className="docsRates__listSelfEmp">
                  <h3>Documents Needed:</h3>
                  <li>
                    1.Two years most recent
                    <span className="info" onClick={() => setIsOpen(true)}>
                      {" "}
                      Notice of Assessment
                      <sup className="sup">
                        <FontAwesomeIcon icon={faInfoCircle} />
                      </sup>
                    </span>
                  </li>
                  <li>
                    2. Complete{" "}
                    <span className="info" onClick={() => setIsOpenT1Gen(true)}>
                      {" "}
                      T1 General
                      <sup className="sup">
                        <FontAwesomeIcon icon={faInfoCircle} />
                      </sup>
                    </span>{" "}
                    of last 2 Tax years
                  </li>
                  <li>
                    {" "}
                    3. Accountant prepared{" "}
                    <span
                      className="info"
                      onClick={() => setIsOpenCashFlow(true)}
                    >
                      {" "}
                      Cash Flow Statements
                      <sup className="sup">
                        <FontAwesomeIcon icon={faInfoCircle} />
                      </sup>
                    </span>
                  </li>
                  <li>
                    4.{" "}
                    <span
                      className="info"
                      onClick={() => setIsOpenArticles(true)}
                    >
                      Articles of Incorporation
                      <sup className="sup">
                        <FontAwesomeIcon icon={faInfoCircle} />
                      </sup>
                    </span>{" "}
                    (needed only if the business is incorporated)
                  </li>
                </ul>
              ) : null}
              {/* <div className="nextPreviousIcons-documents">
                <Link to="/savingscalculator">
                  <img className="nextPreviousIcons__items" src={ArrowBack} />
                </Link>
                <Link to="/summary">
                  <img
                    className="nextPreviousIcons__items"
                    src={ArrowForward}
                  />
                </Link>
              </div> */}
            </div>
        
       
      </main>
    </>
  );
}
