export default function SummaryItems(props) {
    let { name, age, location, liabilities, mortgage, mortgageInstallment, savings, contributions, interest, years, futureValue } = props;

    return (
        <main>
            <section className="">
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

                </ul>
            </section>

        </main>
    )

}