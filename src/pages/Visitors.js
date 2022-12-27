import React from "react";
import { useState } from "react";
//Imported Comps
import VisitorWall from "../components/VisitorWall";

const Visitors = () => {

  const [visitorName, setVisitorName] = useState("");
  const [company, setCompany] = useState("");
  const [note, setNote] = useState("");

  const handleVisitorName = (e) => {
    setVisitorName(e.target.value);
  };

  const handleCompany = (e) => {
    setCompany(e.target.value);
  };

  const handleNote = (e) => {
    setNote(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    clearForm()
    console.log(visitorName,company,note);
  }

  const clearForm = () =>{
    setVisitorName("");
    setCompany("");
    setNote("")
  }

  return (
    <>
      <h1>Thanks for visiting! Please sign my wall!</h1>
      <div className="formDiv">
        <form className="visitorForm" onSubmit={handleSubmit}>
          <label>Name</label>
          <br></br>
          <input
          required
            type="text"
            onChange={handleVisitorName}
            value={visitorName}
          ></input>
          <br></br>
          <label>Company</label>
          <br></br>
          <input
            type="text" 
            onChange={handleCompany} 
            value={company}
            ></input>
          <br></br>
          <label>Leave A Message</label>
          <br></br>
          <textarea
            id="messageInput"
            rows="3"
            cols="50"
            maxLength="150"
            onChange={handleNote}
            value={note}
          ></textarea>
          <br></br>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div>
        <VisitorWall />
      </div>
    </>
  );
};

export default Visitors;
