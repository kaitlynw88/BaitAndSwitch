import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
function Header() {
    const [clicked, setClicked] = useState(false)
    
    const handleClick = () => {
        setClicked(!clicked);
    };

    const handleNav = () => {
        setClicked(false);
    };

  return (
      <header className="navigation">
          <div className="navContainer">
              <nav className="navigationBar">
                  <ul className={clicked ? "navBar active" : "navBar"}>
                      <li>
                          <Link to="/" onClick={handleNav}>
                              Home
                          </Link>
                      </li>
                      <li>
                          <Link to="/about" onClick={handleNav}>
                              About Us
                          </Link>
                      </li>
                      <li>
                          <Link to="/our-shows" onClick={handleNav}>
                              Our Shows
                          </Link>
                      </li>
                      <li>
                          <Link to="/contactus" onClick={handleNav}>
                              Contact Us
                          </Link>
                      </li>
                  </ul>
                  <div className="navButtonContainer">
                      <div className="navButton">
                          {clicked ? (
                              <>
                                  <span className="sr-only">X Mark</span>
                                  <FontAwesomeIcon
                                      icon={faXmark}
                                      onClick={handleClick}
                                  />
                              </>
                          ) : (
                              <>
                                  <span className="sr-only">Bars</span>
                                  <FontAwesomeIcon
                                      icon={faBars}
                                      onClick={handleClick}
                                  />
                              </>
                          )}
                      </div>
                  </div>
              </nav>
          </div>
      </header>
  );
}

export default Header