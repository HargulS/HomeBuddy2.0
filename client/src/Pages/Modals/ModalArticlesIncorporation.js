
export default function ModalArticlesIncorporation({open, children, onClose}){
    if(!open) return null
    return(
        <div className="modal">
            <p>To incorporate a company in BC, the Business Corporations Act states that one or more persons may form a company by entering into an incorporation agreement, establishing articles for the company which sets out its rules for conduct and by electronically filing with the Corporate Registry an Incorporation Application.</p>
            <p>In British Columbia business can be registered online and the information regarding them can be update at <a className="modal__link" href="https://www2.gov.bc.ca/gov/content/employment-business/business/managing-a-business/permits-licences/businesses-incorporated-companies">BC Registries</a></p>

            <p>This information is required to establish legitimacy and the age of the business.</p>
                {children}
            <button className="modal__button" onClick={onClose}>Close</button>
        </div>
        
    )
}