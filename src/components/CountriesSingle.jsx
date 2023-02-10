import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';

import { Container } from 'react-bootstrap';

const CountriesSingle = () => {

 const [weather, setWeather]= useState('');


  const countryTest ={
    capital:"Helsinki"
  } 

  useEffect(() => {

    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${countryTest.capital}&units=metric&appid=${process.env.REACT_APP_OPENWEATHER_KEY}`)
    
    .then((res) =>{
      setWeather(res.data);
      
    })

  },[countryTest.capital])

  console.log(weather)

  return (
    <Container>
      
    </Container>
  );
};

export default CountriesSingle;
