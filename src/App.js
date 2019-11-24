import React, { useState, useEffect } from "react";
import "./App.css";
import data from "./doors.json";

function App() {
  const clearLocalData = () => {
    localStorage.clear();
    console.log("clear localData");
  };

  let localData = JSON.parse(localStorage.getItem("openedDoors"));

  const [openedArr, setOpenedArr] = useState(localData ? localData : []);
  const month = 10;
  const today = new Date();

  const openDoor = e => {
    let correctedDay = parseInt(e.currentTarget.id) - parseInt(1);
    if (today.getDate() >= e.currentTarget.id && today.getMonth() === month) {
      e.currentTarget.childNodes[0].classList.add("opened");
      e.currentTarget.parentElement.classList.add("glow");
      const newValue = [...openedArr, e.currentTarget.id];
      setOpenedArr(newValue);
      localStorage.setItem("openedDoors", JSON.stringify(newValue));
      localData = JSON.parse(localStorage.getItem("openedDoors"));
    }
  };

  return (
    <ul className="image-grid">
      {data.map(item => (
        <li
          key={item.door}
          className={
            JSON.stringify(localData).includes(item.door) ? "glow" : ""
          }
        >
          <div onClick={openDoor} id={item.door} className="flip-container">
            <div
              className={
                JSON.stringify(localData).includes(item.door)
                  ? "flipper opened"
                  : "flipper"
              }
            >
              <div className="front">
                <p>{item.door}</p>
              </div>
              <div className="back">
                <img key={item.door} src={item.image} alt="xmas" />
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default App;
