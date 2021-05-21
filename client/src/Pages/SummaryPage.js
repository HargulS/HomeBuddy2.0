import React, {useState} from 'react';
import Axios from 'axios';
import SummaryItems from './SummaryItems'
const API_URL = process.env.NODE_ENV === "production"
  ? 'https://homebuddyapp.herokuapp.com'
  : 'http://localhost:5000';


export default function SummaryPage(props){
    const [summaryData, setSummaryData]=useState();
  const  getSummaryData=(e)=>{
        e.preventDefault()
        Axios.get(`${API_URL}/api/start/${props.id}`)
        .then((response)=>{
            setSummaryData(response.data)})
        .catch((error)=> console.log(error));
    }
  
    return(
        <main className="summary">
        <section className="summary__listContainer">
        <h4>Click the button to get session summary</h4>
            <ul className="summary__list">
                
                {summaryData&&summaryData.map((summaryData)=>{
                    return(
                       
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
                    />
                    )
                                        
                }
                )}
                <button onClick={getSummaryData}>Session Summary</button>
            </ul>
        </section>
        {/* <section className="summary__resourcesListContainer">
                <h4>Recommended websites to get you started on your property hunt</h4>
                <ul>
            <li className="summary__resourcesListItems"><h5>BC Assessment:</h5>Independent property assessment agency governed by the government of BC. Its mandate is to provide property assessment values for property owners in the province.This information is primarily used in the calculation of property tax. It also provides sales history of properties. Knowing wether the selling price is above or below the assessed value is critical piece of information.<a className="modal__link" href="https://www.bcassessment.ca/">BC Assessment</a> </li>
            <li className="summaryResourcesList__items"><h5>Zillow</h5>Is an dominant American online real estate marketplace company that now hosts Canadian properties too. <a className="modal__link" href='https://www.zillow.com/homes/Vancouver,-BC_rb/'>Zillow</a> </li>
            <li className="summaryResourcesList__items"><h5>Realtor</h5>Realtor.ca roughly hosts 25% of all the properties for sale in Canada.<a className="modal__link" href='https://www.realtor.ca/en'>Realtor</a> </li>
            <li className="summaryResourcesList__items"><h5>Rew</h5>Rew.ca is another good real estate market place. 
            <a className="modal__link" href='https://www.rew.ca/'>Rew</a></li>
            </ul>
            </section> */}
        </main>

    )
}