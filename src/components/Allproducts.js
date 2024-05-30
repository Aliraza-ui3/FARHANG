import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col, Dropdown } from 'react-bootstrap';
import Cart from './Cart'; // Import the Cart component
import img from '../assets/images/Frame 33.png';
import img2 from '../assets/images/Frame 34.png';
import img3 from '../assets/images/Frame 38.png';
import stars from '../assets/images/Frame 39.png';
import stars2 from '../assets/images/Frame 40.png';
import stars3 from '../assets/images/Frame 41.png';
import img4 from '../assets/images/Frame 71.png';
import img5 from '../assets/images/Frame 72.png';
import img6 from '../assets/images/Frame 73.png';
import img7 from '../assets/images/s1.png';
import img8 from '../assets/images/Frame 32.png';
import img9 from '../assets/images/Frame 71.png';

export default function AllProducts() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingProductIndex = cart.findIndex((item) => item.id === product.id);

    if (existingProductIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  return (
    <>
      <Container fluid className="px-0"> {/* Adjusted the padding */}
        <h5 className='mx-5'>Home/<span style={{ color: "#000000" }}>All Products</span></h5>
        <h1 className='mx-5 my-5'>All Products</h1>
        <Container fluid className="d-flex justify-content-end px-5"> {/* Adjusted the padding */}
          <Row>
            <Col xs="auto">
              <p className="mr-3">Showing 1-10 of 100 products Sort by:</p>
            </Col>
            <Col xs="auto">
              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic" style={{ backgroundColor: "#fff", color: "#000", border: "none", marginTop: '-10px' }}>
                  Most Popular
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action 1</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Action 2</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>
        </Container>
        <Container fluid className="mx-0 px-5"> {/* Adjusted the padding */}
          <Row>
            <ProductCard
              img={img}
              title="Baby Crochet Design"
              stars={stars}
              price={145}
              addToCart={() => addToCart({ id: 1, name: 'Baby Crochet Design', price: 145 })}
            />
            <ProductCard
              img={img2}
              title="Balochi Doch"
              stars={stars2}
              price={180}
              addToCart={() => addToCart({ id: 2, name: 'Balochi Doch', price: 180 })}
            />
            <ProductCard
              img={img3}
              title="Crochet Dress"
              stars={stars3}
              price={120}
              addToCart={() => addToCart({ id: 3, name: 'Crochet Dress', price: 120 })}
            />
          </Row>
        </Container>
        {/* Add more rows with ProductCards as needed */}
        {/* Cart summary section */}
        <Container fluid className="mt-5 px-5"> {/* Adjusted the padding */}
          <Cart cart={cart} removeFromCart={removeFromCart} />
        </Container>
      </Container>
    </>
  );
}

const ProductCard = ({ img, title, stars, price, addToCart }) => (
  <Col lg={4} md={6} sm={12} className="mb-4">
    <Card style={{ width: '18rem', border: 'none' }}>
      <Card.Img className="mx-3" variant="top" src={img} />
      <Card.Body style={{ marginLeft: 'none' }}>
        <Card.Title>{title}</Card.Title>
        <img varient="down" src={stars} alt="Stars" />
        <Card.Text className="fw-bold">
          ${price}
        </Card.Text>
        <Button style={{ width: '270px' }} className="gradient-container" onClick={addToCart}>
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  </Col>
);
