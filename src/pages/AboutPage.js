import React from 'react'

function AboutPage() {
  return (
      <>
          <section className="about">
              <div className="wrapper">
                  <h2 className="title">About Us</h2>
                  <div className="aboutContainer">
                      <h3>Olivia Quinn Smith</h3>
                      <div className="imageContainer">
                          <div className="image">
                              <em>Placeholder for photo</em>
                          </div>
                          <p>
                              <em>Playwright, Producer.</em> After touring
                              Fringe shows in Montreal, London and Winnipeg,
                              Olivia decided to make the plunge into playwriting
                              and thus her company Bait and Switch was born. Her
                              premiere play, On a Sunday in August, draws from
                              Olivia’s personal experiences growing up in a
                              farming community in the Grey Highlands Ontario,
                              where she beautifully captures the conversations
                              we wish we never have to have. Exploring grief,
                              family dynamics and the uncomfortable truths that
                              illnesses bring to light, as well as highlighting
                              the two different ways of life; Rural and
                              Metropolitan. This year, Olivia’s second
                              production, Honey Never Spoils, will be premiering
                              at the Toronto Fringe Festival in July 2025.
                              Tickets are on sale soon.
                          </p>
                      </div>
                  </div>

                  <div className="aboutContainer">
                      <h3>Stephanie Williams</h3>
                      <div className="imageContainer">
                          <div className="image">
                              <em>Placeholder for photo</em>
                          </div>
                          <p>
                              <em>Director, Dramaturg, Producer.</em> Is a
                              Toronto-based Director, Dramaturge, Actor. She
                              loves working on new works and has even written
                              and performed her own one-woman show Walk Good.
                              Fringe is such a special time of year in the city
                              and Stephanie is always happy to participate,
                              especially this year with the most talented new
                              playwright and cast of actors.
                          </p>
                      </div>
                  </div>
              </div>
          </section>
      </>
  );
}

export default AboutPage