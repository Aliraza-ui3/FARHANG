import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import fr from '../assets/images/Frame 643.png';
import logo from '../assets/images/logo-white 1.png';
import em from '../assets/images/Send Mail.png';
import p from '../assets/images/Frame 741.png';

const Footer = () => {
  return (
    <div className="foot-container text-light">
      <Container>
        <Row className="text-center text-md-start">
          <Col md={3} className="mb-4">
            <Image className='my-4' src={logo} alt="Logo" />
            <h4>Subscribe</h4>
            <p>Get 10% off on your first voucher</p>
            <Image className='my-2' src={em} alt="Subscribe" fluid />
          </Col>
          <Col md={3} className="mb-4">
            <h4 className='mt-4'>Support</h4>
            <p>Sukkur IBA, Sukkur,<br /> Pakistan.</p>
            <p>farhng.company@gmail.com</p>
            <p>+92-3458311328</p>
          </Col>
          <Col md={3} className="mb-4">
            <h4 className='mt-4'>Quick Link</h4>
            <p>Privacy policy</p>
            <p>Terms of use</p>
            <p>Faq</p>
            <p>Contact</p>
          </Col>
          <Col md={3} className="mb-4">
            <Image className='mt-4' src={p} alt="Quick Links" fluid />
          </Col>
        </Row>
      </Container>
      <Container className="text-center my-4">
        <Image src={fr} alt="Footer Graphic" fluid />
      </Container>
    </div>
  );
};

export default Footer;
