import React from "react"
export default function ModalSummaryItems({open, props, onClose}){
    if(!open) return null 

    return(
        <>
        <button className="modal__button" onClick={onClose}>Close </button> 
        </>
    )
     
   



}