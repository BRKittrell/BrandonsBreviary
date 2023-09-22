import React from "react";
import profilePic from "../images/LI_Pic.jpeg"

const Card = () => {
  return (
    <div className="card">
           <h2 className="cardName">Brandon Kittrell</h2>
              <img className="cardPhoto" src={profilePic}/>
      </div>
      );
};

export default Card;
