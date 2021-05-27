import Axios from 'axios';

import React, { useState } from 'react';
import piggyBank from "../assets/images/piggyBank2.svg"
const API_URL = process.env.NODE_ENV === "production"
  ? 'https://homebuddyapp.herokuapp.com'
  : 'http://localhost:5000';


export default function SavingsCalculator(props) {
    const [savings, setSavings] = useState();
    const [contributions, setContributions] = useState(null);
    const [interest, setInterest] = useState(null);
    const [compounds, setCompounds] = useState(null);
    const [years, setYears] = useState(null);
    const [futureValue, setFutureValue] = useState(null);
    const [getData, setGetData] = useState(null);
  

    const handleSavings = (e) => {
        setSavings(Number(e.target.value))
    }
    const handleContributions = (e) => {
        setContributions(Number(e.target.value))
    }
    const handleInterest = (e) => {
        setInterest(Number(e.target.value))
    }
    const handleCompounds = (e) => {
        setCompounds(Number(e.target.value))
    }
    const handleYears = (e) => {
        setYears(Number(e.target.value))
    }
    const rn = (interest/100)/compounds
 
  

    
    const nt = compounds*years

    
    const interestOnPrincipal = savings*(Math.pow((1+rn),nt))
    
    
    const numerator = ((Math.pow((1+rn),(nt)))-1)/rn
    const numerator2 = numerator*(contributions*12)
    console.log("numerator2",numerator2)


    const rhs= (interestOnPrincipal+numerator2).toFixed(2)
   
    const FutureValue = (e) => {
        setFutureValue(rhs)
    }
 

 
   
    const patchData =(e)=>{
            const editData = {
            savings:savings,
            contributions:contributions,
            interest:interest,
            years:years,
            futureValue:futureValue,
        }
       
        Axios.put(`${API_URL}/api/start/${props.id}`,editData)
      
        .then((response)=>{alert("Saved! Please click NEXT to proceed")

            setGetData("Response",response.editData)})
        
        .catch((error)=>{console.log(error)})

    }
  
   
    return (
                 
        <section className="savings">
            <h2 className="savings__formHeading">
                2. Start Saving</h2>
                <div className ="savings__formWr">
            <form className="savings__form" onSubmit={(e) => e.preventDefault(e)}>
            <div className="savings__cardImgWrapper">
              <img alt="piggy bank illustration" className="savings__cardImg" src={piggyBank}/>
            </div>
       <label className="savings__formLabel">
          <div className="savings__formLabelDiv">
            <p>Current Balance</p>
          </div>
        <input type="number" name="savings balance"onChange={handleSavings} placeholder="Current Balance"></input></label>
       
        
        <label className="savings__formLabel">
          <div className="savings__formLabelDiv">
            <p>Monthly Contributions</p>
          </div>
        <input type="number" name="monthly contributions"onChange={handleContributions} placeholder="Monthly Contributions"></input>
       </label>
        
       <label className="savings__formLabel">
          <div className="savings__formLabelDiv">
            <p>Interest Rate</p>
          </div>
        <input type="number" name="annual interest rate"onChange={handleInterest} placeholder="Monthly Contributions"></input> </label>
        
        
        <label className="savings__formLabel">
          <div className="savings__formLabelDiv">
            <p>Number Of Compounds/Year</p>
          </div>
        <input type="number" name="number of compounds per year" onChange={handleCompounds}placeholder="# Of Times Interest Is Compounded"></input></label>
        <label className="savings__formLabel">
          <div className="savings__formLabelDiv">
            <p>Number of Years</p>
          </div>
        <input type="number" name="number of years"onChange={handleYears} placeholder="Total Years You Plan to Save For"></input> 
        </label>
         
        <p className="savings__result--item"> Future Value of Your Investment:<i className="result">${futureValue}</i>
        </p>
       <div className="savings__formButtons">
        <button className="savings__button" onClick={FutureValue}>Calculate</button>
        
        <button className="savings__button"onClick={patchData}>Save</button>
        </div>
        
        </form>
        </div>
        </section>
        
            
    
    );
}