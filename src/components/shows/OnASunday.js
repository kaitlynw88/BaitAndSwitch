import React from 'react'
import castPic from "../../assets/OASIA/Cast/ChloeChanPic.JPG"
import img1 from "../../assets/OASIA/Cast/DSC_0013.JPG"
import img2 from "../../assets/OASIA/Cast/DSC_0021.JPG";
import img3 from "../../assets/OASIA/Cast/DSC_0051.JPG";


// src/assets/OASIA/Cast/DSC_0013.JPG src/assets/OASIA/Cast/DSC_0021.JPG src/assets/OASIA/Cast/DSC_0051.JPG

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
                              Lorem ipsum, dolor sit amet consectetur
                              adipisicing elit. Exercitationem placeat dolores
                              ullam vero quas perferendis possimus, ratione,
                              dolor voluptatum illum quia vel animi corrupti
                              porro sed, beatae accusamus modi optio.
                          </p>
                      </div>
                  </div>
                  <div className="castMembers">
                      <h4>Cayne Kitagawa</h4>
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
                      <h4>Eli-Bella Wood</h4>
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
                      <h4>Joseph Brown</h4>
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
              </section>
          </div>
          <section>
            <h2 className="titl">Professional shots</h2>
              <img src={img1} alt="" />
              <img src={img2} alt="" />
              <img src={img3} alt="" />
          </section>
      </div>
  );
}

export default OnASunday