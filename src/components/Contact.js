import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import img1 from '../assets/images/icons-phone (1).png';
import img2 from '../assets/images/icons-mail (1).png';
import img3 from '../assets/images/UnderLine (1).png';

export default function Contact() {
  // State for form inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  // Log state changes
  const logMessageDetails = () => {
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Message:', message);
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      case 'message':
        setMessage(value);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className="container">
        <p>Home / Contact </p>
      </div>
      <div className="my-5 container">
        <div className="row">
          <div className="my-3 col-lg-4">
            <p className="fw-bold">
              <img className="my-3 mx-2" src={img1} alt="Call to us" />
              Call to us
            </p>
            <p className="fw-bold mx-3">
              we are available 24/7, 7 days a week <br />
              phone: +1 234 567 89 00
            </p>

            <img className="my-3 mx-2" src={img3} alt="Underline" />

            <p className="fw-bold">
              <img className="my-3 mx-2 fw-bold" src={img2} alt="Write to us" />
              Write to us
            </p>

            <p className=" fw-bold mx-3">
              Fill out the form and we will contact you <br />
              within 24 hours
              <br />
              Email: farhang.company@gmail.com
            </p>
          </div>
          <div className="my-4 col-lg-8">
            <div className="row">
              <div className="col-lg-4">
                <input
                  style={{ background: '#F5F5F5', border: 'none' }}
                  className="form-control"
                  type="text"
                  placeholder="Your name"
                  name="name"
                  value={name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-lg-4">
                <input
                  style={{ background: '#F5F5F5', border: 'none' }}
                  className="form-control"
                  type="email"
                  placeholder="Your email"
                  name="email"
                  value={email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-lg-4">
                <input
                  style={{ background: '#F5F5F5', border: 'none' }}
                  className="form-control"
                  type="number"
                  placeholder="Your phone"
                  name="phone"
                  value={phone}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="my-4 col-lg-12">
                <textarea
                  style={{ background: '#F5F5F5', border: 'none' }}
                  type="textarea"
                  className="form-control "
                  name="message"
                  id=""
                  cols="103"
                  rows="10"
                  placeholder="Your message"
                  value={message}
                  onChange={handleInputChange}
                ></textarea>
              </div>
              <div className="col-lg-12 justify-content-end d-flex">
                <Button
                  style={{ width: '270px', fontSize: '18px', borderRadius: '0px' }}
                  className="gradient-container"
                  onClick={logMessageDetails}
                >
                  Send Message
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
