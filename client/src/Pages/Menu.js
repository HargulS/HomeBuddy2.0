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
            
              Lorem
           
          </li>
          <li>
              Ipsum
          
          </li>
        
          <li className="menu__ltI">  
             Dolar 
          </li>
         
        </ul>
      </nav>
    </div>
  );
}