import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Aboutus from '../Assets/about.jpg';
import Header from './Header';

export default function About() {
  const containerStyle = {
    marginTop: '20px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.3)'
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '10px',
    boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.3)'
  };

  const headingStyle = {
    fontSize: '36px',
    textAlign: 'center',
    marginTop: '20px',
    color: '#007BFF'
  };

  const textStyle = {
    fontSize: '18px',
    textAlign: 'justify',
    marginTop: '10px'
  };

  const missionHeadingStyle = {
    fontSize: '24px',
    color: '#007BFF',
    cursor: 'pointer' // Hiệu ứng pointer khi di chuột qua
  };

  return (
    <>
      <Header />
      <Container style={containerStyle}>
        <Row>
          <Col>
            <img style={imageStyle} src={Aboutus} alt="About Us" />
            <h2 style={headingStyle}>About Us</h2>
            <p style={textStyle}>
              Welcome to our company's "About Us" page. We are a dedicated team of professionals
              passionate about delivering high-quality products and services to our clients.
            </p>
          </Col>
        </Row>
        <Row style={{ marginTop: '20px' }}>
          <Col md={6}>
            <h3 style={missionHeadingStyle}>Our Mission</h3>
            <p style={textStyle}>
              Our mission is to provide innovative solutions that meet our customers' needs.
              We aim to exceed expectations in everything we do.
            </p>
          </Col>
          <Col md={6}>
            <h3 style={missionHeadingStyle}>Our Team</h3>
            <p style={textStyle}>
              Our team is comprised of talented individuals with diverse backgrounds and expertise.
              We work together to achieve common goals and deliver outstanding results.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}