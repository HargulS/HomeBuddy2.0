import SummaryPage from "./SummaryPage";
import React, {useState} from "react";
export default function Display (props){
    const [showResults, setShowResults] = useState(false)
    const onClick = () => setShowResults(true)
    const closeClick= () => setShowResults(false)
    return (
      <div>
        <button onClick={onClick}>Summary</button>
        { showResults ? <SummaryPage/> &&<button onClick={closeClick}>Close</button>: null }
        
      </div>
    )
  }