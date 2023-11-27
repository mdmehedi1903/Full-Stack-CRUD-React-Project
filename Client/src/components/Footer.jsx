import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light">
        <br/>
      <Container>
        <Row>
          <Col md={4}>
            <h5>About Us</h5>
            <p>Your company description goes here.</p>
          </Col>
          <Col md={4}>
            <h5>Contact Us</h5>
            <p>Email: info@example.com</p>
            <p>Phone: (123) 456-7890</p>
          </Col>
          <Col md={4}>
            <h5>Follow Us</h5>
            <p>Connect with us on social media.</p>
            {/* Add social media icons or links here */}
          </Col>
        </Row>
      </Container>
      <div className="text-center p-3 bg-secondary">
        <p>&copy; {new Date().getFullYear()} Your Company</p>
      </div>
    </footer>
  );
};

export default Footer;
