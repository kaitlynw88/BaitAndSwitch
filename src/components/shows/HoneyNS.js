import React from 'react'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//     faArrowRight,
//     faArrowLeft,
// } from "@fortawesome/free-solid-svg-icons";
//Bio photos
import Chantel from "../../assets/HoneyNS/ChantelWinters.jpg";
import Jacob from "../../assets/HoneyNS/JacobKlick.JPG";
import Nicole from "../../assets/HoneyNS/NicoleSmith.png";
import Jada from "../../assets/HoneyNS/JadaRifkin.jpg";

//Cast Photos
// import Chantel from "../../assets/HoneyNS/ChantelWinters.jpg";
// import Jacob from "../../assets/HoneyNS/JacobKlick.JPG";
// import Nicole from "../../assets/HoneyNS/NicoleSmith.png";
// import Jada from "../../assets/HoneyNS/ChantelWinters.jpg";

// //Carousel Images
// import image1 from "../../assets/OASIA/carouselImages/Carousel1.JPG"
// import image2 from "../../assets/OASIA/carouselImages/Carousel2.JPG";
// import image3 from "../../assets/OASIA/carouselImages/Carousel3.JPG";
// import image4 from "../../assets/OASIA/carouselImages/Carousel4.JPG";
// import image5 from "../../assets/OASIA/carouselImages/Carousel5.JPG";
// import image6 from "../../assets/OASIA/carouselImages/Carousel6.JPG";
// import image7 from "../../assets/OASIA/carouselImages/Carousel7.JPG";
// import image8 from "../../assets/OASIA/carouselImages/Carousel8.JPG";
// import image9 from "../../assets/OASIA/carouselImages/Carousel9.JPG";
// import image10 from "../../assets/OASIA/carouselImages/Carousel10.JPG";
// import image11 from "../../assets/OASIA/carouselImages/Carousel11.JPG";
// import image12 from "../../assets/OASIA/carouselImages/Carousel12.jpg";
// import image13 from "../../assets/OASIA/carouselImages/Carousel13.jpg";
// import image14 from "../../assets/OASIA/carouselImages/Carousel14.JPG";
// import image15 from "../../assets/OASIA/carouselImages/Carousel15.JPG";
// import image16 from "../../assets/OASIA/carouselImages/Carousel16.JPG";
// import image17 from "../../assets/OASIA/carouselImages/Carousel17.JPG";
// import image18 from "../../assets/OASIA/carouselImages/Carousel18.JPG";
// import image19 from "../../assets/OASIA/carouselImages/Carousel19.jpg";

function HoneyNS() {
    // const images = [image1, image2, image3, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, image16, image17, image18, image19];

    //  function previousImage() {
    //      let slider = document.getElementById("slider");
    //      slider.scrollLeft = slider.scrollLeft - 400;
    //  }

    //  function nextImage() {
    //      let slider = document.getElementById("slider");
    //      slider.scrollLeft = slider.scrollLeft + 400;
    //  }
  return (
      <div className="OnASunday">
          <section className="playInfo">
              <div className="wrapper">
                  <h2 className="title">Honey Never Spoils</h2>
                  <h4>Tarragon Theatre Extraspace: Toronto On.</h4>
                  <div className="showDates">
                      <p>
                          Thursday July 3 <br />
                          Friday July 4 <br />
                          Sunday July 6 <br />
                          Monday July 7
                      </p>
                      <p>
                          Thursday July 10 <br />
                          Friday July 11 <br />
                          Saturday July 12 <br />
                      </p>
                  </div>
              </div>
          </section>
          <section className="cast">
              <div className="wrapper">
                  <div className="castMembers">
                      <h4>Chantel Winters</h4>
                      <div className="castInfo">
                          <img src={Chantel} alt="Chantel Winters" />
                          <p className="Bio">
                              Chantel Winters is an actor, playwright and
                              producer born and raised in Toronto. Select
                              theatre credits include: playing Kate in the
                              Village Players Good People, Zabby in An Atlas, a
                              Necktie & Other Concerns 2019 Toronto Fringe, and
                              Tracey in Bob Del Rio’s Professionally Ethnic at
                              Summerworks 2017. Now Magazine named
                              Professionally Ethnic one of the outstanding
                              ensembles of the season. She co-produced her first
                              short film, ‘& Other Concerns’ which premiered at
                              the 2024 Big Apple Film Festival. Chantel is the
                              co-founder of Hard-Bitten Productions, a theatre
                              company promoting marginalized artists. This
                              August Hard-Bitten will stage her play Dear Ms.
                              Kitt at the Aki Studio theatre.
                          </p>
                          {/* <img
                              src={Chantel}
                              alt="Chantel Winters as Brooke in Honey never spoils."
                          /> */}
                      </div>
                  </div>
                  <div className="castMembers">
                      <h4>Jacob Klick</h4>
                      <div className="castInfo">
                          <img src={Jacob} alt="Jacob Klick" />
                          <p className="Bio">
                              Jacob is an actor from Vars, by way of Winnipeg.
                              He's coming off the heels of Unbridled Theatre
                              Co.'s exceedingly successful production of The
                              Threepenny Opera, where he played Captain
                              Macheath. Jacob previously participated in Fringe
                              in 2023, playing the role of Richard in Uriah's
                              Granddaughter Prod.'s June. Some of his other
                              theatre credits include Brutus in Julius Caesar,
                              Tom Wingfield in The Glass Menagerie, and Mr.
                              Darcy in Pride & Prejudice. His select media
                              credits include Faded, Not Yet Gone; Black Watch
                              Snipers; Mr. Hockey: The Gordie Howe Story; and
                              Goon. He is thrilled to once again be
                              participating in the Toronto Fringe Festival, and
                              he thanks his partner Yoshi and their dog Albus
                              for their ever-loving support. Thank you to all of
                              you lovely patrons of Canadian theatre! Training:
                              University of Toronto; Sheridan College.
                          </p>
                          {/* <img
                              src={Jacob}
                              alt="Jacob Klick as Evan in Honey never spoils."
                          /> */}
                      </div>
                  </div>
                  <div className="castMembers">
                      <h4>Nicole Anne Smith</h4>
                      <div className="castInfo">
                          <img src={Nicole} alt="Nicole Anne Smith" />
                          <div className="Bio">
                              <p>
                                  Nicole is a Toronto-based actor and director.
                                  She holds a Bachelor of Fine Arts in Acting
                                  from the University of British Columbia, where
                                  she trained in classical and contemporary
                                  performance for both the stage and screen.
                                  Nicole recently made her Toronto stage debut
                                  as the lead in Dead Romance, a new work
                                  produced by Bad Crew Theatre at the Red
                                  Sandcastle Theatre.
                              </p>{" "}
                              <p>
                                  Select Vancouver credits include: Duncan/Ross
                                  in Macbeth (Vancouver Odd Fellows),
                                  co-creator/deviser in The Löwensköld Ring
                                  (Annex Theatre), #11 in The Wolves (UBC),
                                  Cominius in Coriolanus (UBC), and Duck in The
                                  Parliament of the Birds (UBC).
                              </p>
                              <p>
                                  In addition to performing, Nicole has begun
                                  expanding her directing practice, working
                                  closely with emerging playwrights to bring new
                                  Canadian stories to life. She is particularly
                                  interested in female-led narratives and
                                  exploring forms of storytelling that push the
                                  boundaries of theatrical convention. She is
                                  excited to have her first Toronto Fringe
                                  experience with the team at Bait & Switch, and
                                  thanks them for the opportunity to play.
                              </p>
                          </div>
                          {/* <img
                              src={Nicole}
                              alt="Nicole Anne Smith as Victoria in Honey never spoils."
                          /> */}
                      </div>
                  </div>
                  <div className="castMembers">
                      <h4>Jada Rifkin</h4>
                      <div className="castInfo">
                          <img src={Jada} alt="Jada Rifkin" />
                          <p className="Bio">
                              Jada is thrilled to be part of Honey Never Spoils!
                              Selected Recent Theatre: Life Sucks. (Outliers
                              Theatre Collective), The Thanksgiving Play
                              (Mirvish Productions/Pop-Up Theatre Canada),
                              GoldiRocks! Tour (Education Arts Canada), Merrily
                              We Roll Along (Shifting Ground Collective), Jada
                              Rifkin: I’M PERFECT* (Now Toronto Critic’s Pick),
                              Alice in Wonderland (Creativiva Inc - Qatar,
                              Singapore Tour), and Every Silver Lining (Next
                              Stage Festival). Selected TV/Film: Discovery
                              Channel 2, Amazon, OutTV/Go Button Media, Whistler
                              Film Festival, and multiple national/international
                              commercials. Rifkin is a graduate of Randolph
                              College for the Performing Arts. @jadarifkin
                          </p>
                          {/* <img
                              src={Jada}
                              alt="Jada Rifkin as Sarah in Honey never spoils."
                          /> */}
                      </div>
                  </div>
              </div>
          </section>
          {/* <section className="carouselSection">
              <div className="wrapper">
                  <div className="carousel">
                      <button
                          className="carouselButton buttonPrevious"
                          onClick={previousImage}
                      >
                          <FontAwesomeIcon icon={faArrowLeft} />
                      </button>
                      <div className="carouselImage" id="slider">
                          {images.map((image, index) => (
                              <img
                                  src={image}
                                  alt=""
                                  key={index}
                                  className={
                                      index === images.length - 1
                                          ? "slide lastSlide"
                                          : "slide"
                                  }
                              />
                          ))}
                      </div>
                      <button
                          className="carouselButton buttonNext"
                          onClick={nextImage}
                      >
                          <FontAwesomeIcon icon={faArrowRight} />
                      </button>
                  </div>
              </div>
          </section> */}
      </div>
  );
}

export default HoneyNS