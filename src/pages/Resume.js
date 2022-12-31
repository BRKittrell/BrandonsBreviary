import React from "react";

const Resume = () => {
  return (
<div className="resumeContainer">
    <a href="https://docs.google.com/document/d/e/2PACX-1vQBtweF02PahfNiX-7jMwZp74KKjZXIEM3NMTw5_YLGznfW5sSE34eZerXPnSCPig/pub?embedded=true" download='GFG'>
    <button type="button">Download</button>
      </a>
      <iframe
      className="resume"
      width="800px"
      height="2000px"
        src="https://docs.google.com/document/d/e/2PACX-1vQBtweF02PahfNiX-7jMwZp74KKjZXIEM3NMTw5_YLGznfW5sSE34eZerXPnSCPig/pub?embedded=true"
      ></iframe>
      </div>
 
  );
};

export default Resume;
