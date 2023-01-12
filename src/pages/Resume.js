import React from "react";

const Resume = () => {
  return (
<div className="resumeContainer">
    <a href="https://drive.google.com/drive/folders/1JlqQKMyZ6P_a26SnnEUravvnM8tLUP0I" download='GFG'>
    {/* <button type="button">Download</button> */}
      </a>
      <iframe
      className="resume"
      width="800px"
      height="2000px"
        src="https://drive.google.com/drive/folders/1JlqQKMyZ6P_a26SnnEUravvnM8tLUP0I"
      ></iframe>
      </div>
 
  );
};

export default Resume;
