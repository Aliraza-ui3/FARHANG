import React from 'react';
import { Container } from 'react-bootstrap';
import arrival from '../assets/images/arrival.png';
import box from '../assets/images/box.png';

export default function Newarrival() {
  return (
    <Container fluid className="px-0">
      <div className='mx-2 my-2'>
        <img className='mx-5 my-2' src={box} alt="" />
        <p className='mx-5 my-3 fw-bold' style={{ fontSize: '36px', marginLeft: '15px' }}>New Arrivals</p>
      </div>
      <div className="text-center">
        <img className='img-fluid' src={arrival} alt="" />
      </div>
    </Container>
  );
}
