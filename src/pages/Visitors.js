import React from "react";
import { useContext } from "react";
import VistorContext from "../context/VisitorContext";

const Visitors = () => {

  return (
    <>
      <h1>Thanks for visiting! Leave a note!</h1>
      <div>
        <form>
          <label>Name</label> <br></br>
          <input type="text"></input>
          <br></br>
          <label>Note</label> <br></br>
          <textarea rows="5" cols="50"></textarea>
          <input type="submit">Submit</input>
        </form>
      </div>
    </>
  );
};

export default Visitors;
