import React from 'react'

function HomePage() {
    
  return (
      <>
          <section>
              <div className="wrapper">
                  <h1>Bait and Switch Theatre</h1>
              </div>
          </section>
          <section className="banner">
              <div className="wrapper">
                  <h2>Honey Never Spoils</h2>
                  <h3>
                      See our show info at{" "}
                      <a href="https://fringetoronto.com/fringe/show/honey-never-spoils">
                          FringeToronto.com!
                      </a>
                  </h3>
              </div>
          </section>
          <section className="mission">
              <div className="wrapper">
                  <h2 className="subTitle">About Bait and Switch</h2>
                  <p>
                      Bait and Switch Theatre Company is dedicated to exploring
                      bold, original works that challenge expectations and push
                      the boundaries of storytelling. We create dynamic,
                      genre-blurring productions that draw audiences in with
                      familiar ideas—only to subvert, twist, and transform them
                      into something entirely unexpected. With a commitment to
                      new voices, sharp writing, and immersive staging, we craft
                      theatre that provokes thought, sparks conversation, and
                      keeps audiences on the edge of their seats.
                  </p>
              </div>
          </section>
      </>
  );
}

export default HomePage