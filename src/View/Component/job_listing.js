import { Container, Col, Row } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Banner from "../Assets/banner2.jpg";
import Header from "./Header";
import { useLocation } from "react-router-dom";
export default function JobListing() {

  const location = useLocation();
  const [jobs, setJobs] = useState([]);
  const [Category, setCategory] = useState([]);
  const [Workforms, setWorkforms] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState("0");
  const [selectedWorkform, setSelectedWorkform] = useState([]);
  const [selectedExperience, setSelectedExperience] = useState([]);
  const [queryCategory, setQueryCategory] = useState("0");

  const [companyData, setCompanyData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:9999/job")
      .then((res) => setJobs(res.data))
      .catch((error) => console.log(error));
    axios
      .get("http://localhost:9999/industry")
      .then((res) => setCategory(res.data))
      .catch((error) => console.log(error));
    axios
      .get("http://localhost:9999/workform")
      .then((res) => setWorkforms(res.data))
      .catch((error) => console.log(error));
    // Fetch company data
    axios.get('http://localhost:9999/company') // Replace with your JSON server URL
      .then((response) => {
        setCompanyData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching company data:', error);
      });
  }, []);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const categoryParam = searchParams.get("category");
    setSelectedCategory(categoryParam || "0");
  }, [location.search]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const categoryParam = params.get('category');
    if (categoryParam !== null) {
      setQueryCategory(categoryParam);
    }
  }, []);

  const filterJobs = () => {
    if (selectedCategory !== "0") {
      return jobs.filter((job) => {
        const categoryMatch = job.industry == selectedCategory;
        const workformMatch =
          selectedWorkform.length === 0 ||
          selectedWorkform.includes(job.workform);
        return categoryMatch && workformMatch;
      });
    } else {
      return jobs.filter((job) => {
        const workformMatch =
          selectedWorkform.length === 0 ||
          selectedWorkform.includes(job.workform);
        return workformMatch;
      });
    }
  };

  const handleWorkformChange = (e) => {
    const itemId = parseInt(e.target.value);
    const isChecked = e.target.checked;

    if (isChecked) {
      setSelectedWorkform([...selectedWorkform, itemId]);
    } else {
      setSelectedWorkform(selectedWorkform.filter((id) => id !== itemId));
    }
  };

  const filteredJobs = filterJobs();
  const getCompanyInfo = (companyId) => {
    return companyData.find((company) => company.id === companyId);
  };
  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col style={{ padding: "0" }}>
            <img
              src={Banner}
              alt="Banner"
              style={{ width: "100%", height: "450px" }}
            />
          </Col>
        </Row>
        <Row
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            padding: "20px",
          }}
        >
          <Col
            xl={4}
            lg={4}
            md={4}
            style={{
              placeItems: "center",
              padding: "20px",
              marginLeft: "80px",
            }}
          >
            <Row>
              <Col>
                <div
                  className="small-section-tittle2 mb-45"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <div className="ion">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      width="20px"
                      height="12px"
                    >
                      <path d="M3.9 54.9C10.5 40.9 24.5 32 40 32H472c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9V448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6V320.9L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" />
                    </svg>
                  </div>
                  <h3>Filter Jobs</h3>
                </div>
              </Col>
            </Row>
            <Card style={{ width: "18rem" }}>
              <div class="job-category-listing mb-50">
                <div class="single-listing">
                  <div class="small-section-tittle2">
                    <h4>Job Category</h4>
                  </div>
                  <div class="select-job-items2">
                    <select
                      name="select"
                      value={queryCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                      <option value="0">All Category</option>
                      {Category.map((item) => (
                        <option key={item.id} value={item.id}>
                          {item.name}
                        </option>
                      ))}
                    </select>

                  </div>
                  <div
                    class="select-Categories pt-80 pb-50"
                    style={{ display: "grid" }}
                  >
                    <div class="small-section-tittle2">
                      <h4>Job Type</h4>
                    </div>
                    {Workforms.map((item) => (
                      <label>
                        {item.name}
                        <input
                          type="checkbox"
                          value={item.id}
                          onChange={(e) => handleWorkformChange(e)}
                        />
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </Col>
          <Col xl={10} lg={10} md={10}>
            <Container>
              <Row>
                <Col>
                  <div
                    style={{ display: "flex", justifyContent: "flex-start" }}
                  >
                    <span>{filteredJobs.length} jobs was found</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <span>Sort by</span>
                    <select name="select">
                      <option value="">None</option>
                      <option value="">job list</option>
                      <option value="">job list</option>
                      <option value="">job list</option>
                    </select>
                  </div>
                </Col>
              </Row>
              <Row>
                {filteredJobs.map((item) => (
                  <Card
                    style={{ width: "1000px", padding: "10px", margin: "10px" }}
                  >
                    <Card.Img
                      variant="top"
                      src={getCompanyInfo(item.company)?.logo}
                      alt="Description of the image"
                      style={{ width: "60px", height: "60px" }}
                    />
                    <Card.Body>
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Text>
                        {item.recruitmentdescription.jobdescription}
                      </Card.Text>
                      <Link to={`/jobdetail/${item.id}`}>
                        <Button variant="primary">Detail</Button>
                      </Link>
                    </Card.Body>
                  </Card>
                ))}
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
}
