import React from 'react'
import img1 from "../assets/OASIA/Cast/DSC_0013.JPG"
import img2 from "../assets/OASIA/Cast/DSC_0021.JPG"
import img3 from "../assets/OASIA/Cast/DSC_0051.JPG"
import img4 from "../assets/OASIA/DSC_0225.JPG"
import img5 from "../assets/OASIA/DSC_0230.JPG"

function HomePage() {
  return (
      <>
          <section>
              <div className="wrapper">
                  <div className="hero">
                      <div className="heroTitle">
                          <h1 className="title">Bait and Switch</h1>
                          <div className="formContainer">
                              <h3>Get in touch</h3>
                              <form action="">
                                  <input
                                      type="text"
                                      name="firstName"
                                      placeholder="First Name"
                                  />
                                  <input
                                      type="text"
                                      name="lastName"
                                      placeholder="Last Name"
                                  />
                                  <input
                                      type="email"
                                      name="email"
                                      placeholder="example@email.com"
                                  />
                                  <textarea
                                      name="message"
                                      id="userMessage"
                                      cols="30"
                                      rows="10"
                                  ></textarea>
                                  <button className="button">Submit</button>
                              </form>
                          </div>
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
          <section className="carousel">
              <div className="wrapper">
                  <h2>Come meet with us!</h2>
                  <div className="grid-wrapper">
                      <div className="big">
                          <img src={img2} alt="name" />
                      </div>
                      <div className="tall">
                          <img src={img1} alt="name" />
                      </div>
                      <div>
                          <img src={img5} alt="name" />
                      </div>
                      <div>
                          <img src={img4} alt="name" />
                      </div>
                      <div className="big">
                          <img src={img3} alt="name" />
                      </div>
                      <div className="tall">
                          <img src={img2} alt="name" />
                      </div>
                      <div className="wide">
                          <img src={img5} alt="name" />
                      </div>
                      <div className="big">
                          <img src={img5} alt="name" />
                      </div>
                      <div>
                          <img src={img4} alt="name" />
                      </div>
                      <div className="tall">
                          <img src={img1} alt="name" />
                      </div>
                      <div className="big">
                          <img src={img5} alt="name" />
                      </div>
                      <div>
                          <img src={img2} alt="name" />
                      </div>
                  </div>
              </div>
          </section>
      </>
  );
}

export default HomePage