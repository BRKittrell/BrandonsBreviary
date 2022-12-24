import React from "react";
import { useState } from "react";
//Imported Comps
import VisitorWall from "../components/VisitorWall";

const Visitors = () => {
  const [visitorName, setVisitorName] = useState("");
  const [note, setNote] = useState("");

  const handleVisitorName = (e) => {
    setVisitorName(e.target.value);
    console.log(e.target.value)
  };

  const handleNote = (e) => {
    setNote(e.target.value);
    console.log(e.target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e)
  };

  return (
    <>
      <h1>Thanks for visiting! Please rate my page!</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <br></br>
          <input
            type="text"
            onChange={handleVisitorName}
            value={visitorName}
          ></input>
          <br></br>
          <label>Review</label>
          <br></br>
          <textarea
            rows="5"
            cols="50"
            onChange={handleNote}
            value={note}
          ></textarea>
          <br></br>
          <button type="submit"> Submit Your Review!</button>
        </form>
      </div>
      <div>
        <VisitorWall></VisitorWall>
      </div>
    </>
  );
};

export default Visitors;
