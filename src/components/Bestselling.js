import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';
import s1 from '../assets/images/s1.png';
import s2 from '../assets/images/s2.png';
import card3 from '../assets/images/card3.png';
import card2 from '../assets/images/card2.png';
import star from '../assets/images/stars.png';
import month from '../assets/images/month.png';

export default function Bestselling() {
  return (
    <>
      <Container fluid>
        <div className="mx-3 container-fluid my-3">
          <img className="mx-5" src={month} alt="" />
          <Row className="mx-2">
            <Col>
              <h2 className="mx-5 my-4 fw-bold">Best Selling</h2>
            </Col>
            <Col className="my-3 d-flex justify-content-end">
              <Link to={'/prod'} style={{ color: 'white', textDecoration: 'none' }}>
                <button className="btn gradient text-white">View all</button>
              </Link>
            </Col>
          </Row>
          <Row className="my-5">
            <Col lg={3} md={6} sm={12}>
              <Link style={{ color: 'black', textDecoration: 'none' }} to={'/data'}>
                <Card style={{ border: 'none' }}>
                  <Card.Img variant="top" src={s1} />
                  <Card.Body>
                    <Card.Title>Balochi Doch</Card.Title>
                    $120 <span style={{ marginLeft: '8px', textDecoration: 'line-through' }}>$160</span>
                    <Card.Text>
                      <img src={star} alt="" />
                      <br /><br />
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <Link style={{ color: 'black', textDecoration: 'none' }} to={'/data'}>
                <Card style={{ border: 'none' }}>
                  <Card.Img variant="top" src={s2} />
                  <Card.Body>
                    <Card.Title>Embroidered Dress</Card.Title>
                    $120 <span style={{ marginLeft: '8px', textDecoration: 'line-through' }}>$160</span>
                    <Card.Text>
                      <img src={star} alt="" />
                      <br /><br />
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <Link style={{ color: 'black', textDecoration: 'none' }} to={'/data'}>
                <Card style={{ border: 'none' }}>
                  <Card.Img variant="top" src={card3} />
                  <Card.Body>
                    <Card.Title>Embroidered Dress</Card.Title>
                    $960 <span style={{ marginLeft: '8px', textDecoration: 'line-through' }}>$1160</span>
                    <Card.Text>
                      <img src={star} alt="" />
                      <br /><br />
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <Link style={{ color: 'black', textDecoration: 'none' }} to={'/data'}>
                <Card style={{ border: 'none' }}>
                  <Card.Img variant="top" src={card2} />
                  <Card.Body>
                    <Card.Title>Blue Applique Dress</Card.Title>
                    $120 <span style={{ marginLeft: '8px', textDecoration: 'line-through' }}>$160</span>
                    <Card.Text>
                      <img src={star} alt="" />
                      <br /><br />
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}