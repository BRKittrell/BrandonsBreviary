import React from "react";
import fishing from "../images/AlaskaFish.jpeg"
import OIF from "../images/OIF.jpeg"
import CSEL from "../images/CSEL.jpeg"
import PSUMSUGame from "../images/PSUMSUGame.jpeg"
import RickieFowler from "../images/RickieFowler.jpeg"
import Roo from "../images/Roo.jpeg"



const Personal = () =>{
    return (
      <>
        <div className="personalDiv">
        <div className="personalImageDiv">
          <img class="personalImages" src={CSEL}/>
          <p>Command Senior Enlisted Leader, 9th Coast Guard District</p>
        </div>

        <div className="personalImageDiv">
          <img class="personalImages" src={fishing}/>
          <p>My family's fishing trip in Ketchikan, Alaska.</p>
        </div>
       
        <div className="personalImageDiv">
          <img class="personalImages" src={OIF}/>
          <p>Operation Iraqi Freedom, 2003</p>
        </div>

        <div className="personalImageDiv">
          <img class="personalImages" src={PSUMSUGame}/>
          <p>Penn State vs. Michigan State Football</p>
        </div>
    
        <div className="personalImageDiv">
          <img class="personalImages" src={RickieFowler}/>
          <p>My daughter with Rickie Fowler at the Rocket Mortgage Classic. He won!</p>
        </div>
         
        <div className="personalImageDiv">
          <img class="personalImages" src={Roo}/>
          <p>We love our Aussie, Roo, too!</p>
        </div>

        </div>
      </>
    )
}

export default Personal;
