
export default function ModalT1Gen({open, children, onClose}){
    if(!open) return null
    return(
        <div className="modal">
            <p>The T1 General Form is also called the Income Tax and Benefit Return. The form is a summary of all the other forms you complete for your income taxes. It contains information pretaining to your total income, your net income, your tax payable, your deductions, your non-refundable credits, and more. </p>

            <p>T1 General may be required for individuals who are "salaried" but have other sources of income such as commissions, dividends, etc </p>

            <p>You can find a copy of your submitted T1 General if you have registered for a CRA account:<a className="modal__link" href="https://www.canada.ca/en/revenue-agency/services/e-services/e-services-individuals/account-individuals/about-account.html">Canada Revenue Agency My Account</a></p>
                {children}
            <button className="modal__button" onClick={onClose}>Close</button>
        </div>
        
    )
}