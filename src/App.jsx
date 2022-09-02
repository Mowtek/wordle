import { useState } from "react";
// import "./App.css";
import Header from "./components/Header";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";

function App() {
  return (
    <div className="App">
      <Header />
      <Board />
    </div>
  );
}

export default App;
