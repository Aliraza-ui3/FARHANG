import React from 'react';
import arrow from '../assets/images/DropDown.png';
import frame from '../assets/images/Frame 560.png';
import cat from '../assets/images/Categories.png';
import cat1 from '../assets/images/Category-CellPhone.png';
import cat2 from '../assets/images/cat2.png';
import cat3 from '../assets/images/cat3.png';
import cat4 from '../assets/images/cat4.png';
import cat5 from '../assets/images/cat5.png';

import { Flash } from './Flash';
import Bestselling from './Bestselling';
import Banner from './Banner';
import ExploreProducts from './Exploreproducts';
import Newarrival from './Newarrival';
import Features from './Features';

export default function Herosection() {
  return (
    <>
      <div className='container-fluid'>
        <div className='my-4 row'>
          <div className='col-lg-3 col-md-6 col-sm-12 divsize text-light'>
            <p style={{ marginTop: '40px' }} className='mx-4'>Women Fashion <span><img style={{ marginLeft: '30px', marginTop: '15px' }} src={arrow} alt="" /></span></p>
            <p className='mx-4 my-3'>Men's Fashion <span><img className='right' src={arrow} alt="" /></span></p>
            <p className='mx-4 my-3'>Accessories <span><img style={{ marginLeft: '68px' }} className='' src={arrow} alt="" /></span></p>
            <p className='mx-4 my-3'>Kids <span><img style={{ marginLeft: '132px' }} src={arrow} alt="" /></span></p>
            <p className='mx-4 my-3'>Shawls <span><img style={{ marginLeft: '107px' }} src={arrow} alt="" /></span></p>
          </div>
          <div className='col-lg-1 col-md-1'>
            <div className='vertical-line'></div>
          </div>
          <div className='col-lg-8 col-md-5 col-sm-12'>
            <img style={{ width: '100%' }} className='img-fluid' src={frame} alt="" />
          </div>
        </div>
      </div>
      <hr />
      <br />
      <Flash />
      <div className='my-3 container'>
        <img className='' src={cat} alt="" />
        <h3 className='my-4 fw-bold'>Browse by Category</h3>
      </div>
      <div className='mx-3 my-5 row container-fluid justify-content-center text-center'>
        <div style={{ width: '100%', maxWidth: '1200px' }} className='col-12 d-flex flex-wrap justify-content-center'>
          <div style={{ width: '155px', height: '140px' }} className="mx-3 col-lg-2 col-md-4 col-sm-12 bor justify-content-center text-center"><img style={{ width: '50px', marginTop: '20px' }} src={cat1} alt="" /><p className='my-1 fw-bold'>Women</p> </div>
          <div style={{ width: '155px', height: '140px' }} className="mx-3 col-lg-2 col-md-4 col-sm-12 bor justify-content-center text-center"><img style={{ width: '50px', marginTop: '20px' }} src={cat2} alt="" /><p className='my-1 fw-bold'>Accessories</p> </div>
          <div style={{ width: '155px', height: '140px' }} className="mx-3 col-lg-2 col-md-4 col-sm-12 bor justify-content-center text-center"><img style={{ width: '50px', marginTop: '20px' }} src={cat3} alt="" /><p className='my-1 fw-bold'>Men</p> </div>
          <div style={{ width: '155px', height: '140px', background: 'linear-gradient(to right, #270B0B, #920505)' }} className="mx-3 col-lg-2 col-md-4 col-sm-12 bor justify-content-center text-center"><img className='mx-2 ' style={{ width: '40px', marginTop: '30px', height: '39px' }} src={cat4} alt="" /> <p className='my-1 text-light'>Kids</p> </div>
          <div style={{ width: '155px', height: '140px' }} className="mx-3 col-lg-2 col-md-4 col-sm-12 bor justify-content-center text-center"><img style={{ width: '50px', marginTop: '20px' }} src={cat5} alt="" /><p className='my-1 fw-bold'>Shawls</p> </div>
        </div>
      </div>
      <Bestselling />
      <Banner />
      <ExploreProducts />
      <Newarrival />
      <Features />
    </>
  );
}
