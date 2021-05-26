import React from "react"
export default function ModalSummaryItems({open, props, onClose}){
    if(!open) return null 
    // let { name, age, location, liabilities, mortgage, mortgageInstallment, savings, contributions, interest, years, futureValue, employment, documents } = props;
    return(
        <>
        <p>Blah</p>
        <button className="modal__button" onClick={onClose}>Close </button> 
        {/* <main>
             <section className="">
                 <p>Blah Blah</p>
                 <ul className="">
                     <li className="summaryList__items"><label>Name:</label>{name}</li>
                     <li className="summaryList__items"><label>Age:</label>{age}</li>
                     <li className="summaryList__items"> <label>Current Location:</label>{location} </li>
                     <li className="summaryList__items"> <label>Total Monthly Liabilities:</label>{liabilities} </li>
                     <li className="summaryList__items"><label>Savings Balance:</label> {savings} </li>
                     <li className="summaryList__items"><label>Monthly Contributions:</label> {contributions} </li>
                     <li className="summaryList__items"><label>Interest Rate:</label> {interest} </li>
                     <li className="summaryList__items"> <label>Time:</label>{years} </li>
                     <li className="summaryList__items"><label>Accumulated Savings:</label> {futureValue} </li>
                     <li className="summaryList__items"><label>Maximum Mortgage:</label> {mortgage} </li>
                     <li className="summaryList__items"> <label>Maximum Monthly Mortgage Installment:</label>{mortgageInstallment} </li>
                     <li className="summaryList__items"> <label>Employment Type</label>{employment} </li>
                     <li className="summaryList__items"> <label>Documents Needed for Mortgage Application</label>{documents} </li>
                 </ul>
              
             </section>
         </main> */}
        </>
    )
     
   



}