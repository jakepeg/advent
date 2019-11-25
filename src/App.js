import React, { useState } from "react";
import "./App.css";
import data from "./doors.json";
import { Helmet } from "react-helmet";
import CookieConsent from "react-cookie-consent";

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
    <div>
      <Helmet>
        <title>Advent Calendar</title>
        <meta name="description" content="Online Advent Calendar" />
      </Helmet>
      <h1>Christmas is coming!</h1>
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
      <CookieConsent>
        This website uses cookies to enhance the user experience.
      </CookieConsent>
    </div>
  );
}

export default App;
