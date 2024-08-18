// import React from 'react';
// import './Header.css';

const Header = () => {
  //   const toggleFavorite = (e) => {
  //     e.target.classList.toggle("favorited");
  //   };

  return (
    <header>
      {/* Header Top Section */}
      <div className="header_top_section">
        <div className="container">
          <div className="header_main">
            <div className="location_text">
              <i className="fas fa-star "></i>
              <a href="#">Lorem ipsum dolor</a>
            </div>
            <div className="location_text">
              <i className="fas fa-star"></i>
              <a href="#">Lorem, ipsum dolor</a>
            </div>
            <div className="location_text">
              <i className="fas fa-star"></i>
              <a href="#">Lorem ipsum dolor</a>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar Top */}
      <nav className="navbar">
        <div className="nav-item">
          <i className="fas fa-fan fa-solid"></i>
        </div>
        <div className="navbar-sec">
          <div className="nav-item">
            <span className="logo">logo</span>
          </div>
          <div className="nav-item">
            <a href="#home" className="nav-item">
              <i className="fas fa-magnifying-glass"></i>
            </a>
            <a href="#favorites" className="nav-item">
              <i className="fas fa-heart fa-solid"></i>
            </a>
            <a href="#products" className="nav-item">
              <i className="fas fa-bag-shopping fa-solid"></i>
            </a>
            <a href="#contact" className="nav-item">
              <i className="fas fa-user fa-solid"></i>
            </a>

            <select className="selector" aria-label="Select Language">
              <option value="en" selected>
                ENG
              </option>
              <option value="hi">HIN</option>
              <option value="fr">FRE</option>
              <option value="ge">GER</option>
            </select>
          </div>
        </div>
      </nav>

      {/* Navbar Options */}
      <nav className="navbar-options">
        <div className="nav-item">
          <span className="nav-item opts">shop</span>
          <span className="nav-item opts">skills</span>
          <span className="nav-item opts">stories</span>
          <span className="nav-item opts">about</span>
          <span className="nav-item opts">contact us</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
