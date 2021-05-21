import { Link } from 'react-router-dom';
import React, { useRef } from "react";
import { useDetectOutsideClick } from "./useDetectOutsideClick";

export default function Menu() {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);

  return (
    <div className="container">
      <Link onClick={onClick}>
        Menu
      </Link>

      <nav
        ref={dropdownRef}
        className={`menu ${isActive ? "active" : "inactive"}`}
      >
        <ul>
          <li>
            <Link to='/mortgageaffordability'>
              Step 1
            </Link>
          </li>
          <li>
            <Link to='/savingscalculator'>
              Step 2
            </Link>
          </li>
        
          <li>  <Link to='/documentsandinterestrates'>
             Step 3 </Link>
          </li>
         
        </ul>
      </nav>
    </div>
  );
}