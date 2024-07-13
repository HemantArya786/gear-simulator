import { useState } from "react";
import Webcam from "react-webcam";
import "./App.css";

export default function App() {
  const [geartNumber, setGearNumber] = useState("N");
  const [clutchPress, setClutchPress] = useState(false);

  var audio = new Audio("./gear.mp3");

  const displayNumber = (num) => {
    setGearNumber(num);
    setClutchPress(!clutchPress);
    audio.play();
    console.log(num);
  };

  console.log(clutchPress);

  return (
    <main className="main-div">
      <div>
        <h1
          className="font-racing"
          style={{ color: "white", fontSize: "60px", textAlign: "center" }}
        >
          Gear
        </h1>
        <h1
          className="font-racing"
          style={{ color: "red", fontSize: "60px", textAlign: "center" }}
        >
          Simulator
        </h1>
      </div>
      <div className="App" style={{ display: "flex", flexDirection: "column" }}>
        <h1
          style={{
            color: "green",
            width: 50,
            textAlign: "center",
            fontSize: "60px",
          }}
          className="font-orbi"
        >
          {geartNumber}
        </h1>

        <div>
          <button
            className="font-racing"
            onClick={() => {
              setClutchPress(!clutchPress);
            }}
            style={{
              width: "200px",
              height: "100px",
              marginBottom: "50px",

              backgroundColor: clutchPress ? "red" : "green",
            }}
          >
            Clutch
          </button>
        </div>

        <div style={{ gap: "2px" }}>
          <div>
            <button
              disabled={!clutchPress}
              onClick={() => displayNumber(1)}
              className="font-orbi"
              style={{
                width: "70px",
                height: "70px",
                borderRadius: " 50px",
                color: geartNumber == 1 ? "black" : "white",
                border: geartNumber == 1 ? "2px solid white " : "none",
                backgroundColor: geartNumber == 1 ? "grey" : "transparent",
              }}
            >
              1
            </button>
            <button
              disabled={!clutchPress}
              onClick={() => displayNumber(3)}
              className="font-orbi"
              style={{
                width: "70px",
                height: "70px",
                borderRadius: " 50px",
                color: geartNumber == 3 ? "black" : "white",
                border: geartNumber == 3 ? "2px solid white " : "none",
                backgroundColor: geartNumber == 3 ? "grey" : "transparent",
              }}
            >
              3
            </button>

            <button
              disabled={!clutchPress}
              onClick={() => displayNumber("5")}
              className="font-orbi"
              style={{
                width: "70px",
                height: "70px",
                borderRadius: " 50px",
                color: geartNumber == 5 ? "black" : "white",
                border: geartNumber == 5 ? "2px solid white " : "none",

                backgroundColor: geartNumber == 5 ? "grey" : "transparent",
              }}
            >
              5
            </button>
          </div>

          <div style={{ position: "relative" }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div
                style={{
                  height: "20px",
                  border: "2px solid white",
                  width: "30px",
                  borderTopWidth: 0,
                }}
              ></div>
              <div
                style={{
                  height: "20px",
                  border: "2px solid white",
                  width: "30px",
                  borderTopWidth: 0,
                }}
              ></div>
            </div>
            <button
              disabled={!clutchPress}
              onClick={() => displayNumber("N")}
              className="font-orbi"
              style={{
                textAlign: "center",
                width: "20px",
                padding: 0,
                height: "20px",
                color: "black",
                position: "absolute",
                right: 50,
                top: 10,
                backgroundColor: "white",
                border: geartNumber == "N" ? "2px solid gray " : "none",
                fontWeight: "bold",
              }}
            >
              <p style={{ color: "black", padding: 0, margin: 0 }}>N</p>
            </button>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div
                style={{
                  height: "20px",
                  border: "2px solid white",
                  width: "30px",
                  borderBottomWidth: 0,
                }}
              ></div>
              <div
                style={{
                  height: "20px",
                  border: "2px solid white",
                  width: "30px",
                  borderBottomWidth: 0,
                }}
              ></div>
            </div>
          </div>

          {/* <div style={{display:"flex" ,flexDirection:"row" , justifyContent:"center"}}>
     
       </div> */}
          <div>
            <button
              disabled={!clutchPress}
              onClick={() => displayNumber(2)}
              className="font-orbi"
              style={{
                width: "70px",
                height: "70px",
                borderRadius: " 50px",
                color: geartNumber == 2 ? "black" : "white",
                border: geartNumber == 2 ? "2px solid white " : "none",
                backgroundColor: geartNumber == 2 ? "grey" : "transparent",
              }}
            >
              2
            </button>

            <button
              disabled={!clutchPress}
              onClick={() => displayNumber("4")}
              className="font-orbi"
              style={{
                width: "70px",
                height: "70px",
                borderRadius: " 50px",
                color: geartNumber == 4 ? "black" : "white",
                border: geartNumber == 4 ? "2px solid white " : "none",
                backgroundColor: geartNumber == 4 ? "grey" : "transparent",
              }}
            >
              4
            </button>
            <button
              disabled={!clutchPress}
              onClick={() => displayNumber("R")}
              className="font-orbi"
              style={{
                width: "70px",
                height: "70px",
                borderRadius: " 50px",
                color: geartNumber == "R" ? "black" : "white",
                border: geartNumber == "R" ? "2px solid white " : "none",
                backgroundColor: geartNumber == "R" ? "grey" : "transparent",
              }}
            >
              R
            </button>
          </div>
        </div>
      </div>
      {geartNumber == "R" ? <Webcam /> : null}
    </main>
  );
}
