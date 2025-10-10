import React from 'react'
import Olivia from "../assets/headshots/OliviaQuinn-Smith.jpg"
import Stephanie from "../assets/headshots/StephanieWilliams.jpg"

function AboutPage() {
  return (
      <>
          <div className="about">
              <section>
                  <div className="wrapper">
                      <h2 className="title">About Us</h2>
                      <div className="biosContainer">
                          <div className="aboutContainer">
                              <h4>Founder / Executive Director</h4>
                              <h3>Olivia Quinn-Smith</h3>
                              <div className="imageContainer">
                                  <div className="headshot-image">
                                      <img
                                          src={Olivia}
                                          alt="Olivia Quinn-Smith"
                                      />
                                  </div>
                                  <div className="bioText">
                                      <p>
                                          After touring Fringe shows in
                                          Montreal, London and Winnipeg, Olivia
                                          decided to make the plunge into
                                          playwriting and thus her company Bait
                                          and Switch was born. Her premiere
                                          play, On a Sunday in August, draws
                                          from Olivia’s personal experiences
                                          growing up in a farming community in
                                          the Grey Highlands Ontario, where she
                                          beautifully captures the conversations
                                          we wish we never have to have.
                                          Exploring grief, family dynamics and
                                          the uncomfortable truths that
                                          illnesses bring to light, as well as
                                          highlighting the two different ways of
                                          life; Rural and Metropolitan. This
                                          year, Olivia’s second production,
                                          Honey Never Spoils, premiered
                                          at the Toronto Fringe Festival in July
                                          2025.
                                      </p>
                                  </div>
                              </div>
                          </div>

                          <div className="aboutContainer">
                              <h4>Artistic Director</h4>
                              <h3>Stephanie Williams</h3>
                              <div className="imageContainer">
                                  <div className="headshot-image">
                                      <img
                                          src={Stephanie}
                                          alt="Stephanie Williams"
                                      />
                                  </div>
                                  <div className="bioText">
                                      <p>
                                          Theatre is the kaleidoscope with which we view the human condition. When we shine a light on the juxtaposition of kindness with cruelty, despair with laughter, love with hopelessness, we can see the beautiful, tragic mosaic that is life and humanity.
                                      </p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>
          </div>
      </>
  );
}

export default AboutPage