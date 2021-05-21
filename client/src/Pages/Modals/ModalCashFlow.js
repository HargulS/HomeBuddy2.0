export default function ModalCashFlow({open, children, onClose}){
    if(!open) return null
    return(
        <div className="modal">
            <p>
            A cash flow statement is a financial statement that summarizes the amount of cash and cash equivalents entering and leaving a company. The cash flow statement measures how well a company manages its cash position, meaning how well the company generates cash to pay its debt obligations and fund its operating expenses.Source:<a className="modal__link" href="https://www.investopedia.com/investing/what-is-a-cash-flow-statement/">Investopedia</a>
            </p>
            <p>Self-employed individuals who have incorporated their business maybe asked for cash flow statement in order to determine retained earning of the business</p>
                {children}
            <button className="modal__button" onClick={onClose}>Close</button>
        </div>
        
    )
}