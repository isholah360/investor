import React from "react";
import "./navy.css";

function Navigations() {
  return (
    <>
      <div>
        <div className="min-navy">
          <div className="logo">Investor</div>
          <div className="navigation">
            <ul>
              <li className="the-list">Home</li>
              <li className="the-list">About</li>
              <li className="the-list">Contact</li>
              <li className="download">Download App</li>
            </ul>
            <div className="farbr">☰</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navigations;
