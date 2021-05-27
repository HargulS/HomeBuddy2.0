import React, { useRef } from "react";
import { Link } from 'react-router-dom'
import { useDetectOutsideClick } from "./useDetectOutsideClick";

export default function Resources() {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);

  return (
    <div className="container">
      <div className="menu-container">

        <Link onClick={onClick} className="menu-trigger">
          Resources
        </Link>
        <nav
          ref={dropdownRef}
          className={`menu ${isActive ? "active" : "inactive"}`}
        >
         <ul className="menu-container__resourcesList">
            <li className="summary__resourcesListItems"><a className="modal__link" href="https://www.bcassessment.ca/">BC Assessment</a> </li>
            <li className="summaryResourcesList__items"><a className="modal__link" href='https://www.zillow.com/homes/Vancouver,-BC_rb/'>Zillow.ca</a> </li>
            <li className="summaryResourcesList__items"><a className="modal__link" href='https://www.realtor.ca/en'>Realtor.ca</a> </li>
            <li className="summaryResourcesList__items summaryResourcesList__items-ltI">
            <a className="modal__link" href='https://www.rew.ca/'>Rew.ca</a></li>
            </ul>
        </nav>
      </div>
    </div>
  );
}
