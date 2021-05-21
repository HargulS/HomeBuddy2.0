import React, { useState } from "react";
import Axios from "axios";
import Modal from "./Modals/ModalNOA";
import { Link } from "react-router-dom";
import ArrowBack from "../assets/icons/ArrowBack.svg";
import ArrowForward from "../assets/icons/ArrowForward.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import calculator from "../assets/images/calculator2.svg";

const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://homebuddy-app.herokuapp.com"
    : "http://localhost:5000";

export default function HumbleVersion(props) {
  const [name, setName] = useState(null);
  const [age, setAge] = useState(null);
  const [location, SetLocation] = useState(null);
  const [income, setIncome] = useState(null);
  const [liabilities, setLiabilities] = useState(null);
  const [propertyTax, setPropertyTax] = useState(null);
  const [heatingCost, setHeatingCost] = useState(null);
  const [strata, setStrata] = useState(null);
  const [result, setResult] = useState(null);
  const [TDS, setTDS] = useState(null);
  const [payment, setPayment] = useState(null);
  const [isOpen, setIsOpen] = useState(null);

  const totalExpenses = (liabilities + propertyTax + heatingCost + strata) * 12;
  console.log("expenses", totalExpenses);

  const mtgPaymentMonthly = (0.44 * income - totalExpenses) / 12;
  console.log("mtgpayment monthly", mtgPaymentMonthly);

  const mtgPaymentAnnual = 0.44 * income - totalExpenses;
  console.log("mtg Annual", mtgPaymentAnnual);

  const nt = 12 * 25;
  const rn = 0.0479 / 12;
  const mortgage =
    (mtgPaymentMonthly * (Math.pow(1 + rn, nt) - 1)) /
    (rn * Math.pow(1 + rn, nt));
  console.log(mortgage);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleAge = (e) => {
    setAge(Number(e.target.value));
  };

  const handleLocation = (e) => {
    SetLocation(e.target.value);
  };

  const handleIncome = (e) => {
    setIncome(Number(e.target.value));
  };
  const handleLiabilities = (e) => {
    setLiabilities(Number(e.target.value));
  };
  const handlePropertyTax = (e) => {
    setPropertyTax(Number(e.target.value));
  };
  const handleHeatingCost = (e) => {
    setHeatingCost(Number(e.target.value));
  };
  const handleStrata = (e) => {
    setStrata(Number(e.target.value));
  };
  const CalculateTDS = (e) => {
    const mtgPaymentMonthly = (0.44 * income - totalExpenses) / 12;
    const totalAnnualExpenses =
      (liabilities + propertyTax + heatingCost + strata + mtgPaymentMonthly) *
      12;
    setTDS((totalAnnualExpenses / income) * 100);
  };
  const mortgageAmt = (e) => {
    const totalExpenses =
      (liabilities + propertyTax + heatingCost + strata) * 12;
    const mtgPaymentMonthly = (0.44 * income - totalExpenses) / 12;
    const nt = 12 * 25;
    const rn = 0.0479 / 12;
    setResult(
      (
        (mtgPaymentMonthly * (Math.pow(1 + rn, nt) - 1)) /
        (rn * Math.pow(1 + rn, nt))
      ).toFixed(2)
    );
  };
  const mortgagePayment = (e) => {
    const totalExpenses =
      (liabilities + propertyTax + heatingCost + strata) * 12;
    setPayment(((0.44 * income - totalExpenses) / 12).toFixed(2));
  };

  const totalAnnualExpenses = mtgPaymentAnnual + totalExpenses;
  console.log("total annual expenses", totalAnnualExpenses);
  const ratio = (totalAnnualExpenses / income) * 100;

  const captureData = {
    name: name,
    age: age,
    location: location,
    income: income,
    liabilities: liabilities,
    mortgage: result,
    mortgageInstallment: payment,
  };
  console.log("CaptureData", captureData);
  const postData = (e) => {
    Axios.post(`${API_URL}/api/start`, captureData)

      .then((response) => {
        alert("Saved! Please click NEXT to proceed");
        props.id(response.data.id);
      })

      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <section className="mtgCalculator">
      <h2 className="mtgCalculator__formHeading">
        1.Maximum Mortgage You can Afford
      </h2>

      <form
        className="mtgCalculator__form"
        onSubmit={(e) => e.preventDefault(e)}
      >
        <div className="mtgCalculator__cardImgWrapper">
          <img className="mtgCalculator__cardImg" src={calculator} />
        </div>

        <label className="mtgCalculator__formLabel">
          <div className="mtgCalculator__formLabelDiv">
            <p>Name</p>
          </div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleName}
          />
        </label>
        <label className="mtgCalculator__formLabel">
          <div className="mtgCalculator__formLabelDiv">
            <p>Age</p>
          </div>
          <input
            type="number"
            name="age"
            placeholder="Age"
            onChange={handleAge}
          />
        </label>
        <label className="mtgCalculator__formLabel">
          <div className="mtgCalculator__formLabelDiv">
            <p>Location</p>
          </div>
          <input
            type="text"
            name="location"
            placeholder="Location"
            onChange={handleLocation}
          />
        </label>
        <label className="mtgCalculator__formLabel">
          <div className="mtgCalculator__formLabelDiv">
            <p> Annual Income</p>
          </div>
          <input
            type="number"
            name="income"
            placeholder="Annual Income"
            onChange={handleIncome}
          ></input>
        </label>

        <label className="mtgCalculator__formLabel">
          <div className="mtgCalculator__formLabelDiv">
            <p>Monthly Liabilities</p>
          </div>
          <input
            type="number"
            name="expenses"
            placeholder="Monthly Liabilities"
            placeholder="Loan,Credit Cards,etc."
            onChange={handleLiabilities}
          ></input>
        </label>

        <label className="mtgCalculator__formLabel">
          <div className="mtgCalculator__formLabelDiv">
            <p>Monthly Cost-New Property</p>
          </div>
          <input
            type="number"
            name="property taxes"
            placeholder="Property Taxes"
            onChange={handlePropertyTax}
          ></input>
        </label>

        <label className="mtgCalculator__formLabel mtgCalculator__formLabel-ml">
          <input
            type="number"
            name="Heating Cost"
            placeholder="Heating Costs"
            onChange={handleHeatingCost}
          ></input>
        </label>

        <label className="mtgCalculator__formLabel mtgCalculator__formLabel-ml-l">
          <input
            type="number"
            name="strata"
            placeholder="1/2Monthly Strata Fees"
            onChange={handleStrata}
          ></input>
        </label>

        <div className="mtgCalculator__formButtons">
          <button
            className="mtgCalculator__button"
            onClick={() => {
              mortgagePayment();
              mortgageAmt();
              CalculateTDS();
            }}
          >
            Calculate
          </button>
          <button className="mtgCalculator__button" onClick={postData}>
            Save
          </button>
        </div>

        <div className="mtgCalculator__resultWrapper">
          {payment >= 0 ? (
            <div className="mtgCalculator__result--item">
              <p>
                Total Mortgage You Can Afford:{" "}
                <i className="result"> ${result}</i>
              </p>
              <p>
                You can afford monthly payments of:{" "}
                <i className="result"> ${payment}</i>
              </p>
            </div>
          ) : (
            <div>Income to Debt ratio is too high!</div>
          )}
        </div>
      </form>
    </section>
  );
}
