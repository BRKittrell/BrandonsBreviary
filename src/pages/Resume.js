import React from "react";

const Resume = () => {
  return (
    <div className="resumeContainer">
      <a
        href="https://docs.google.com/document/d/1HI4MHzuOKxgUNG_nrBDfiwdJikVuVU2N/edit?usp=sharing&ouid=109943883740572144728&rtpof=true&sd=true"
        download="GFG"
      >
        {/* <button type="button">Download</button> */}
      </a>
      <iframe
        src="https://drive.google.com/file/d/1K2T8q5eEytfhZzNBL6qTb5KVV-3hCQhD/preview"
        width="800"
        height="2000"
        allow="autoplay"
      ></iframe>
    </div>
  );
};

export default Resume;
