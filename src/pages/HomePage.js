import React from 'react'

function HomePage() {
    
  return (
      <>
          <section>
              <div className="wrapper">
                  <div className="hero">
                      <div className="heroTitle">
                          <h1 className="title">Bait and Switch</h1>
                      </div>
                      <div className="heroImage"></div>
                  </div>
              </div>
          </section>
          <section className="banner">
              <div className="wrapper">
                  <h2>Coming soon!</h2>
                  <h3>Toronto Fringe Festival July 2-13, 2025</h3>
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