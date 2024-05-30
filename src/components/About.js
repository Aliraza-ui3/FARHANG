import React from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import ali from '../assets/images/ali.png';
import sadia from '../assets/images/sadia.png';
import hafsa from '../assets/images/hafsa.png';
import cat1 from '../assets/images/a1.png';
import cat2 from '../assets/images/a2.png';
import cat3 from '../assets/images/a3.png';
import cat4 from '../assets/images/a4.png';
import head from '../assets/images/head.png';
import abimage from '../assets/images/abimage.png';
import Features from './Features';

export default function About() {
    return (
        <>
            <Container className="my-5 text-center">
                <Image src={head} alt="Header Image" fluid />
            </Container>
            <Container className="my-3">
                <Row className="mx-2">
                    <Col lg={6} md={6} sm={12}>
                        <h1 className='my-4 fw-bold'>About us</h1>
                        <p>
                            Welcome to Farhang, a vibrant tapestry where tradition meets innovation. Farhang is not just a platform; it's a cultural bridge connecting artisans and art enthusiasts globally.
                            <br /><br />
                            Our Mission: At Farhang, we are on a mission to empower local artisans and showcase the rich tapestry of cultural heritage. We believe in the magic of handcrafted creations and the stories they carry. Our platform is a celebration of diversity, fostering connections that transcend borders.
                            <br /><br />
                            What We Stand For:
                            <br />
                            1. Empowering Artisans: Farhang is a haven for local artisans, providing them with a global stage to showcase their talent and sustain their livelihoods.
                            <br />
                            2. Cultural Appreciation: We believe in the power of cultural exchange. Farhang is your gateway to authentic, handmade treasures that carry the soul of diverse traditions.
                        </p>
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                        <Image className='my-4 mx-1 abt img-fluid' src={abimage} alt="About Image" fluid />
                    </Col>
                </Row>
            </Container>
            <Container className='my-5 text-center'>
                <Row className='justify-content-center'>
                    <Col lg={3} md={4} sm={12} className="mb-4">
                        <Card className="bor">
                            <Card.Body>
                                <Image src={cat1} alt="Category 1" style={{ width: '50px', marginTop: '20px' }} />
                                <Card.Text className='fw-bold' style={{ fontSize: '25px', marginTop: '10px' }}>10.5k</Card.Text>
                                Sellers active on our site
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={3} md={4} sm={12} className="mb-4">
                        <Card className="bor gradient text-light">
                            <Card.Body>
                                <Image src={cat2} alt="Category 2" style={{ width: '50px', marginTop: '20px' }} />
                                <Card.Text className='text-light fw-bold' style={{ fontSize: '25px', marginTop: '10px' }}>33k</Card.Text>
                                Sellers active on our site
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={3} md={4} sm={12} className="mb-4">
                        <Card className="bor">
                            <Card.Body>
                                <Image src={cat3} alt="Category 3" style={{ width: '50px', marginTop: '20px' }} />
                                <Card.Text className='fw-bold' style={{ fontSize: '25px', marginTop: '10px' }}>45.5k</Card.Text>
                                Sellers active on our site
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={3} md={4} sm={12} className="mb-4">
                        <Card className="bor">
                            <Card.Body>
                                <Image src={cat4} alt="Category 4" style={{ width: '50px', marginTop: '20px' }} />
                                <Card.Text className='fw-bold' style={{ fontSize: '25px', marginTop: '10px' }}>25k</Card.Text>
                                Sellers active on our site
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <div className='my-3'>
                    <hr />
                </div>
            </Container>
            <Container className="text-center my-5">
                <Row className='justify-content-center'>
                    <Col lg={4} md={4} sm={12} className="mb-4">
                        <Image src={ali} alt="Ali" fluid />
                    </Col>
                    <Col lg={4} md={4} sm={12} className="mb-4">
                        <Image src={sadia} alt="Sadia" fluid />
                    </Col>
                    <Col lg={4} md={4} sm={12} className="mb-4">
                        <Image src={hafsa} alt="Hafsa" fluid />
                    </Col>
                </Row>
            </Container>
            <Features />
        </>
    );
}
