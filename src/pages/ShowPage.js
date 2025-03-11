import React from 'react'
import Poster from "../assets/OASIA/OnASundayInAugustInstaStory.png"
import { Link } from "react-router";


function ShowPage() {
  return (
      <div className="ourShows">
          <div className='wrapper'>
              <h2 className="title">Our Shows</h2>
              <div className="posterContainer">
                  <Link to="on-a-sunday-in-august">
                        <h4 className='overlay'>
                            Click for more info about the show.
                        </h4>
                      <img src={Poster} alt="On a Sunday in August Poster" />
                  </Link>
              </div>
          </div>
      </div>
  );
}

export default ShowPage