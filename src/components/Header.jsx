import React from "react";
import "./header.css";

function Header() {
  return (
    <header>
      <div>
        <button className="btn">
          <i className="fa fa-bars fa-2x"></i>
        </button>
      </div>
      <div className="title">
        <h1>Wordle</h1>
      </div>
      <div className="settings">
        <button className="btn">
          <i className="fa fa-question fa-2x"></i>
        </button>
        <button className="btn">
          <i className="fa fa-ranking-star fa-2x"></i>
        </button>
        <button className="btn">
          <i className="fa fa-gear fa-2x"></i>
        </button>
      </div>
    </header>
  );
}

export default Header;
