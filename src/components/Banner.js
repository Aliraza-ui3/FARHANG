import React from 'react';
import { Container } from 'react-bootstrap';
import ban from '../assets/images/ban.png';

export default function Banner() {
  return (
    <Container fluid className="px-0">
      <div className="my-3 container-fluid justify-content-center text-center">
        <img className="img-fluid" src={ban} alt="" />
      </div>
    </Container>
  );
}
