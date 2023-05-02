import React from "react";

import Background from "../images/globe.jpg";
import axios from "axios";


const buttonHandler=async()=> {
  const {data}= await axios.post("https://exove.vercel.app/api/login", {
    username:"newton",
    password:"password"
  },{withCredentials:true})
if(data)
{
  await fetchHandler()
  
  await reqPicks();

}
  console.log(data)
}
const reqPicks = async () =>{
  const {data} = await axios.get('https://exove.vercel.app/api/picks', {withCredentials:true})
  console.log(data)
  return data
}

const fetchHandler = async ()=>{
  const {data}= await axios.get("https://exove.vercel.app/api", {withCredentials:true})

console.log(data)
return data
  
 }

const Home = () => {
  return (
    <div
      style={{
        backgroundImage: "url(" + Background + ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "95vh",
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
            <button onClick={buttonHandler}>Press Me</button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
