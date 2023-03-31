import React, { useEffect, useState } from 'react';

import {useDispatch, useSelector} from 'react-redux';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import {initializeCountries} from "../features/countriesSlice";
import Spinner from 'react-bootstrap/Spinner';
import {addFavourite, removeFavourite} from '../features/favouritesSlice';





const Countries = () => {
  const dispatch = useDispatch();
  const countriesList = useSelector((state) => state.countries.countries)
  const loading = useSelector((state) => state.countries.isLoading)
  const [search, setSearch] = useState('')
  const favouritesList= useSelector((state) => state.favourites.favourites);



  useEffect(() => {
    dispatch(initializeCountries())
  },[dispatch])

  

  return (
    <Container fluid>
      <Row>
        <Col className="mt-5 d-flex justify-content-center">
          <Form>
            <Form.Control
              style={{ width: '18rem' }}
              type="search"
              className="me-2 "
              placeholder="Search for countries"
              aria-label="Search"
              onChange={(e) => setSearch(e.target.value)}
            />
          </Form>
        </Col>
      </Row>
      
      <Row xs={2} md={3} lg={4} className="g-3">
        {(loading) ? <Spinner  animation="border" variant="primary"  /> : ''}
        
      
        {countriesList.filter((c) => {
          return c.name.official
          .toLowerCase()
          .includes(search.toLowerCase());
        }).map((country)=>(  
          
          <Col className="mt-5">
            
            {favouritesList.includes(country.name.common) ? (
                      <i
                        className="bi bi-heart-fill text-danger m-1 p-1"
                        onClick={() =>
                          dispatch(removeFavourite(country.name.common))
                        }
                      ></i>
                    ) : (
                      <i
                        className="bi bi-heart text-danger m-1 p-1"
                        onClick={() =>
                          dispatch(addFavourite(country.name.common))
                        }
                      ></i>
                    )}
          <Link
            to={`/countries/${country.name.common}`}
            state={{ country: country }}
          >
            
            <Card className="h-100">
            

           
            
              <Card.Body className="d-flex flex-column">

                <Card.Img
                className='mb-4' 
                src={country.flags.svg} 
                alt="image not found"
        onError={event => {
          event.target.src = "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1429&q=80"
          event.onerror = null
        }}/>
            
                <Card.Title>{country.name.common}</Card.Title>
                <Card.Subtitle className="mb-5 text-muted">
                  {country.name.official}
                </Card.Subtitle>
                <Card.Subtitle className="mb-5 text-muted">Capital:
                  {country.capital}
                </Card.Subtitle>
                <ListGroup
                  variant="flush"
                  className="flex-grow-1 justify-content-end"
                >
                  <ListGroup.Item>
                    
                    <i className="bi bi-translate me-2"></i>
                    {Object.values(country.languages?? {}).join(',')}
                    {/* {country.languages ? Object.values(country.languages).join(", ")
                    : "__"} */}
                  </ListGroup.Item>
                  <ListGroup.Item>
                  
                    <i className="bi bi-cash-coin me-2"></i>
                    {country.currencies ? Object.values(country.currencies).map((currency) =>currency.name).join(","): "__"}
                    
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <i className="bi bi-people me-2"></i>
                    {(country.population).toLocaleString('en-US')}
                  </ListGroup.Item>

                  <ListGroup.Item>
                          <i className="bi bi-cash-coin me-2"></i>
                          <span>
                            {country.currencies
                              ? Object.values(country.currencies)
                                  .map((currency) => currency.name)
                                  .join(", ")
                              : "---"}
                          </span>
                        </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Link>
        </Col> 
        ))}
            
      </Row>
    </Container>
  );
};
                

export default Countries;