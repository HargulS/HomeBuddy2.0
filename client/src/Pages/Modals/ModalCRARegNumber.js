
export default function ModalCRARegNumber({open, children, onClose}){
    if(!open) return null
    return(
        <div className="modal">
            CRA Reg MODAL
                {children}
                <div className="modal__buttonDiv">
            <button className="modal__button" onClick={onClose}>Close</button>
            </div>
        </div>
        
    )
}