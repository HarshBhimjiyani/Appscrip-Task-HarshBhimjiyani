// import React from 'react';
// import './Filters.css';

import ProductCards from "./ProductCards";

const Filters = ({ stateVariable }) => {
  const filerOpts = [
    "IDEAL FOR",
    "OCCASION",
    "WORK",
    "FABRIC",
    "SEGMENT",
    "SUITABLE FOR",
    "RAW MATERIAL",
    "PATTERN",
  ];
  return (
    <>
      <section className="filters">
        <div className={`selects-container ${stateVariable ? "hidden" : ""}`}>
          <div className="customizable">
            <label>
              <input type="checkbox" name="custom" />
              customizable
            </label>
          </div>
          {filerOpts.map((option) => (
            <div className="select-wrapper" key={option}>
              <select className="selector" aria-label={option}>
                <option value="en" selected>
                  {option}
                </option>
                <option value="hi">NEWEST FIRST</option>
                <option value="fr">POPULAR</option>
                <option value="ge">PRICE: HIGH TO LOW</option>
                <option value="ge">PRICE: LOW TO HIGH</option>
              </select>
            </div>
          ))}
        </div>
        <ProductCards />
      </section>
    </>
  );
};

export default Filters;
