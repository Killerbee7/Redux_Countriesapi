import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate} from 'react-router-dom';
import { Container, Spinner } from 'react-bootstrap';
import {Row, Col, Image, Button} from 'react-bootstrap';

const CountriesSingle = () => {

  const location = useLocation();
  const navigate= useNavigate();
  const country = location.state.country;
 const [weather, setWeather]= useState('');
 const [error, setError]= useState(false);
 const [loading, setLoading]= useState(false);
 

 



  useEffect(() => {

    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&units=metric&appid=${process.env.REACT_APP_OPENWEATHER_KEY}`)

    .catch((error) =>
    setError(true))
    
    .then((res) =>{
      setWeather(res.data);
      setError(false)
      setLoading(false)
    })

  },[country.capital])

  console.log(weather)
  console.log(country)

  if(loading){
    return (
      <Col className='text-center m-5'>
        <Spinner 
        animation='border'
        role="status"
        classname="center"
        varient="info"
        >
          <span className='visually-hidden'>Loading...</span>

        </Spinner>
      </Col>
    )
  }
  return (
    <Container>
      <Row className='m-5'>
      <Col> {' '}
        <Image thumbnail src={`https://source.unsplash.com/featured/1600x900?${country.flag.svg}`}/>
        <h1>{country.capital}</h1>
      </Col>
      <Col>
      <h2 className='display-4'>{country.name.common}</h2>
      <h3>{country.capital}</h3>
      {!error && weather && (
        <div>
          <p>
            Temperature is <strong>{weather.main.temp}</strong> degrees in {country.capital} and {weather.weather[0].description}
          </p>
          <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="" />
        </div>
      )}
      </Col>
      </Row>

      <Row>
        <Col>
        <Button varient="light" onClick={() => navigate(-1)}>Back</Button>
        </Col>
      </Row>
     
    </Container>
  );
};

export default CountriesSingle;
