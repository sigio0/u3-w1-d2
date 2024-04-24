import React, { Component } from "react";
import fantasy from '../data/fantasy.json'
import history from '../data/history.json'
import horror from '../data/horror.json'
import romance from '../data/romance.json'
import scifi from '../data/scifi.json'
import { Badge, Button, Card, Col, Container, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";



const AllTheBooks = () =>{
  const View = (book) => {
    return <SingleBook bookobj={book} />;
  };

    const bookCards = history.map((book, index) => (
        <Col key={index} xs={12} sm={6} md={4} lg={3}>
          <Card id="card"className="mb-3">
            <Card.Img variant="top" src={book.img} /> 
            <Card.Body>
              <Card.Title>{book.title}</Card.Title>
              <Card.Text><Badge>{book.price}</Badge></Card.Text> 
              <Card.Text>{book.category}</Card.Text> 
              <Button onClick={() => View(book)} variant="primary">VIEW</Button> 
            </Card.Body>
          </Card>
        </Col>
      ));
    
      // Restituisci l'array di JSX elementi all'interno di un Container con Row e Col
      return (
        <Container>
          <Row>
            {bookCards}
          </Row>
        </Container>
      );
    };
export default AllTheBooks