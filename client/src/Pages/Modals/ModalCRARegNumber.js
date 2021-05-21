
export default function ModalCRARegNumber({open, children, onClose}){
    if(!open) return null
    return(
        <div className="modal">
            CRA Reg MODAL
                {children}
            <button className="modal__button" onClick={onClose}>Close</button>
        </div>
        
    )
}