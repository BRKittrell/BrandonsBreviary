import React from "react";
import { useState } from "react";
//Imported Comps
import VisitorWall from "../components/VisitorWall";

const Visitors = () => {

  const [visitorName, setVisitorName] = useState("");
  const [company, setCompany] = useState("");
  const [comment, setComment] = useState("");

  const handleVisitorName = (e) => {
    setVisitorName(e.target.value);
  };

  const handleCompany = (e) => {
    setCompany(e.target.value);
    console.log(e.target.value)
  };

  const handleComment = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const body = {visitorName, company, comment};
      const response = await fetch ("https://brandons-resume-server.onrender.com/visitors",{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
      });
      console.log(response);
      clearForm()
    }catch (err){
      console.log(err.message)
    }
  }

  const clearForm = () =>{
    setVisitorName("");
    setCompany("");
    setComment("")
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
            value={visitorName}
            onChange={handleVisitorName}
          ></input>
          <br></br>
          <label>Company</label>
          <br></br>
          <input
            type="text" 
            value={company}
            onChange={handleCompany} 
            ></input>
          <br></br>
          <label>Leave A Message</label>
          <br></br>
          <textarea
            id="messageInput"
            rows="3"
            cols="50"
            maxLength="150"
            value={comment}
            onChange={handleComment}
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
