import React from "react";
import profilePic from "../images/profilepic.jpeg"

const Card = () => {
  return (
    <div className="card">
      <div className="photoContainer">
      </div>
      <div>
        <h2 className="cardName">Brandon Kittrell</h2>
          <h5 className="occupation">Software Engineer</h5>
        <img className="cardPhoto" src={profilePic}/>
        <div className="cardcontainer">
          <ul className="cardList">
            <li>Talents: React, Express, Node, PostgreSQL</li>
            <li>Brings: Leadership, Project Management, Critical Thinking</li>
            <li>Current Company: Galvanize by Hack Reactor</li>
            <li>Current Position: Software Engineer Immersive Resident</li>
            <li>Education 1: University of Arkansas - Business Management</li>
            <li>Education 2: Penn State - Sofware Engineering (Ongoing)</li>
            <li>Military: U.S. Coast Guard Veteran</li>
            <li>Hometown: Nacogdoches, Texas</li>
            <li>Likes: College Football, Golf, Outdoors</li>
            <li>Superpowers: Husband, Dad, Handyman</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
