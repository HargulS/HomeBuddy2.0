import SampleNOA from '../../assets/images/SampleNOA.webp';

export default function ModalNOA({open, children, onClose}){
if(!open) return null
return(
    <div className="modal">
        <p>
        Your notice of assessment (NOA) is an evaluation of your tax return that the Canada Revenue Agency sends you every year after you file your tax return. 
        You can access your NOA online from Canada Revenue Agency(CRA).
        For more information visit: <a className="modal__link" href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/notice-assessment-understand.html">Canada Revenue Agency</a>
        </p>
        <img alt="what NOA looks like" className="modal__pic"src={SampleNOA}/>
    {children}
    <button className="modal__button" onClick={onClose}>Close</button>
    </div>
)
}