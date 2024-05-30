import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';
import arrows from '../assets/images/arrows.png';
import star from '../assets/images/stars.png';
import p1 from '../assets/images/p1.png';
import p2 from '../assets/images/p2.png';
import p3 from '../assets/images/p3.png';
import p4 from '../assets/images/p4.png';
import p5 from '../assets/images/p5.png';
import p6 from '../assets/images/p6.png';
import p7 from '../assets/images/p7.png';
import p8 from '../assets/images/p8.png';
import today from '../assets/images/product.png';

export default function ExploreProducts() {
  return (
    <Container fluid>
      <div className="mx-3 my-2">
        <img src={today} alt="" />
        <p className="fw-bold" style={{ fontSize: '36px' }}>
          Explore Our Products
          <img src={arrows} alt="" style={{ verticalAlign: 'middle', marginLeft: '10px' }} />
        </p>
      </div>
      <Row className="mx-3 my-4">
        <ProductCard image={p1} title="Balochi Doch" price={120} oldPrice={160} />
        <ProductCard image={p2} title="Embroidered Dress" price={120} oldPrice={160} />
        <ProductCard image={p3} title="Embroidered Dress" price={960} oldPrice={1160} />
        <ProductCard image={p4} title="Blue Applique Dress" price={120} oldPrice={160} />
      </Row>
      <Row className="mx-3 my-4">
        <ProductCard image={p5} title="Balochi Doch" price={120} oldPrice={160} />
        <ProductCard image={p6} title="Embroidered Dress" price={120} oldPrice={160} />
        <ProductCard image={p7} title="Embroidered Dress" price={960} oldPrice={1160} />
        <ProductCard image={p8} title="Blue Applique Dress" price={120} oldPrice={160} />
      </Row>
      <div className="mx-3 my-3 text-center">
        <Link to={'/prod'} style={{ color: 'white', textDecoration: 'none' }}>
          <button className="btn gradient-container text-light" style={{ width: '270px', fontSize: '18px' }}>
            View All Products
          </button>
        </Link>
      </div>
      <hr />
    </Container>
  );
}

const ProductCard = ({ image, title, price, oldPrice }) => (
  <Col lg={3} md={6} sm={12} className="justify-content-center">
    <Link to={'/data'} style={{ color: 'black', textDecoration: 'none' }}>
      <Card style={{ border: 'none' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          ${price} <span style={{ marginLeft: '8px', textDecoration: 'line-through' }}>${oldPrice}</span>
          <Card.Text>
            <img src={star} alt="" />
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  </Col>
);
