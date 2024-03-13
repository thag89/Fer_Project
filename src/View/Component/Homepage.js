import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import BannerCarousel from "../Component/Banner";
import DefaultTemplate from "../Template/DefaultTemplate";
import { FaSearch, FaPenAlt, FaDesktop, FaNewspaper, FaMobileAlt, FaHouzz, FaMicrochip, FaLaptopHouse, FaRegHandPaper } from "react-icons/fa";
import "../Assets/scss/stylingSon.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import backgroundImage from "../Assets/cv_bg.jpg"
import Header from './Header';
import { useNavigate } from 'react-router-dom';
export default function HomePage() {

    const containerStyle = {
        backgroundImage: backgroundImage,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        paddingTop: '90px',
        paddingBottom: '120px',
    };
    const navigate = useNavigate();
    const handleJobClick = (categoryId) => {
        navigate(`/JobListing?category=${categoryId}`);
      };
    return (<>
        <Header></Header>
        <Container>
            <div className="container-fluid">
                <Row className="row Banner">
                    <BannerCarousel />
                </Row>
                <Row className="row searchBar">
                    <Form>
                        <Form.Group>
                            <input placeholder="Search Jobs" />
                            <button type="submit"><FaSearch /></button>
                        </Form.Group>
                    </Form>
                </Row>

                <div className="our-services section-pad-t30">
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <div style={{ textDecoration: 'none' }} className="section-tittle text-center">
                                    <h2 style={{ marginBottom: '50px', color: '#550055' }}>Browse Top Categories</h2>
                                </div>
                            </Col>
                        </Row>
                        <Row className="d-flex justify-content-center m-3">
                            <Col xl={3} lg={3} md={4} sm={6}>
                                <div className="single-services text-center mb-30">
                                    <div className="services-ion">
                                        <span><FaPenAlt size='5rem' /></span>
                                    </div>
                                    <div className="services-cap" >
                                        <h5><a href="#" onClick={() => handleJobClick("7")} style={{ textDecoration: 'none', color: '#550055' }}>Design & Creative</a></h5>
                                        <span>(653)</span>
                                    </div>
                                </div>
                            </Col>
                            <Col xl={3} lg={3} md={4} sm={6}>
                                <div className="single-services text-center mb-30">
                                    <div className="services-ion">
                                        <span><FaDesktop size='5rem' /></span>
                                    </div>
                                    <div className="services-cap">
                                        <h5><a href="#" onClick={() => handleJobClick("1")} style={{ textDecoration: 'none', color: '#550055' }}>IT Software Development</a></h5>
                                        <span>(658)</span>
                                    </div>
                                </div>
                            </Col>
                            <Col xl={3} lg={3} md={4} sm={6}>
                                <div className="single-services text-center mb-30">
                                    <div className="services-ion">
                                        <span><FaNewspaper size='5rem' /></span>
                                    </div>
                                    <div className="services-cap">
                                        <h5><a href="#" onClick={() => handleJobClick("4")} style={{ textDecoration: 'none', color: '#550055' }}>Sales & Marketing</a></h5>
                                        <span>(658)</span>
                                    </div>
                                </div>
                            </Col>
                            <Col xl={3} lg={3} md={4} sm={6}>
                                <div className="single-services text-center mb-30">
                                    <div className="services-ion">
                                        <span><FaMobileAlt size='5rem' /></span>
                                    </div>
                                    <div className="services-cap">
                                        <h5><a href="#" onClick={() => handleJobClick("3")} style={{ textDecoration: 'none', color: '#550055' }}>Logistic</a></h5>
                                        <span>(658)</span>
                                    </div>
                                </div>
                            </Col>
                            <Col xl={3} lg={3} md={4} sm={6}>
                                <div className="single-services text-center mb-30">
                                    <div className="services-ion">
                                        <span><FaHouzz size='5rem' /></span>
                                    </div>
                                    <div className="services-cap">
                                        <h5><a href="#" onClick={() => handleJobClick("5")} style={{ textDecoration: 'none', color: '#550055' }}>Construction</a></h5>
                                        <span>(658)</span>
                                    </div>
                                </div>
                            </Col>
                            <Col xl={3} lg={3} md={4} sm={6}>
                                <div className="single-services text-center mb-30">
                                    <div className="services-ion">
                                        <span><FaMicrochip size='5rem' /></span>
                                    </div>
                                    <div className="services-cap">
                                        <h5><a href="#" onClick={() => handleJobClick("2")} style={{ textDecoration: 'none', color: '#550055' }}>IT Hardware/Internet</a></h5>
                                        <span>(658)</span>
                                    </div>
                                </div>
                            </Col>
                            <Col xl={3} lg={3} md={4} sm={6}>
                                <div className="single-services text-center mb-30">
                                    <div className="services-ion">
                                        <span><FaLaptopHouse size='5rem' /></span>
                                    </div>
                                    <div className="services-cap">
                                        <h5><a href="#" onClick={() => handleJobClick("6")} style={{ textDecoration: 'none', color: '#550055' }}>Real Estate</a></h5>
                                        <span>(658)</span>
                                    </div>
                                </div>
                            </Col>
                            <Col xl={3} lg={3} md={4} sm={6}>
                                <div className="single-services text-center mb-30">
                                    <div className="services-ion">
                                        <span><FaRegHandPaper size='5rem' /></span>
                                    </div>
                                    <div className="services-cap">
                                        <h5><a href="#" onClick={() => handleJobClick("8")} style={{ textDecoration: 'none', color: '#550055' }}>Content Writer</a></h5>
                                        <span>(658)</span>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={12}>
                                <div className="browse-btn2 text-center mt-50">
                                    <a href="./JobListing" className="border-btn2" style={{ textDecoration: 'none', color: '#550055' }}>Browse All Sectors</a>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </Container>
    </>
    );
}
