import React from "react";

export default function Mainpage(props) {
  let cbg = {
    backgroundColor: `${props.palette.cardBG}`,
  };
  function selected(id) {
    let selectedText = document.querySelectorAll(".cardBottom");
    selectedText.forEach((text) => {
      text.innerHTML = "Select?";
    });
    selectedText[id].innerHTML = "Selected";
  }
  return (
    <div
      id="mainPage"
      style={{
        backgroundColor: `${props.palette.mainBG}`,
      }}
    >
      <div id="cardHolder">
        <div
          className="card"
          style={cbg}
          onClick={() => {
            props.changeFunc("#FDF0D5", "#003049", "#C1121F");
            selected(0);
          }}
        >
          <div className="cardTop">
            <div className="cos" style={{ backgroundColor: "#003049" }}></div>
            <div className="cos" style={{ backgroundColor: "#FDF0D5" }}></div>
            <div className="cos" style={{ backgroundColor: "#C1121F" }}></div>
          </div>
          <div className="cardBottom">Select?</div>
        </div>
        <div
          className="card"
          style={cbg}
          onClick={() => {
            props.changeFunc("#264653", "#F4A261", "#E76F51");
            selected(1);
          }}
        >
          <div className="cardTop">
            <div className="cos" style={{ backgroundColor: "#F4A261" }}></div>
            <div className="cos" style={{ backgroundColor: "#264653" }}></div>
            <div className="cos" style={{ backgroundColor: "#E76F51" }}></div>
          </div>
          <div className="cardBottom">Select?</div>
        </div>
        <div
          className="card"
          style={cbg}
          onClick={() => {
            props.changeFunc("#BDE0FE", "#FFC8DD", "#CDB4DB");
            selected(2);
          }}
        >
          <div className="cardTop">
            <div className="cos" style={{ backgroundColor: "#FFC8DD" }}></div>
            <div className="cos" style={{ backgroundColor: "#BDE0FE" }}></div>
            <div className="cos" style={{ backgroundColor: "#CDB4DB" }}></div>
          </div>
          <div className="cardBottom">Select?</div>
        </div>
      </div>
    </div>
  );
}
