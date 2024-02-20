import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import Banner from "../Assets/banner2.jpg";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useParams, Link } from "react-router-dom";
import Header from "./Header";
export default function JobDetail() {
  const { id } = useParams();
  const [job, setJob] = useState({});
  const [company, setCompany] = useState({});
  const [application, setAplication] = useState([]);
  const isUserLoggedIn = sessionStorage.getItem("currUser");
  const parsedObject = JSON.parse(isUserLoggedIn);
  const isAlreadyApplied = application.some(
    (app) => app.userid === parsedObject.id && app.job === id
  );
  useEffect(() => {
    axios
      .get("http://localhost:9999/job/" + id)
      .then((res) => setJob(res.data))
      .catch((error) => console.log(error));
    axios
      .get("http://localhost:9999/company/" + job.company)
      .then((res) => setCompany(res.data))
      .catch((error) => console.log(error));
    axios
      .get("http://localhost:9999/application")
      .then((res) => setAplication(res.data))
      .catch((error) => console.log(error));
  }, [id, job.company]);

  return (
    <>
      <Header />
      <Container fluid>
        <Row>
          <Col style={{ padding: "0" }}>
            <img
              src={Banner}
              alt="Banner"
              style={{ width: "100%", height: "450px" }}
            />
          </Col>
        </Row>
        <Row style={{ marginTop: "100px" }}>
          <Col style={{ marginLeft: "60px" }}>
            <Card>
              <Card.Body>
                <Card.Title className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {job.title}
                </Card.Title>
                <Card.Text className="font-normal text-gray-700 dark:text-gray-400">
                  {job.recruitmentdescription &&
                    job.recruitmentdescription.benefits}
                </Card.Text>
              </Card.Body>
            </Card>
            <Row style={{ marginTop: "60px" }}>
              <h4>Job Description</h4>
              <p style={{ marginLeft: "60px", paddingRight: "80px" }}>
                {job.recruitmentdescription &&
                  job.recruitmentdescription.jobdescription}
              </p>
            </Row>
            <Row style={{ marginTop: "60px" }}>
              <h4>Required Knowledge, Skills, and Abilities</h4>
              <p style={{ marginLeft: "60px", paddingRight: "80px" }}>
                {job.recruitmentdescription &&
                  job.recruitmentdescription.requirements}
              </p>
            </Row>
            <Row style={{ marginTop: "60px" }}>
              <h4>Experience</h4>
              <ul style={{ marginLeft: "60px" }}>
                <li>3 or more years of professional design experience</li>
                <li>Direct response email experience</li>
                <li>Ecommerce website design experience</li>
                <li>Familiarity with mobile and web apps preferred</li>
                <li>Experience using Invision a plus</li>
              </ul>
            </Row>
          </Col>
          <Col xl="4" lg="4">
            <Row>
              <Card style={{ width: "23rem" }}>
                <Card.Img
                  variant="top"
                  src={company.logo}
                  alt="image"
                  style={{ width: "120px", height: "120px" }}
                />
                <Card.Body>
                  <Card.Title>Company Information</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {company.name}
                  </Card.Subtitle>
                  <Card.Text>
                    Web: <Link to={company.website}>{company.website}</Link>
                  </Card.Text>

                  <Card.Text>Location: {company.location}</Card.Text>
                </Card.Body>
              </Card>
            </Row>
            <Row style={{ marginTop: "60px", marginBottom: "30px" }}>
              <Card style={{ width: "370px", height: "350px" }}>
                <Card.Body>
                  <Card.Title>Job Overview</Card.Title>
                  <Card.Text>
                    Posted date: <span>{job.createdate}</span>
                  </Card.Text>
                  <Card.Text>
                    Location: <span>New York</span>
                  </Card.Text>
                  <Card.Text>
                    Vacancy: <span>02</span>
                  </Card.Text>
                  <Card.Text>
                    Job nature: <span>Full time</span>
                  </Card.Text>
                  <Card.Text>
                    Salary: <span>$7,800 yearly</span>
                  </Card.Text>
                  <Card.Text>
                    Application date: <span>12 Sep 2020</span>
                  </Card.Text>

                  {isAlreadyApplied ? (
                    <Button
                      variant="primary"
                      disabled
                      style={{ marginLeft: "105px", marginTop: "18px", background:"red" }}
                    >
                      Applied
                    </Button>
                  ) : (
                    <Button
                      variant="primary"
                      href={"http://localhost:3000/applyjob/" + id}
                      style={{ marginLeft: "105px", marginTop: "18px" }}
                    >
                      Apply Now
                    </Button>
                  )}
                </Card.Body>
              </Card>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}
