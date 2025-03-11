import React from 'react'
import OnASunday from '../components/shows/OnASunday'
import Poster from "../assets/OASIA/OnASundayInAugustInstaStory.png"
import { Link } from "react-router";


function ShowPage() {
  return (
      <div className="wrapper">
          <div className="posterContainer">
              <h2 className="title">Our Shows</h2>
              <div>
                  <Link to="on-a-sunday-in-august">
                      <img src={Poster} alt="On a Sunday in August Poster" />
                  </Link>
              </div>
          </div>
      </div>
  );
}

export default ShowPage