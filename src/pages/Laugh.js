import React, { useState } from "react";
import { BsFillHandThumbsUpFill, BsFillHandThumbsDownFill } from "react-icons/bs";

const JustForLaughs = () => {
  const [joke, setJoke] = useState("");
  const [punchline, setPunchline] = useState("");
  const [thumbsDown, setThumbsDown] = useState(false);
  const [thumpsUp, setThumbsUp] = useState(false);

  const badJoke = () =>{
    setThumbsDown(true);
    setThumbsUp(false)
  }

  const goodJoke = () =>{
    setThumbsDown(false);
    setThumbsUp(true)
  }

  const handleClick = () => {
    setThumbsDown(false)
    setThumbsUp(false)
    fetch("https://official-joke-api.appspot.com/jokes/random")
      .then((response) => response.json())
      .then((joke) => {
        setJoke(joke.setup);
        setPunchline(joke.punchline);
      });
  };

  return (
    <>
      <div>
        <div className="jokeDiv">
        {joke}
        <div>
        {punchline}
        </div>
        </div>
        <div>
          <BsFillHandThumbsUpFill className="icon" onClick={goodJoke}/>
          <button onClick={handleClick}>Tell Me A Joke!</button>
          <BsFillHandThumbsDownFill className="icon" onClick={badJoke}/>
        </div>
      </div>
      <div> {thumbsDown?
        <iframe
          src="https://giphy.com/embed/r2puuhrnjG7vy"
          width="480"
          height="271"
          frameBorder="0"
          class="giphy-embed"
          allowFullScreen
        ></iframe>:null
      }
      </div>
      <div> {thumpsUp?
        <iframe
          src="https://giphy.com/embed/XBCJIv6xAyDfrajXoe"
          width="480"
          height="400"
          frameBorder="0"
          class="giphy-embed"
          allowFullScreen
        ></iframe>:null
      }
      </div>
    </>
  );
};

export default JustForLaughs;
