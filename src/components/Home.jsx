import React from 'react';

import Background from '../images/globe.jpg'

const Home = () => {
  return (
    <div style={{backgroundImage: "url(" + Background + ")", backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat', height: "95vh"} }>
      <div style={{display: "flex", flexDirection: "row", }}>
      <div style={{width: "50vw"}}></div>
      <div style={{marginTop: "25%", marginLeft: "30%"}}>
        <span>Countries app </span>is a simple React application made in
        Business College Helsinki lessons. App uses{' '}
        <a href="https://restcountries.com/">https://restcountries.com/ </a> and{' '}
        <a href="https://openweathermap.org/">https://openweathermap.org/</a>
      </div>
      </div>
    </div>
  );
};

export default Home;
