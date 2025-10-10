import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowRight,
    faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
//Bio photos
import Chloe from "../../assets/headshots/ChloeChan.jpg"
import Ashley from "../../assets/headshots/AshleyDingwell.jpg"
import Cayne from "../../assets/headshots/Cayne.jpg";
import Eli from "../../assets/headshots/Eli.jpg"
import JosephBrown from "../../assets/headshots/JosephBrown.jpg"

//Cast Photos
import Abbey1 from "../../assets/OASIA/Cast/Chloe-Abbey.JPG";
import Abbey2 from "../../assets/OASIA/Cast/Ashley-Abbey.JPG";
import Shelby from "../../assets/OASIA/Cast/Eli-Shelby.JPG";
import Daniel from "../../assets/OASIA/Cast/Cayne-Daniel.JPG";
import Paul from "../../assets/OASIA/Cast/Joe-Paul.JPG";

// //Carousel Images
import image13 from "../../assets/OASIA/carouselImages/Carousel1.JPG"
import image2 from "../../assets/OASIA/carouselImages/Carousel2.JPG";
import image3 from "../../assets/OASIA/carouselImages/Carousel3.JPG";
import image4 from "../../assets/OASIA/carouselImages/Carousel4.JPG";
import image5 from "../../assets/OASIA/carouselImages/Carousel5.JPG";
import image6 from "../../assets/OASIA/carouselImages/Carousel6.JPG";
import image7 from "../../assets/OASIA/carouselImages/Carousel7.JPG";
import image8 from "../../assets/OASIA/carouselImages/Carousel8.JPG";
import image9 from "../../assets/OASIA/carouselImages/Carousel9.JPG";
import image10 from "../../assets/OASIA/carouselImages/Carousel10.JPG";
import image11 from "../../assets/OASIA/carouselImages/Carousel11.JPG";
import image12 from "../../assets/OASIA/carouselImages/Carousel12.jpg";
import image1 from "../../assets/OASIA/carouselImages/Carousel13.jpg";
import image14 from "../../assets/OASIA/carouselImages/Carousel14.JPG";
import image15 from "../../assets/OASIA/carouselImages/Carousel15.JPG";
import image16 from "../../assets/OASIA/carouselImages/Carousel16.JPG";
import image17 from "../../assets/OASIA/carouselImages/Carousel17.JPG";
import image18 from "../../assets/OASIA/carouselImages/Carousel18.JPG";
import image19 from "../../assets/OASIA/carouselImages/Carousel19.jpg";

function OnASunday() {
    const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, image16, image17, image18];

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
                  <h2 className="title">On a Sunday in August</h2>
                  <div>
                      <h3 className='subTitle'>Synopsis</h3>
                      <p>
                          On a Sunday in August offers a glimpse of rural life
                          in small-town Ontario. Throwing the audience into the
                          Wright family farm, amid a life-altering decision.
                          When grit and determination are no longer enough, the
                          Wright family has done all it can to survice. They do
                          this not only for themselves but for their town and
                          community around them. But when the community is no
                          longer there, and all the support has left, tensions
                          run high as the weight of their legacy and their
                          futures become clear.
                      </p>
                  </div>
                  <p className="credit">
                      Written by <em>Olivia Quinn-Smith</em> <br />
                      Directed by <em>Stephanie Williams</em>
                  </p>
              </div>
          </section>
          <section className="cast">
              <div className="wrapper">
                  <h3 className='subTitle'>Cast</h3>
                  <div className="castMembers">
                      <h4>Chloe Chan as Abby Wright</h4>
                      <p>
                          <em>(at certain performances)</em>
                      </p>
                      <div className="castInfo">
                          <img src={Chloe} alt="Chloe Chan" />
                          <p className="Bio">
                              Chloe Chan is a Hong Kong-Canadian actress. If you
                              ask her what her dream role is, she will say
                              fierce, vulnerable female characters. Chan landed
                              her most notable acting roles to date at age 12,
                              portraying Alva (Donnie Yen’s foster daughter) in
                              Chinese blockbuster film ‘Chasing the Dragon’ and
                              Sonia in Hong Kong film ‘Staycation’. She is an
                              incoming student at NTS and was previously at
                              NYU’s Tisch School of the Arts, majoring in
                              Theatre. Chan deeply wishes that the Gen-Z version
                              of her favourite rom-coms Notting Hill and Dirty
                              Dancing will soon have an Asian lead.
                          </p>
                          <img
                              src={Abbey1}
                              alt="Chloe Chan as Abbey in On a Sunday in August"
                          />
                      </div>
                  </div>
                  <div className="castMembers">
                      <h4>Ashley Dingwell as Abbey Wright</h4>
                      <p>
                          <em>(at certain performaces)</em>
                      </p>
                      <div className="castInfo">
                          <img src={Ashley} alt="Ashley Dingwell" />
                          <p className="Bio">
                              Ashley Dingwell (she/they) has roots in Labrador,
                              but now calls Toronto home. She is an actor,
                              writer, and dancer with a Bachelor of Fine Arts
                              from Memorial University. Her selected stage
                              credits include Hedda Gabler in Hedda Gabler
                              (Theatre at Grenfell), Titania in Midsummer
                              Night’s Dream (Dartmouth Players) May Garnett in
                              Bedlam (TaG), Popova in The Bear (TaG) Des-Neiges
                              in Les Belles Sœurs (TaG), Jocasta in Oedipus Rex
                              (TaG), as well as working at the Rising Tide
                              Theatre Festival in 2022. On screen she has most
                              recently appeared in This Hour Has 22 Minutes
                              (CBC), Son of a Critch (CBC), Don’t Let Them In
                              (Peter Collins), SurrealEstate (SYFY), Sugar Highs
                              (OUTtv), Sullivan’s Crossing (CTV), Hudson & Rex
                              (Citytv), Diggstown (CBC Television), and Astrid
                              and Lilly Save the World (SYFY). New to the city,
                              this is Ashley’s first production with Toronto
                              Fringe and she is so grateful to be introduced to
                              the festival alongside this beautiful team.
                          </p>
                          <img
                              src={Abbey2}
                              alt="Ashley Dingwell as Abbey in On a Sunday in August"
                          />
                      </div>
                  </div>
                  <div className="castMembers">
                      <h4>Cayne Kitagawa as Daniel Wright</h4>
                      <div className="castInfo">
                          <img src={Cayne} alt="Cayne Kitagawa" />
                          <p className="Bio">
                              Born in Ottawa of Ukrainian and Japanese heritage,
                              Cayne Kitagawa is dedicated to performance,
                              whether live or recorded. His interests encompass
                              theatre, film, television, improv, and voice-over.
                              This Dora award nominated actor simultaneously
                              completed his BA (Honours) in Theatre and Drama
                              Studies at the University of Toronto and his
                              Advanced Diploma in Acting from Sheridan College
                              in 2021. A few of his notable roles include:
                              Orestes (Oresteia, Theatre Erindale),
                              Mercutio/Paris (Romeo & Juliet, Crane Creations),
                              Levin (Anna Karenina, Theatre Erindale), White
                              Rabbit (Alice in Wonderland, Guild Festival
                              Theatre) and most recently Charles Thomas (The
                              Rear Window, Bygone Theatre). Cayne is currently
                              working in the Toronto and Ottawa acting scene,
                              always searching for opportunities to display his
                              skills and work to the world!
                          </p>
                          <img
                              src={Daniel}
                              alt="Cayne Kitagawa as Daniel in On a Sunday in August"
                          />
                      </div>
                  </div>
                  <div className="castMembers">
                      <h4>Eli-Bella Wood as Shelby</h4>
                      <div className="castInfo">
                          <img src={Eli} alt="Eli-Bella Wood" />
                          <p className="Bio">
                              Eli-Bella Wood (Shelby) is delighted to join the
                              cast of On a Sunday in August. She regularly
                              contributes to plays, short films, and
                              commercials, and will appear in her first lead
                              role in a feature film, View From the Edge,
                              expected to be released winter 2024.
                          </p>
                          <img
                              src={Shelby}
                              alt="Eli-Bella Wood as Shelby in On a Sunday in August"
                          />
                      </div>
                  </div>
                  <div className="castMembers">
                      <h4>Joseph Brown as Paul Wright</h4>
                      <div className="castInfo">
                          <img src={JosephBrown} alt="Joseph Brown" />
                          <p className="Bio">
                              Joseph (he/him) is a dynamic Actor and
                              Collaborator bringing a wealth of theatrical
                              experience to Tkaronto from Kjipuktuk/Halifax.
                              With a B.A. in Theatre from Acadia University,
                              Joseph has showcased his talent in a diverse range
                              of productions. His repertoire spans from classic
                              masterpieces, such as Tartuffe and A Doll's House
                              (Acadia Theatre Company) to cutting-edge,
                              innovative Canadian works like Smokeville (Alumnae
                              Theatre) and Knitting and Other Life Hacks
                              (Halifax Fringe) Joseph is excited to make his
                              Toronto Fringe debut and is thrilled to be a part
                              of this wonderful story with an amazing cast and
                              crew!
                          </p>
                          <img
                              src={Paul}
                              alt="Joseph Brown as Paul in On a Sunday in August"
                          />
                      </div>
                  </div>
              </div>
          </section>
          <section className="pennies">
              <div className="wrapper">
                  <h3 className="subTitle penniesTitle">Pennies nickles and dimes</h3>
                  <img
                      src={image19}
                      alt="The cast of On a Sunday in August with Duff MacDonald."
                      className="duffyImage"
                  />
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

export default OnASunday