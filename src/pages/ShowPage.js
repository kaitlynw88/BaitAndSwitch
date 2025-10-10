import React from 'react'
import Poster from "../assets/OASIA/OnASundayInAugustInstaStory.png"
import Poster2 from "../assets/HoneyNS/HoneyNSPoster.png"
import { Link } from "react-router";


function ShowPage() {
  return (
      <div className="ourShows">
          <div className="wrapper">
              <h2 className="title">Our Shows</h2>
              <div className="posterContainer">
                  <Link to="on-a-sunday-in-august">
                      <h4 className="overlay">
                          Click for more info about the show.
                      </h4>
                      <img src={Poster} alt="On a Sunday in August Poster" />
                  </Link>
              </div>
              <div className="posterContainer secondPoster">
                  <Link to="honey-never-spoils">
                      <h4 className="overlay">
                          Click for more info about the show.
                      </h4>
                      <img src={Poster2} alt="Honey Never Spoils" />
                  </Link>
              </div>
          </div>
      </div>
  );
}

export default ShowPage