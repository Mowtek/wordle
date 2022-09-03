import React, { useState, useEffect } from "react";
import "./board.css";
import Row from "./Row";
import { WORDS as Words } from "../../public/words.js";
import Keyboard from "./Keyboard";

function Board() {
  const [word, setWord] = useState(
    Words[Math.floor(Math.random() * Words.length)]
  );
  const [currentRow, setCurrentRow] = useState(1);
  const [currentGuess, setCurrentGuess] = useState([]);

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

  function printKey(e) {
    let key = e.code;
    if (alpha.includes(key) || alpha.includes(`Key`)) {
      if (currentGuess.length >= 5) return;
      setCurrentGuess((prev) => {
        return [...prev, key.split("")[3]];
      });
    } else if (key === "Enter") {
      if (currentGuess.length !== 5) {
        alert("Not enough Letters!");
        return;
      }
      if (!Words.includes(currentGuess.join("").toLowerCase())) {
        alert(`No such word as ${currentGuess.join("")}!`);
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

  return (
    <div>
      <div className="contain">
        <div className="board">
          <Row row={1} />
          <Row row={2} />
          <Row row={3} />
          <Row row={4} />
          <Row row={5} />
          <Row row={6} />
        </div>
      </div>
      <Keyboard fireEvent={fireEvent} />
    </div>
  );
}

export default Board;
