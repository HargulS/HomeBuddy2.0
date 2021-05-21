
export default function ModalPaycheck({ open, children, onClose }) {
    if (!open) return null
    return (
        <div className="modal">
           <p>Year to Date (YTD) refers to a period of time beginning the first day of the current calendar year or fiscal year up to the current date. </p>
           <p> YTD earnings refers to the amount of money an individual has earned from Jan 1 to the current date. Source: <a className="modal__link" href="https://www.investopedia.com/terms/y/ytd.asp">Investopedia</a></p>
           
            {children}
            <button className="modal__button" onClick={onClose}>Close</button>
        </div>

    )
}