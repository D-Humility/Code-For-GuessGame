import React, { useState } from "react";
import './App.css';
      
      
function App() {
  const [highScore, setHighScore] = useState(0);
  const [score, setScore] = useState(40);
  const [disp, setDisp] = useState('?');
  const [inputValue, setInputValue] = useState(0);
  const [isCorrect, setIsCorrect] = useState(true)
  const [mainValue, setMainValue] = useState(50)
  const [isCorrects, setIsCorrects] = useState(false)
  const [difficulty, setDifficulty] = useState(4)
  const [isModing, setModing] = useState(true);


  const mainValues = Math.floor((Math.random() * 40)+ 1);

  function start() {
    setMainValue(mainValues);
    setIsCorrect(false);
    setIsCorrects(true);
  }
  
  function Easy() {
    setDifficulty(4);
    let node = document.querySelectorAll('#info')[0];
    node.innerHTML = `<span>Start Guessing!!</span>`;
    setScore(40);
    setDisp("?")
    setInputValue(0);
    setIsCorrects(false);
    setIsCorrect(true);
  }

  function Difficult() {
    setDifficulty(6);
    let node = document.querySelectorAll('#info')[0];
    node.innerHTML = `<span>Start Guessing!!</span>`;
    setScore(40);
    setDisp("?")
    setInputValue(0);
    setIsCorrects(false);
    setIsCorrect(true);
  }

  function help() {
    var newline = "\r"
    var helpMessage = "This Is a Simple Guess Game."
    helpMessage += newline;
    helpMessage += "=> Click On The 'Start!' Button to Begin";
    helpMessage += newline;
    helpMessage += "=> You are Required to Guess a Number";
    helpMessage += newline;
    helpMessage += "=> The Generated Number is Between 1 to 40.";
    helpMessage += newline;
    helpMessage += "=> You can do this by Inputing Your Guess Number.";
    helpMessage += newline;
    helpMessage += "=> Then Click to Check if You are Correct.";
    helpMessage += newline;
    helpMessage += "=> If You're not, a Hint will be Provided to Show how Far You Are.";
    helpMessage += newline;
    helpMessage += "=> You have '10 Chances' in Easy Level and '7 Chances' in Difficult Level";
    helpMessage += newline;
    helpMessage += "=> If you Exhaust all Chances without Getting a Correct Guess, its GAME OVER!";
    helpMessage += newline;
    helpMessage += "=> ENJOY!!! <=";

    alert(helpMessage);
  }

  function check() {
    let node = document.querySelectorAll('#info')[0];
    if (inputValue < 0 || inputValue > 40) {
      alert("Input Value Must Range From 1 to 40")
    } else if (inputValue == 0) {
      node.innerHTML = `<span>No Number!</span>`;
    } else if (inputValue < mainValue) {
      node.innerHTML = `<span>Too Low!</span>`;
      setScore(score - difficulty);
    } else if (inputValue > mainValue) {
      node.innerHTML = `<span>Too High!</span>`;
      setScore(score - difficulty);
    } else if (inputValue == mainValue) {
      node.innerHTML = `<span>Correct Number</span>`;
      setIsCorrect(true);
      setIsCorrects(true);
      setDisp(inputValue);
    };
    if (score == 4) {
      node.innerHTML = `<span>You Lost the Game!</span>`;
      setIsCorrect(true);
      setIsCorrects(true);
    };
    if (inputValue == mainValue && score > highScore) {
      setHighScore(score);
    }
  }

  function retry() {
    /*
    Above the Start Button: <p id="mp">{mainValue}</p>

    let Mp = document.querySelectorAll('#mp')[0];
    Mp.innerHTML = `<span>${mainValue}</span>`;
    */
    let node = document.querySelectorAll('#info')[0];
    node.innerHTML = `<span>Start Guessing!!</span>`;
    setScore(40);
    setDisp("?")
    setInputValue(0);
    setIsCorrects(false);
    setIsCorrect(true);
  }

  const lightMode = (
    <div className="App Press Start 2P container border shadow pt-3">
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <a 
          className="nav-brand bg-light p-2 rounded" 
          href="https://github.com/D-Humility" 
          target="_blank"
          title="The Developer"
        >
          D-Humility
        </a>
        <button 
          className="navbar-toggler bg-light text-dark border" type="button" data-toggle="collapse" data-target="#collapsibleNavbar"
          title="Menu"
        >
          <span className="fa fa-bars"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item ml-2">
              <button 
                type="button" 
                className="btn btn-info" 
                title="Help/Instructions"
                onClick={help}
              >
                <span className="fa fa-question-circle-o"></span>
              </button>
            </li>
            <li className="nav-item dropdown ml-2">
              <button 
                type="button" 
                className="btn btn-light dropdown-toggle" 
                data-toggle="dropdown"
                title="Dark/Light Theme"
              >
                <span className="fa fa-adjust"></span>
              </button>
              <div className="dropdown-menu">
                <button 
                  type="button" 
                  className="btn bg-light text-dark border mr-2"
                  title="Light Mode"
                  onClick={() => {setModing(false)}}
                >
                  <span className="fa fa-lightbulb-o"></span>
                </button>
                <button 
                  type="button" 
                  className="btn bg-dark text-light border"
                  title="Dark Mode"
                  onClick={() => {setModing(true)}}
                >
                  <span className="fa fa-moon-o"></span>
                </button>
              </div>
            </li>
            <li className="nav-item dropdown ml-2">
              <button 
                type="button" 
                className="btn btn-secondary dropdown-toggle" 
                data-toggle="dropdown"
                title="Difficulty"
              >
                Level
              </button>
              <div className="dropdown-menu">
                <button 
                  type="button" 
                  className="dropdown-item btn bg-light text-dark border"
                  onClick={Easy}
                >
                  Easy
                </button>
                <button 
                  type="button" 
                  className="dropdown-item btn bg-warning text-light border"
                  onClick={Difficult}
                >
                  Difficult
                </button>
              </div>
            </li>
          </ul>
        </div>  
      </nav><br />
      <div className="row">
        <div className="col">
          <button 
            type="button" 
            className="btn border shadow bg-dark text-light"
            title="Retry"
            onClick={retry}
          >
            Again!
          </button>
        </div>
        <div className="col text-right">
          <p>(Between 1 and 40)</p>
        </div>
      </div>
      <div className="container mx-auto">
        <h2 className="text-center text-primary">Guess My Number!</h2>
      </div>
      <div className="container-fluid border border-right-0 border-left-0 h-25">
        <h1 className="mh-100 w-25 border shadow text-center mx-auto p-3 mt-1 font-weight-bold bg-dark text-light">
          {disp}
        </h1>
      </div>
      <div className="row">
        <div className="col text-center"><br />
          <button 
            type="submit" 
            className="btn mx-auto border shadow bg-dark text-light"
            disabled={isCorrects}
            onClick={start}
          >
            Start!
          </button><br /><br />
          <input 
            type="number" 
            id="val"
            className="mx-auto w-50 diplay-5 p-3 border-primary"
            value={inputValue} 
            disabled={isCorrect}
            onChange={(e) => {setInputValue(e.target.value);}}
          /><br /><br />
          <button 
            type="submit" 
            className="btn mx-auto border shadow bg-primary text-light"
            disabled={isCorrect}
            onClick={check}
          >
            Check!
          </button><br />
        </div>
        <div className="col"><br />
          <p id="info" className="text-primary">
            Start Guessing!!
          </p><br />
          <p>Score: {score}</p>
          <p className="font-effect-fire">Highscore: {highScore}</p>
        </div>
      </div><br />
      <div className="text-center border-top">
        <code>
          <a href="https://github.com/D-Humility" target="_blank">
            (c) okonkwomeshach@gmail.com
          </a>
        </code>
      </div>
    </div>
  );

  const darkMode = (
    <div className="App Press Start 2P container border shadow pt-3 bg-dark text-light">
      <nav className="navbar navbar-expand-sm bg-light">
        <a 
          className="nav-brand bg-dark p-2 rounded" 
          href="https://github.com/D-Humility" 
          target="_blank"
          title="The Developer"
        >
          D-Humility
        </a>
        <button 
          className="navbar-toggler border bg-dark text-light" type="button" data-toggle="collapse" data-target="#collapsibleNavbar"
          title="Menu"
        >
          <span className="fa fa-bars"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item ml-2">
              <button 
                type="button" 
                className="btn btn-info" 
                title="Help/Instructions"
                onClick={help}
              >
                <span className="fa fa-question-circle-o"></span>
              </button>
            </li>
            <li className="nav-item dropdown ml-2">
              <button 
                type="button" 
                className="btn btn-dark dropdown-toggle" 
                data-toggle="dropdown"
                title="Dark/Light Theme"
              >
                <span className="fa fa-adjust"></span>
              </button>
              <div className="dropdown-menu bg-dark">
                <button 
                  type="button" 
                  className="btn bg-light text-dark border mr-2"
                  title="Light Mode"
                  onClick={() => {setModing(false)}}
                >
                  <span className="fa fa-lightbulb-o"></span>
                </button>
                <button 
                  type="button" 
                  className="btn bg-dark text-light border"
                  title="Dark Mode"
                  onClick={() => {setModing(true)}}
                >
                  <span className="fa fa-moon-o"></span>
                </button>
              </div>
            </li>
            <li className="nav-item dropdown ml-2">
              <button 
                type="button" 
                className="btn btn-secondary dropdown-toggle" 
                data-toggle="dropdown"
                title="Difficulty"
              >
                Level
              </button>
              <div className="dropdown-menu bg-dark">
                <button 
                  type="button" 
                  className="dropdown-item btn bg-light text-dark border"
                  onClick={Easy}
                >
                  Easy
                </button>
                <button 
                  type="button" 
                  className="dropdown-item btn bg-warning text-light border"
                  onClick={Difficult}
                >
                  Difficult
                </button>
              </div>
            </li>
          </ul>
        </div>  
      </nav><br />
      <div className="row">
        <div className="col">
          <button 
            type="button" 
            className="btn border shadow bg-light text-dark"
            title="Retry"
            onClick={retry}
          >
            Again!
          </button>
        </div>
        <div className="col text-right">
          <p>(Between 1 and 40)</p>
        </div>
      </div>
      <div className="container mx-auto">
        <h2 className="text-center text-light">Guess My Number!</h2>
      </div>
      <div className="container-fluid border border-right-0 border-left-0 h-25">
        <h1 className="mh-100 w-25 border shadow text-center mx-auto p-3 mt-1 font-weight-bold bg-light text-dark">
          {disp}
        </h1>
      </div>
      <div className="row">
        <div className="col text-center"><br />
          <button 
            type="submit" 
            className="btn mx-auto border shadow bg-light text-dark"
            disabled={isCorrects}
            onClick={start}
          >
            Start!
          </button><br /><br />
          <input 
            type="number" 
            id="val"
            className="mx-auto w-50 diplay-5 p-3 border-primary"
            value={inputValue} 
            disabled={isCorrect}
            onChange={(e) => {setInputValue(e.target.value);}}
          /><br /><br />
          <button 
            type="submit" 
            className="btn mx-auto border shadow bg-primary text-light"
            disabled={isCorrect}
            onClick={check}
          >
            Check!
          </button><br />
        </div>
        <div className="col"><br />
          <p id="info" className="text-primary">
            Start Guessing!!
          </p><br />
          <p>Score: {score}</p>
          <p className="font-effect-fire">Highscore: {highScore}</p>
        </div>
      </div><br />
      <div className="text-center border-top">
        <code>
          <a href="https://github.com/D-Humility" target="_blank">
            (c) okonkwomeshach@gmail.com
          </a>
        </code>
      </div>
    </div>
  );

  return <>{isModing ? darkMode : lightMode}</>;
}

export default App;
