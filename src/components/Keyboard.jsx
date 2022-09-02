import React from "react";
import "./keyboard.css";

function Keyboard({ fireEvent }) {
  return (
    <div className="keyboard">
      <div className="keyrow">
        <div className="key" id="Q" onClick={fireEvent}>
          Q
        </div>
        <div className="key" id="W" onClick={fireEvent}>
          W
        </div>
        <div className="key" id="E" onClick={fireEvent}>
          E
        </div>
        <div className="key" id="R" onClick={fireEvent}>
          R
        </div>
        <div className="key" id="T" onClick={fireEvent}>
          T
        </div>
        <div className="key" id="Y" onClick={fireEvent}>
          Y
        </div>
        <div className="key" id="U" onClick={fireEvent}>
          U
        </div>
        <div className="key" id="I" onClick={fireEvent}>
          I
        </div>
        <div className="key" id="O" onClick={fireEvent}>
          O
        </div>
        <div className="key" id="P" onClick={fireEvent}>
          P
        </div>
      </div>
      <div className="keyrow">
        <div className="key" id="A" onClick={fireEvent}>
          A
        </div>
        <div className="key" id="S" onClick={fireEvent}>
          S
        </div>
        <div className="key" id="D" onClick={fireEvent}>
          D
        </div>
        <div className="key" id="F" onClick={fireEvent}>
          F
        </div>
        <div className="key" id="G" onClick={fireEvent}>
          G
        </div>
        <div className="key" id="H" onClick={fireEvent}>
          H
        </div>
        <div className="key" id="J" onClick={fireEvent}>
          J
        </div>
        <div className="key" id="K" onClick={fireEvent}>
          K
        </div>
        <div className="key" id="L" onClick={fireEvent}>
          L
        </div>
      </div>
      <div className="keyrow">
        <div className="funci long" onClick={fireEvent}>
          ENTER
        </div>
        <div className="key" id="Z" onClick={fireEvent}>
          Z
        </div>
        <div className="key" id="X" onClick={fireEvent}>
          X
        </div>
        <div className="key" id="C" onClick={fireEvent}>
          C
        </div>
        <div className="key" id="V" onClick={fireEvent}>
          V
        </div>
        <div className="key" id="B" onClick={fireEvent}>
          B
        </div>
        <div className="key" id="N" onClick={fireEvent}>
          N
        </div>
        <div className="key" id="M" onClick={fireEvent}>
          M
        </div>
        <div className="funci long" onClick={fireEvent}>
          {/* <i className="fa fa-delete-left fa-2x"></i> */}
          DELETE
        </div>
      </div>
    </div>
  );
}

export default Keyboard;
