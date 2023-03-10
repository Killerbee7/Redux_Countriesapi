import React from 'react';

import Background from '../images/globe.jpg'

const Home = () => {
  return (
    <div style={{backgroundImage: "url(" + Background + ")", backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat', height: "95vh"} }>
      <div style={{display: "flex", flexDirection: "row", }}>
      <div style={{width: "50vw"}}></div>
      <div style={{marginTop: "10%", marginLeft: "10%", color:"red"}}>
        <h1 style={{marginBottom: "300px", fontSize: "60px", border: "dotted"}} >Countries app </h1>
        
        <h2><a  href="https://restcountries.com/">https://restcountries.com/ </a> {' '}</h2>
        <h2><a href="https://openweathermap.org/">https://openweathermap.org/</a></h2>
        
      </div>
      </div>
    </div>
  );
};

export default Home;
