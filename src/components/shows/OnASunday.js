import React from 'react'
import castPic from "../../assets/OASIA/Cast/ChloeChanPic.JPG"
import img1 from "../../assets/OASIA/Cast/DSC_0013.JPG"
import img2 from "../../assets/OASIA/Cast/DSC_0021.JPG";
import img3 from "../../assets/OASIA/Cast/DSC_0051.JPG";

function OnASunday() {
  return (
      <div className="OnASunday">
          <div className="wrapper">
              <h2>On a Sunday in August Cast:</h2>
              <section className="cast">
                  <div className="castMembers">
                      <h4>Chloe Chan</h4>
                      <div className="castInfo">
                          <img src={castPic} alt="Chloe Chan" />
                          <p className="Bio">
                              Lorem ipsum, dolor sit amet consectetur
                              adipisicing elit. Exercitationem placeat dolores
                              ullam vero quas perferendis possimus, ratione,
                              dolor voluptatum illum quia vel animi corrupti
                              porro sed, beatae accusamus modi optio.
                          </p>
                      </div>
                  </div>
                  <div className="castMembers">
                      <h4>Ashley Dingwell</h4>
                      <div className="castInfo">
                          <img src={castPic} alt="Chloe Chan" />
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
                      </div>
                  </div>
                  <div className="castMembers">
                      <h4>Cayne Kitagawa</h4>
                      <div className="castInfo">
                          <img src={castPic} alt="Chloe Chan" />
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
                      </div>
                  </div>
                  <div className="castMembers">
                      <h4>Eli-Bella Wood</h4>
                      <div className="castInfo">
                          <img src={castPic} alt="Chloe Chan" />
                          <p className="Bio">
                              Eli-Bella Wood (Shelby) is delighted to join the
                              cast of On a Sunday in August. She regularly
                              contributes to plays, short films, and
                              commercials, and will appear in her first lead
                              role in a feature film, View From the Edge,
                              expected to be released winter 2024.
                          </p>
                      </div>
                  </div>
                  <div className="castMembers">
                      <h4>Joseph Brown</h4>
                      <div className="castInfo">
                          <img src={castPic} alt="Chloe Chan" />
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
                      </div>
                  </div>
              </section>
          </div>
          <section>
              <h2 className="titl">Professional shots</h2>
              <img src={img1} alt="name 1" />
              <img src={img2} alt="name 2" />
              <img src={img3} alt="name 3" />
          </section>
      </div>
  );
}

export default OnASunday