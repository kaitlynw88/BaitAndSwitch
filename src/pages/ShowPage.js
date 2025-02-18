import React from 'react'
import OnASunday from '../components/shows/OnASunday'
import Poster from "../assets/OASIA/OnASundayInAugustInstaStory.png"

function ShowPage() {
  return (
    <div className='wrapper'>
        <div className="posterContainer">
            <img src={Poster} alt="On a Sunday in August Poster" />
            <OnASunday/>
        </div>
    </div>
  )
}

export default ShowPage