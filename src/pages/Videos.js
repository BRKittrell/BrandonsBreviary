import React from "react";

const Videos = () =>{


return(
    <div>
    <p> Please enjoy a sampling of my YouTube Channel, <a  href="https://www.youtube.com/channel/UC-0Si-TWcB06I6qkmGeTzaQ" target="_blank" rel="noreferrer"><em className="externalLink">The PERN Pit!</em></a></p>
    {/* <p>What do you want to learn about?</p> */}
    {/* <select>
    <option>Select...</option>
    <option>PERN Stack</option>
    <option>Algorithms</option>
    <option>React</option>
    <option>HTML</option>
    <option>CSS</option>
    </select> */}
    <div className="videoDiv">
        <iframe className="iframe" width="560" height="315" src="https://www.youtube.com/embed/JGizbfiawbs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe className="iframe" width="560" height="315" src="https://www.youtube.com/embed/pE6t0CGgbFc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    </div>
)
}

export default Videos