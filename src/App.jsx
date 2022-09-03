import React, { useState, useEffect } from "react";
// import "./App.css";
import Header from "./components/Header";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import { WORDS as Words } from "../public/words.js";

function App() {
  const [word, setWord] = useState(
    Words[Math.floor(Math.random() * Words.length)]
  );
  const [currentRow, setCurrentRow] = useState(1);
  const [currentGuess, setCurrentGuess] = useState([]);
  const [currentStreak, setCurrentStreak] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const alpha = [
    "KeyA",
    "KeyB",
    "KeyC",
    "KeyD",
    "KeyE",
    "KeyF",
    "KeyG",
    "KeyH",
    "KeyI",
    "KeyJ",
    "KeyK",
    "KeyL",
    "KeyM",
    "KeyN",
    "KeyO",
    "KeyP",
    "KeyQ",
    "KeyR",
    "KeyS",
    "KeyT",
    "KeyU",
    "KeyV",
    "KeyW",
    "KeyX",
    "KeyY",
    "KeyZ",
  ];

  function fireEvent({ target }) {
    const object = { code: null };
    if (target.innerText.toLowerCase() === "enter") {
      object.code = "Enter";
      printKey(object);
    } else if (target.innerText.toLowerCase() === "delete") {
      object.code = "Backspace";
      printKey(object);
    } else {
      object.code = `Key${target.innerText.toUpperCase()}`;
      printKey(object);
    }
  }

  function wrong(message) {
    const divMessage = document.getElementById("message");
    divMessage.style.display = "block";
    divMessage.innerText = message;
    setTimeout(() => {
      divMessage.style.display = "none";
      divMessage.innerText = "";
    }, 2000);
  }

  function printKey(e) {
    let key = e.code;
    if (alpha.includes(key)) {
      if (currentGuess.length >= 5) return;
      setCurrentGuess((prev) => {
        return [...prev, key.split("")[3]];
      });
    } else if (key === "Enter") {
      if (currentGuess.length !== 5) {
        wrong("Not Enough Letters!");
        return;
      }
      if (!Words.includes(currentGuess.join("").toLowerCase())) {
        wrong("Word Doesn't Exist");
        return;
      }
      if (word === currentGuess.join("").toLowerCase()) {
        colorRows(); // THIS A W
        // Some functionality to count wins
        return;
      }
      if (currentRow === 6) {
        colorRows(); // THIS A L
        return;
      }
      colorRows(); // Some functionality to color row, before setting new row.
      setCurrentGuess([]);
      updateRow();
      setCurrentRow((prev) => {
        return prev + 1;
      });
    } else if (key === "Backspace") {
      if (currentGuess.length === 0) return;
      setCurrentGuess((prev) => {
        let newArr = [...prev];
        newArr.pop();
        return [...newArr];
      });
    }
  }

  function colorKey(key, color) {
    const div = document.getElementById(key);
    if (div.classList.contains(color)) return;
    div.classList.add(color);
  }

  function colorRows() {
    const currentDivs =
      document.querySelectorAll(".row")[currentRow - 1].childNodes;
    currentDivs.forEach((div, index) => {
      if (div.innerText === word.split("")[index].toUpperCase()) {
        colorKey(div.innerText, "green");
        div.classList.add("green");
      } else if (word.toUpperCase().split("").includes(div.innerText)) {
        colorKey(div.innerText, "orange");
        div.classList.add("orange");
      } else {
        colorKey(div.innerText, "dark");
        div.classList.add("gray");
      }
    });
  }

  function updateRow() {
    for (let i = 0; i < 5; i++) {
      document.querySelectorAll(".row")[currentRow - 1].childNodes[
        i
      ].innerText = currentGuess[i] || "";
    }
  }
  useEffect(() => {
    console.log(currentGuess);
    console.log(word, currentRow);
    updateRow();
  }, [currentGuess]);

  useEffect(() => {
    document.addEventListener("keydown", printKey);
    return () => {
      document.removeEventListener("keydown", printKey);
    };
  });

  function resetGame() {
    console.log("hi");
    const rows = document.querySelectorAll(".row");
    rows.forEach((row, index) => {
      row.childNodes.forEach((div, index) => {
        div.classList.remove("green");
        div.classList.remove("orange");
        div.classList.remove("gray");
        div.innerText = "";
      });
    });
    const keys = document.querySelectorAll(".key");
    keys.forEach((key) => {
      key.classList.remove("dark");
      key.classList.remove("green");
      key.classList.remove("orange");
    });
    setCurrentRow(1);
    setCurrentGuess([]);
    setWord(Words[Math.floor(Math.random() * Words.length)]);
  }

  return (
    <div className="App">
      <Header resetGame={resetGame} />
      <Board />
      <Keyboard fireEvent={fireEvent} />
    </div>
  );
}

export default App;
