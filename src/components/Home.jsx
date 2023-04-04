import React from "react";

import Background from "../images/globe.jpg";

const Home = () => {
  return (
    <div
      style={{
        backgroundImage: "url(" + Background + ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "90vh",
      }}
    >
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ width: "50vw" }}></div>
        <div className="p-5 text-success ">
          <h1
            style={{
              marginBottom: "300px",
              fontSize: "60px",
              position: "absolute",
              top: "60px",
              right: "16px",
            }}
          >
            Countries Bootstrap Application{" "}
          </h1>
          <div
            style={{
              textAlign: "right",
              top: "45%",

              right: "16px",
              position: "absolute",
              fontSize: "30px",
              display: "flex",
              flexDirection: "column",
              fontColor: "red",
            }}
          >
            <a href="https://restcountries.com/">Rest Countries API</a>

            <a className="m-6" href="https://openweathermap.org/">
              Open Weather API
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
