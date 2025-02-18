import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
function Header() {
    const [clicked, setClicked] = useState()
    const handleClick =()=>{
        setClicked(!clicked)
    }
  return (
      <header className="navigation">
          <div className="wrapper">
              <nav className="navigationBar">
                  <ul>
                      <li>
                          <Link to="/">Home</Link>
                      </li>
                      <li>
                          <Link to="/about">About</Link>
                      </li>
                      <li>
                          <Link to="/on-a-sunday-in-august">Our Shows</Link>
                      </li>
                      <li>
                          <a href="https://www.instagram.com/fringeoasia/">
                              <span className="sr-only">Instagram</span>
                              <FontAwesomeIcon
                                  icon={faInstagram}
                                  onClick={handleClick}
                              />
                          </a>
                      </li>
                  </ul>
                  <div className="navButtonContainer">
                      <a className="navButton">
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
                      </a>
                  </div>
              </nav>
          </div>
      </header>
  );
}

export default Header