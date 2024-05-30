import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { Navbar, Container, Nav, Image, Form, FormControl, Button } from 'react-bootstrap';
import logo from '../assets/images/logo-black 1.png';
import logo1 from '../assets/images/Frame 551.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [keyword, setKeyword] = useState('');

  const changeKey = (e) => {
    setKeyword(e.target.value);
  };

  const keyPress = (e) => {
    if (e.key === 'Enter') {
      // Handle search action here
      console.log('Perform search:', keyword);
    }
  };

  return (
    <>
      <div className="w-100 gradient-container topdiv"></div>
      <Navbar expand="lg" bg="light">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <Image src={logo} alt="Logo" className="d-inline-block align-top" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/" className="fw-bold">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/con" className="fw-bold">
                Contact
              </Nav.Link>
              <Nav.Link as={Link} to="/abt" className="fw-bold">
                About
              </Nav.Link>
            </Nav>
            <Form className="d-flex mx-3">
              <FormControl
                type="search"
                placeholder="What are you looking for"
                className="me-2"
                aria-label="Search"
                value={keyword}
                onChange={changeKey}
                onKeyDown={keyPress}
                style={{ background: '#F5F5F5', border: 'none', fontSize: '12px' }}
              />
              <Button variant="outline-secondary" style={{ background: '#F5F5F5', border: 'none' }}>
                <FontAwesomeIcon icon={faSearch} />
              </Button>
            </Form>
            <Nav>
              <Nav.Link className="d-flex align-items-center">
                <Image src={logo1} alt="Secondary Logo" className="d-inline-block align-top mx-2" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <hr className='h' />
    </>
  );
};

export default Header;
