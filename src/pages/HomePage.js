import React from 'react'

import { Link } from "react-router";

function HomePage() {
    
  return (
      <>
          <section>
              <div className="wrapper">
                  <div className="hero">
                      <div className="heroImage"></div>
                  </div>
              </div>
          </section>
          <section className="banner">
              <div className="wrapper">
                  <h2>Now Playing: Honey Never Spoils</h2>
                  <Link to="/our-shows/honey-never-spoils">
                      <h4>Click for more info about the show.</h4>
                  </Link>
                  <h3>
                      <a href="https://fringetoronto.com/fringe/show/honey-never-spoils">
                          Get your tickets now!
                      </a>
                  </h3>
              </div>
          </section>
          <section>
              <div className="wrapper">
                  <p className="email">
                      <a href="mailto:fringe.baitandswitch@gmail.com">
                          fringe.baitandswitch@gmail.com
                      </a>
                  </p>
              </div>
          </section>
      </>
  );
}

export default HomePage