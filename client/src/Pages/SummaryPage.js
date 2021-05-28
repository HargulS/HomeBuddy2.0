import React, { useState } from "react";
import Axios from "axios";
import SummaryItems from "./SummaryItems";
const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://homebuddyapp.herokuapp.com"
    : "http://localhost:5000";

export default function SummaryPage(props) {
  const [summaryData, setSummaryData] = useState();
  const closeClick = () => setSummaryData(false);

  const getSummaryData = (e) => {
    // e.preventDefault()
    Axios.get(`${API_URL}/api/start/${props.id}`)
      .then((response) => {
        setSummaryData(response.data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <main className="summary">
        <section className="summary__listContainer">
          <ul className="summary__listUl">
            {summaryData &&
              summaryData.map((summaryData) => {
                return (
                  <>
                    <SummaryItems
                      key={summaryData.id}
                      id={summaryData.id}
                      name={summaryData.name}
                      age={summaryData.age}
                      location={summaryData.location}
                      liabilities={summaryData.liabilities}
                      mortgage={summaryData.mortgage}
                      mortgageInstallment={summaryData.mortgageInstallment}
                      savings={summaryData.savings}
                      contributions={summaryData.contributions}
                      interest={summaryData.interest}
                      years={summaryData.years}
                      futureValue={summaryData.futureValue}
                      employment={summaryData.employment}
                      documents={summaryData.documents}
                    />
                  </>
                );
              })}

            <div className="summary__btnSm">
              <button
                className="summary__shwBtn"
                onClick={() => {
                  getSummaryData();
                }}
              >
                Summary
              </button>

              {summaryData ? (
                <button onClick={closeClick} className="summary__clsBtn">
                  Close
                </button>
              ) : null}
            </div>
          </ul>
        </section>
      </main>
    </>
  );
}
