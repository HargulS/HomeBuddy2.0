export default function SummaryItems(props) {
    let { name, age, location, liabilities, mortgage, mortgageInstallment, savings, contributions, interest, years, futureValue, employment, documents } = props;
    return (
            <section className="summary__summaryItems">
                <ul className="summary__list"> 
                <h2 className="summary__heading">Session Summary</h2>
                    <li className="summary__items"><h3 className="summary__iNm">Name:</h3>{name}</li>
                    <li className="summary__items"><h3 className="summary__iNm">Age:</h3>{age}</li>
                    <li className="summary__items"><h3 className="summary__iNm"> Current Location:</h3>{location} </li>
                    <li className="summary__items"> <h3 className="summary__iNm">Total Monthly Liabilities:</h3>{liabilities} </li>
                    <li className="summary__items"><h3 className="summary__iNm">Savings Balance: </h3>{savings} </li>
                    <li className="summary__items"><h3 className="summary__iNm">Monthly Contributions:</h3> {contributions} </li>
                    <li className="summary__items"><h3 className="summary__iNm">Interest Rate:</h3> {interest} </li>
                    <li className="summary__items"> <h3 className="summary__iNm">Time:</h3>{years} </li>
                    <li className="summary__items"><h3 className="summary__iNm">Accumulated Savings: </h3>{futureValue} </li>
                    <li className="summary__items"><h3 className="summary__iNm">Maximum Mortgage:</h3> {mortgage} </li>
                    <li className="summary__items"> <h3 className="summary__iNm">Maximum Monthly Mortgage Installment:</h3>{mortgageInstallment} </li>
                    <li className="summary__items"><h3 className="summary__iNm">Employment Type:</h3> {employment} </li>
                    <li className="summary__items"><h3 className="summary__iNm">Documents:</h3> {documents} </li>
                </ul>
            </section>
    )
}