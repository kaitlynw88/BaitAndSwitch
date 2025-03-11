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
                              <h3>Olivia Quinn Smith</h3>
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
                                          Honey Never Spoils, will be premiering
                                          at the Toronto Fringe Festival in July
                                          2025. Tickets are on sale soon.
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
                                          Is a Toronto-based Director,
                                          Dramaturge, Actor. She loves working
                                          on new works and has even written and
                                          performed her own one-woman show Walk
                                          Good. Fringe is such a special time of
                                          year in the city and Stephanie is
                                          always happy to participate,
                                          especially this year with the most
                                          talented new playwright and cast of
                                          actors.
                                      </p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>
              <section className="mission">
                  <div className="wrapper">
                      <h2 className="subTitle">About Bait and Switch</h2>
                      <p>
                          Bait and Switch Theatre Company is dedicated to
                          exploring bold, original works that challenge
                          expectations and push the boundaries of storytelling.
                          We create dynamic, genre-blurring productions that
                          draw audiences in with familiar ideas—only to subvert,
                          twist, and transform them into something entirely
                          unexpected. With a commitment to new voices, sharp
                          writing, and immersive staging, we craft theatre that
                          provokes thought, sparks conversation, and keeps
                          audiences on the edge of their seats.
                      </p>
                  </div>
              </section>
          </div>
      </>
  );
}

export default AboutPage