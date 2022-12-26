import React from "react";

const Videos = () =>{
return(
    <div>
    <p> Please enjoy a sampling of my YouTube Channel, <a className="PERNPitLink" href="https://www.youtube.com/channel/UC-0Si-TWcB06I6qkmGeTzaQ" target="_blank" rel="noreferrer"><em className="PERNPitLink">The PERN Pit!</em></a></p>
    <div className="videoDiv">
        <iframe className="iframe" width="560" height="315" src="https://www.youtube.com/embed/JGizbfiawbs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe className="iframe" width="560" height="315" src="https://www.youtube.com/embed/pE6t0CGgbFc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    </div>
)
}

export default Videos