import axios from "axios";
import { useEffect, useState } from "react";
import {
  Container,
  Form,
  FormGroup,
  FormLabel,
  Navbar,
  Row,
  Image
} from "react-bootstrap";

export default function Admin() {
  const isUserLoggedIn = sessionStorage.getItem("currUser");
  const parsedObject = JSON.parse(isUserLoggedIn);
  const [company, setCompany] = useState({});
  const [newCompanyName, setNewCompanyName] = useState("");
  const [newCompanyWebsite, setNewCompanyWebsite] = useState("");
  const [newCompanyLogo, setNewCompanyLogo] = useState("");
  const [newCompanyStaff, setNewCompanyStaff] = useState(0);
  const [newCompanyIntroduction, setNewCompanyIntroduction] = useState("");
  const [newCompanyLocation, setNewCompanyLocation] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:9999/company?userid=" + parsedObject.id)
      .then((res) => {
        setCompany(res.data);
      })
      .catch((err) => console.log(err));
  }, [parsedObject.id]);

  const createNewCompany = () => {
    // Prepare the data for the new company
    const newCompanyData = {
      userid: parsedObject.id,
      name: newCompanyName,
      logo: newCompanyLogo,
      website: newCompanyWebsite,
      staffnumber: newCompanyStaff,
      introduction: newCompanyIntroduction,
      location: newCompanyLocation,
    };
    axios
      .post("http://localhost:9999/company", newCompanyData)
      .then((res) => {
        // Handle the successful creation of the company, e.g., show a success message or update the state.
        console.log("New company created successfully:", res.data);
        // You can also reset the form fields if needed.
      })
      .catch((err) => {
        // Handle any errors, e.g., show an error message or log the error.
        console.error("Error creating new company:", err);
      });
  };

  return (
    <Container fluid>
      <Row>
        {company[0]?.name ? (
          <Container style={{ marginBottom: "30px" }}>
          <Navbar />
          <div className="job-background" style={{ marginLeft: "100px" }}>
            <Row style={{ textAlign: "center" }}>
              <h1>Create new company</h1>
            </Row>
          </div>
          <div className="container">
          <Image src={company[0].logo} style={{width:"20%"}}/>
              <FormGroup>
                <FormLabel id="name-label" htmlFor="name">
                  Company Name
                </FormLabel>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Enter Company Name"
                  required
                  value={company[0].name}
                  disabled
                />
              </FormGroup>
              <FormGroup>
                <FormLabel id="name-label" htmlFor="website">
                  Enter website
                </FormLabel>
                <input
                  type="text"
                  name="website"
                  className="form-control"
                  placeholder="Enter Company Website"
                  required
                  value={company[0].website}
                  disabled
                />
              </FormGroup>
              
              <FormGroup>
                <FormLabel id="logo-label" htmlFor="logo">
                  Staffnumber
                </FormLabel>
                <input
                  type="number"
                  name="logo"
                  className="form-control"
                  placeholder="Enter Company Staffnumber"
                  required
                  value={company[0].staffnumber}
                  disabled
                />
              </FormGroup>
              <FormGroup>
                <FormLabel id="logo-label" htmlFor="logo">
                  Introduction
                </FormLabel>
                <input
                  type="text"
                  name="logo"
                  className="form-control"
                  placeholder="Enter Company Introduction"
                  style={{ height: "100px" }}
                  required
                  value={company[0].introduction}
                  disabled
                />
              </FormGroup>
              <FormGroup>
                <FormLabel id="logo-label" htmlFor="logo">
                  Location
                </FormLabel>
                <input
                  type="text"
                  name="logo"
                  className="form-control"
                  placeholder="Enter Company Location"
                  required
                  value={company[0].location}
                  disabled
                />
              </FormGroup>
              
          </div>
        </Container>
        ) : (
          /* Render content when company is null (doesn't exist) */
          <Container style={{ marginBottom: "30px" }}>
            <Navbar />
            <div className="job-background" style={{ marginLeft: "100px" }}>
              <Row style={{ textAlign: "center" }}>
                <h1>Create new company</h1>
              </Row>
            </div>
            <div className="container">
              <Form>
                <FormGroup>
                  <FormLabel id="name-label" htmlFor="name">
                    Company Name
                  </FormLabel>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Enter Company Name"
                    required
                    value={newCompanyName}
                    onChange={(e) => setNewCompanyName(e.target.value)}
                  />
                </FormGroup>
                <FormGroup>
                  <FormLabel id="name-label" htmlFor="website">
                    Enter website
                  </FormLabel>
                  <input
                    type="text"
                    name="website"
                    className="form-control"
                    placeholder="Enter Company Website"
                    required
                    value={newCompanyWebsite}
                    onChange={(e) => setNewCompanyWebsite(e.target.value)}
                  />
                </FormGroup>
                <FormGroup>
                  <FormLabel id="logo-label" htmlFor="logo">
                    Company logo
                  </FormLabel>
                  <input
                    type="text"
                    name="logo"
                    className="form-control"
                    placeholder="Enter Company Logo URL"
                    required
                    value={newCompanyLogo}
                    onChange={(e) => setNewCompanyLogo(e.target.value)}
                  />
                </FormGroup>
                <FormGroup>
                  <FormLabel id="logo-label" htmlFor="logo">
                    Staffnumber
                  </FormLabel>
                  <input
                    type="number"
                    name="logo"
                    className="form-control"
                    placeholder="Enter Company Staffnumber"
                    required
                    value={newCompanyStaff}
                    onChange={(e) =>
                      setNewCompanyStaff(parseInt(e.target.value))
                    }
                  />
                </FormGroup>
                <FormGroup>
                  <FormLabel id="logo-label" htmlFor="logo">
                    Introduction
                  </FormLabel>
                  <input
                    type="text"
                    name="logo"
                    className="form-control"
                    placeholder="Enter Company Introduction"
                    style={{ height: "100px" }}
                    required
                    value={newCompanyIntroduction}
                    onChange={(e) => setNewCompanyIntroduction(e.target.value)}
                  />
                </FormGroup>
                <FormGroup>
                  <FormLabel id="logo-label" htmlFor="logo">
                    Location
                  </FormLabel>
                  <input
                    type="text"
                    name="logo"
                    className="form-control"
                    placeholder="Enter Company Location"
                    required
                    value={newCompanyLocation}
                    onChange={(e) => setNewCompanyLocation(e.target.value)}
                  />
                </FormGroup>
                <FormGroup style={{ marginTop: "30px" }}>
                  <button
                    type="button"
                    className="submit-button"
                    onClick={createNewCompany}
                  >
                    Submit
                  </button>
                </FormGroup>
              </Form>
            </div>
          </Container>
        )}
      </Row>
    </Container>
  );
}
