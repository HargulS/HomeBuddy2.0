import React, { useState } from "react";
import Modal from "./Modals/ModalNOA";
import ModalPaycheck from "./Modals/ModalPaycheck";
import ModalT1Gen from "./Modals/ModalT1Gen";
import ModalArticlesIncorporation from "./Modals/ModalArticlesIncorporation";
import ModalCashFlow from "./Modals/ModalCashFlow";
import ModalCRARegNumber from "./Modals/ModalCRARegNumber";
import doneChecking from "../assets/images/doneChecking2.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import Axios from "axios";
const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://homebuddyapp.herokuapp.com"
    : "http://localhost:5000";

export default function DocumentsInterestRates(props) {
  const [employment, setEmployment] = useState("Salaried".toUpperCase());
  const [documents, setDocuments] = useState(
    "1). Annual Income Documents( to confirm consistency of income) Two years most recentNotice of Assessment or Year end paystubs of previous two years mentioningYear To Date(YTD)amount 2). Current Income(To confirm your employment status)  Three-four most recent paychecks or Direct Deposit history of last 2-3 months or Letter Of Employment(no older than 90 days is preferable)"
  );
  const [isOpen, setIsOpen] = useState(null);
  const [isOpenPaycheck, setIsOpenPaycheck] = useState(null);
  const [isOpenT1Gen, setIsOpenT1Gen] = useState(null);
  const [isOpenArticles, setIsOpenArticles] = useState(null);
  const [isOpenCashFlow, setIsOpenCashFlow] = useState(null);
  const [isOpenCRAReg, setIsOpenCRAReg] = useState(null);
  const handleEmployment = (e) => {
    setEmployment(e.target.value.toUpperCase());
  };
  const docS = (
    <ul className="docsRates__listSalaried">
      <h3>Documents Needed:</h3>
      <li className="docsRates__listItems">
        1. Annual Income Documents( to confirm consistency of income)
      </li>
      <li>
        Two years most recent
        <span className="info" onClick={() => setIsOpen(true)}>
          Notice of Assessment
          <sup className="sup">
            <FontAwesomeIcon icon={faInfoCircle} />
          </sup>
        </span>
      </li>
      <li>or</li>
      <li>
        Year end paystubs of previous two years mentioning
        <span className="info" href="#" onClick={() => setIsOpenPaycheck(true)}>
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
        Three-four most recent paychecks or Direct Deposit history of last 2-3
        months
      </li>
      <li> or</li>
      <li>Letter Of Employment(no older than 90 days is preferable)</li>
    </ul>
  );
  const docSE = (
    <ul className="docsRates__listSelfEmp">
      <h3>Documents Needed:</h3>
      <li>
        1.Two years most recent
        <span className="info" onClick={() => setIsOpen(true)}>
          Notice of Assessment
          <sup className="sup">
            <FontAwesomeIcon icon={faInfoCircle} />
          </sup>
        </span>
      </li>
      <li>
        2. Complete
        <span className="info" onClick={() => setIsOpenT1Gen(true)}>
          T1 General
          <sup className="sup">
            <FontAwesomeIcon icon={faInfoCircle} />
          </sup>
        </span>
        of last 2 Tax years
      </li>
      <li>
        3. Accountant prepared
        <span className="info" onClick={() => setIsOpenCashFlow(true)}>
          Cash Flow Statements
          <sup className="sup">
            <FontAwesomeIcon icon={faInfoCircle} />
          </sup>
        </span>
      </li>
      <li>
        4.
        <span className="info" onClick={() => setIsOpenArticles(true)}>
          Articles of Incorporation
          <sup className="sup">
            <FontAwesomeIcon icon={faInfoCircle} />
          </sup>
        </span>
        (needed only if the business is incorporated)
      </li>
    </ul>
  );
  const handleDocuments = (e) => {
    if (employment === "Salaried".toUpperCase()) {
      setDocuments(
        "1).Two years most recent Notice of Assessment 2). Complete T1 General of last 2 tax years 3). Accountant prepared Cash Flow Statements 4). Articles of Incorporation(needed only if the business is incorporated)"
      );
    } else {
      setDocuments(
        "1). Annual Income Documents( to confirm consistency of income) Two years most recentNotice of Assessment or Year end paystubs of previous two years mentioningYear To Date(YTD)amount 2). Current Income(To confirm your employment status)  Three-four most recent paychecks or Direct Deposit history of last 2-3 months or Letter Of Employment(no older than 90 days is preferable)"
      );
    }
  };
  const patchSummary = (e) => {
    const editData = {
      employment: employment,
      documents: documents,
    };
    console.log("editDataDocs", editData);
    Axios.patch(`${API_URL}/api/start/${props.id}`, editData)
      .then((response) => {
        alert("Saved! Please click ok to continue");
        const data = response.editData;
        console.log("DOCSDATA", data);
      })
      .catch((error) => {
        console.log(error);
      });
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
        <h2 className="docsRates__formHeading">
          3. Documents For Mortgage Application
        </h2>
        <form className="docsRates__form">
          <div className="docsRates__cardImgWrapper">
            <img
              alt="calculator illustration"
              className="docsRates__cardImg"
              src={doneChecking}
            />
          </div>
          <div className="docsRates__formHeading2">
            <h2 className="docsRates__formHeading-text">Choose A Category:</h2>
          </div>
          <label>
            Salaried
            <input
              type="radio"
              name="employmentType"
              value="Salaried"
              defaultChecked={true}
              onClick={handleDocuments}
              onChange={handleEmployment}
            />
          </label>
          <label>
            Self-employed
            <input
              type="radio"
              name="employmentType"
              value="Self-Employed"
              onClick={handleDocuments}
              onChange={handleEmployment}
            />
          </label>
          <div className="docsRates__ternaryWrapper">
            {employment === "Salaried".toUpperCase()
              ? docS
              : employment === "Self-Employed".toUpperCase()
              ? docSE
              : null}
          </div>
          <div className="docsRates__btnWr">
            <button
              className="docsRates__button"
              onClick={(e) => {
                e.preventDefault();
                patchSummary();
              }}
            >
              Save
            </button>
          </div>
        </form>
      </main>
    </>
  );
}
