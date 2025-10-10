import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowRight,
    faArrowLeft
} from "@fortawesome/free-solid-svg-icons";
import ReactAudioPlayer from "react-audio-player";
//Bio photos
import Chantel from "../../assets/HoneyNS/ChantelWinters.jpg";
import Jacob from "../../assets/HoneyNS/JacobKlick.JPG";
import Emery from "../../assets/HoneyNS/EmeryNguyen.JPG"
import Jada from "../../assets/HoneyNS/JadaRifkin.jpg";

// //Carousel Images
import image1 from "../../assets/HoneyNS/Carousel/DSC_0549.jpeg";
import image8 from "../../assets/HoneyNS/Carousel/DSC_0175.jpeg"
import image2 from "../../assets/HoneyNS/Carousel/DSC_0218.jpeg";
import image3 from "../../assets/HoneyNS/Carousel/DSC_0295.jpeg";
import image4 from "../../assets/HoneyNS/Carousel/DSC_0322.jpeg";
import image5 from "../../assets/HoneyNS/Carousel/DSC_0401.jpeg";
import image14 from "../../assets/HoneyNS/Carousel/DSC_0417.jpeg";
import image7 from "../../assets/HoneyNS/Carousel/DSC_0491.jpeg";
import image9 from "../../assets/HoneyNS/Carousel/DSC_0599.jpeg";
import image10 from "../../assets/HoneyNS/Carousel/DSC_0608.jpeg";
import image11 from "../../assets/HoneyNS/Carousel/DSC_0623.jpeg";
import image6 from "../../assets/HoneyNS/Carousel/DSC_0632.jpeg";
import image13 from "../../assets/HoneyNS/Carousel/DSC_0355.jpeg"
import image12 from "../../assets/HoneyNS/Carousel/DSC_0653.jpeg";

import musicAudio from "../../assets/HoneyNS/musicAudio.mp3"

function HoneyNS() {
    const images = [
        image1,
        image2,
        image4,
        image6,
        image7,
        image8,
        image9,
        image11,
        image12,
        image14
    ];

     function previousImage() {
         let slider = document.getElementById("slider");
         slider.scrollLeft = slider.scrollLeft - 400;
     }

     function nextImage() {
         let slider = document.getElementById("slider");
         slider.scrollLeft = slider.scrollLeft + 400;
     }
  return (
      <div className="OnASunday">
          <section className="playInfo">
              <div className="wrapper">
                  <h2 className="title">Honey Never Spoils</h2>
                  <div>
                      <h3 className="subTitle">Synopsis</h3>
                      <p>
                          With friends like these, who needs enemies? After
                          hitting #1 on the Spotify charts, the hosts of "Echoes
                          of the Lost" set their sights on a new season - one
                          that hits too close to home. As they investigate the
                          murder of Honey Mitchell, a childhood friend, old
                          wounds reopen, buries secrets surface, and the line
                          between truth and exploitation blurs.
                      </p>
                  </div>
                  <p className="credit">
                      Written by <em>Olivia Quinn-Smith</em> <br />
                      Directed by <em>Stephanie Williams</em>
                  </p>
              </div>
          </section>
          <section>
            <div className="wrapper">
              <ReactAudioPlayer src={musicAudio} autoPlay controls />
            </div>
          </section>
          <section className="cast">
              <div className="wrapper">
                  <div className="castMembers">
                      <h4>Chantel Winters as Brooke</h4>
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
                          <img
                              src={image10}
                              alt="Chantel Winters as Brooke in Honey never spoils."
                          />
                      </div>
                  </div>
                  <div className="castMembers">
                      <h4>Jacob Klick as Evan</h4>
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
                          <img
                              src={image3}
                              alt="Jacob Klick as Evan in Honey never spoils."
                          />
                      </div>
                  </div>
                  <div className="castMembers">
                      <h4>Jada Rifkin as Sarah</h4>
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
                          <img
                              src={image13}
                              alt="Jada Rifkin as Sarah in Honey never spoils."
                          />
                      </div>
                  </div>
                  <div className="castMembers">
                      <h4>Emery Nguyen as Victoria</h4>
                      <div className="castInfo">
                          <img src={Emery} alt="Emery Nguyen" />
                          <p className="Bio">
                              Emery Nguyen is excited to make her Fringe debut
                              with Honey Never Spoils! Graduating from the
                              Acting in Film, TV & Theatre Program at Toronto
                              Film School, her film and theatre credits include:
                              Natalie (The Audition), Grace (Packing), Crystal
                              (Stages of Maya), Noelle (Queer Isolation), Aimee
                              (Above her Lips), Ginger (Love Shot, 24H Theatre
                              Festival/Actor's Imagination Studio) and Willow
                              (Wings of Hope/TFS). She would like to thank her
                              loved ones, especially her younger sister Fiona,
                              for all their unwavering love and support, and to
                              this wonderful cast and crew for welcoming her so
                              warmly to her theatre debut!
                          </p>
                          <img
                              src={image5}
                              alt="Emery Nguyen as Victoria in Honey never spoils."
                          />
                      </div>
                  </div>
              </div>
          </section>
          <section className="pennies">
              <div className="wrapper">
                  <h3 className="subTitle penniesTitle">
                      Pennies nickles and dimes
                  </h3>
                  <p>
                      The song "Pennies, Nickels & Dimes" is the soundtrack of
                      "On A Sunday In August" Special thanks to Duff MacDonald
                      (pictured above), Stewart Sanderson (AKA "Grizz"), and
                      James Collins for permission, and for the beautiful story
                      this song tells. Please click the link below to listen.
                  </p>
                  <p className="songLink">
                      <a href="https://youtu.be/G2Hz9zbJuMs?si=GiHnZZT_Gy9JDVka">
                          Pennies, Nickels & Dimes by Duff MacDonald (Written by
                          Stewart Sanderson)
                      </a>
                  </p>
              </div>
          </section>
          <section className="carouselSection">
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
          </section>
      </div>
  );
}

export default HoneyNS