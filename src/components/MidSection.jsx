// import React from 'react';
// import './MidSection.css';

const MidSection = ({ onToggleFilter, isHidden }) => {
  return (
    <>
      <hr />
      <div className="mid-section">
        <div className="mid-left">
          <span className="total-items">3425 items</span>
          <div className="filter-toggle-container">
            <i
              id="filter-toggle-left"
              className={`fas fa-chevron-left ${isHidden ? "hidden" : ""}`}
            ></i>
            <i
              id="filter-toggle-right"
              className={`fas fa-chevron-right ${isHidden ? "" : "hidden"}`}
            ></i>
            <span
              id="filter-toggle"
              className="filter-text"
              onClick={onToggleFilter}
              aria-label="Toggle Filter Panel"
            >
              {isHidden ? "Show Filters" : "Hide Filters"}
            </span>
          </div>
        </div>
        <div className="mid-right">
          <select className="selector" aria-label="Select Sort Option">
            <option value="recommended" defaultValue>
              RECOMMENDED
            </option>
            <option value="newest">NEWEST FIRST</option>
            <option value="popular">POPULAR</option>
            <option value="price-high-to-low">PRICE: HIGH TO LOW</option>
            <option value="price-low-to-high">PRICE: LOW TO HIGH</option>
          </select>
        </div>
      </div>
      <hr />
    </>
  );
};

export default MidSection;
