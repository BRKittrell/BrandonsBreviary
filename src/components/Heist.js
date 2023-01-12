import React, { useEffect, useState } from "react";

const Heist = () => {

    const previousGuesses = []
    const numberOFGuesses = 0

    const [combination1, setCombination1] = useState(0)
    const [combination2, setCombination2] = useState(0)
    const [combination3, setCombination3] = useState(0)
    const [combination4, setCombination4] = useState(0)

    const [firstNumber, setFirstNumber] = useState(0);
    const [secondNumber, setSecondNumber] = useState(0)
    const [thirdNumber, setThirdNumber] = useState(0)
    const [fourthNumber, setFourthNumber] = useState(0)

    useEffect(()=>{
    setCombination1 (Math.floor(Math.random())*9)
    console.log(combination1)
    setCombination2 (Math.floor(Math.random()) * 9)
    console.log(combination2)
    setCombination3 (Math.floor(Math.random()) * 9)
    setCombination4 (Math.floor(Math.random()) * 9)
}, [])

    const guessForm = (e)=>{
        e.preventdefault();
        localStorage.setItem('comboGuess1')
    }

  return (
    <>
    <h1><em>HEIST!</em></h1>
    <p>Only four numbers stand between you and the payoff!</p>
    <p>If you can guess the combination in <em>10 guesses</em>, you win!</p>
    <p>If you lose, you are busted!</p>
    <div className="heistDiv">
      <div className="keypad">
         <div>
          <form className="guessDisplay" onSubmit={guessForm}>
            <input id="comboGuess1" className="comboGuess" maxLength='1'></input>
            <input id="comboGuess2" className="comboGuess" maxLength='1'></input>
            <input id="comboGuess3" className="comboGuess" maxLength='1'></input>
            <input id="comboGuess4" className="comboGuess" maxLength='1'></input>
          </form>
        </div>
        <button className="keypadButton">Enter</button>
      </div>
      <button className="keypadButton">Play Again</button>
    </div>
    </>
  );
};

export default Heist;
