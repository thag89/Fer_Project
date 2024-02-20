import { Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import './PostJob.css'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
export default function PostNewJob() {
    const [validated, setValidated] = useState(false);
    const [data, setData] = useState({
        "id": null,
        "company": 1,
        "title": '',
        "salary": '',
        "location": '',
        "position": 1,
        "workform": 1,
        "industry": 1,
        "experience": '',
        "quantity": '',
        "worklocation": '',
        "recruitmentdescription": {
            "jobdescription": '',
            "requirements": '',
            "benefits": ''
        },
        "contact":
        {
            "name": '',
            "email": '',
            "phonenumber": ''
        }
        ,
        "status": 1,
        "createdate": new Date().toLocaleDateString(),
        "expireday": ''

    })

    //fetch Job Jorm 
    const [jobform, setJobform] = useState([])
    useEffect(() => {
        axios.get("http://localhost:9999/workform")
            .then(res => setJobform(res.data))
            .catch(errr => console.log(errr))
    }, [])

    //get Position
    const [position, setPosition] = useState([])
    useEffect(() => {
        axios.get("http://localhost:9999/jobPosition")
            .then(res => setPosition(res.data))
            .catch(errr => console.log(errr))
    }, [])
    //get Industry
    const [industry, setIndustry] = useState([])
    useEffect(() => {
        axios.get("http://localhost:9999/industry")
            .then(res => setIndustry(res.data))
            .catch(errr => console.log(errr))
    }, [])

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
        if (form.checkValidity() === true) {
            axios.post("http://localhost:9999/job", data)
                .then(res => {
                    alert("Add Job successfully!")
                })
                .then(navigate(`/company/jobs`))
                .catch(err => console.log(err))

        }
    };
    const navigate = useNavigate();
    return (
        <Col className="bg-dark-subtle  ">
            <Row className="bg-white">
                <div id="label" className="text-center fs-1 font ">
                    Post A Job
                </div>
            </Row>
            <Row className="mt-3 bg-white ">
                <Container>
                    <Row className="d-flex ">
                        <div id="subLabel" className="text-center my-4">
                            <i className="bi bi-briefcase text-bg-light"></i>
                            <span className="ms-3 fw-bolder ">Job Information</span>
                        </div>
                        <div className="row justify-content-center  ">
                            <Form noValidate validated={validated} onSubmit={handleSubmit} style={{ width: "50%", }}>
                                <Row className="md-12">
                                    <Form.Group as={Col} md="12" controlId="validationCustom01" className="my-4">
                                        <Form.Label>Job Title</Form.Label>
                                        <span className="text-danger "> *</span>
                                        <Form.Control
                                            required
                                            name="title"
                                            type="text"
                                            placeholder="eg. Sennior UX Design"
                                            defaultValue=""
                                            onChange={e => {
                                                setData({ ...data, title: e.target.value })
                                                console.log(data);
                                            }}
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="6" controlId="validationPosition">
                                        <Form.Label>Position</Form.Label>
                                        <Form.Select aria-label="Please select" value={data.position} onChange={e => {
                                            setData({ ...data, position: parseInt(e.target.value, 10) })
                                            console.log(data);
                                        }}>
                                            {
                                                position.map(pos => {
                                                    return <option key={pos.id} value={pos.id}>{pos.name}</option>
                                                })
                                            }
                                        </Form.Select>
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                        <Form.Control.Feedback type="invalid">Please select a  position.</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="6" controlId="validationPosition">
                                        <Form.Label>Job Form</Form.Label>
                                        <Form.Select aria-label="Please select" onChange={e => {
                                            setData({ ...data, workform: parseInt(e.target.value, 10) })
                                            console.log(data);
                                        }}>
                                            {
                                                jobform.map(form => {
                                                    return <option key={form.id} value={form.id}>{form.name}</option>
                                                })
                                            }
                                        </Form.Select>
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                        <Form.Control.Feedback type="invalid">Please select a  Job Form.</Form.Control.Feedback>
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group as={Col} md="6" controlId="validationCustom03">
                                        <Form.Label>Industry</Form.Label>
                                        <Form.Select aria-label="Please select" onChange={e => {
                                            setData({ ...data, industry: parseInt(e.target.value, 10) })
                                            console.log(data);
                                        }}>
                                            {
                                                industry.map(form => {
                                                    return <option key={form.id} value={form.id}>{form.name}</option>
                                                })
                                            }
                                        </Form.Select>
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                        <Form.Control.Feedback type="invalid">Please select a  position.</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="6" controlId="validationCustom04">
                                        <Form.Label>Location</Form.Label>
                                        <Form.Control type="text" placeholder="Location" required onChange={e => {
                                            setData({ ...data, location: e.target.value })
                                            console.log(data);
                                        }} />
                                        <Form.Control.Feedback type="invalid">
                                            Please provide a valid location.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="6" controlId="validationCustom04">
                                        <Form.Label>Salary $</Form.Label>
                                        <Form.Control type="number" placeholder="eg. Deal or Salary Range" min="0" required onChange={e => {
                                            setData({ ...data, salary: parseInt(e.target.value, 10) })
                                            console.log(data);
                                        }} />
                                        <Form.Control.Feedback type="invalid">
                                            Please provide a valid salary.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="6" controlId="validationCustom04">
                                        <Form.Label>Number of Employees</Form.Label>
                                        <Form.Control type="number" placeholder="Number of Employees" min="0" required onChange={e => {
                                            setData({ ...data, quantity: parseInt(e.target.value, 10) })
                                            console.log(data);
                                        }} />
                                        <Form.Control.Feedback type="invalid">
                                            Please provide a valid salary.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <div className="fs-5 fw-bold mt-3  "> Description</div>
                                    <Form.Group as={Col} md="12" controlId="validationCustom05">
                                        <Form.Label>Job Description</Form.Label>
                                        <InputGroup>
                                            <Form.Control required as="textarea" aria-label="With textarea" placeholder="Description" value={data.recruitmentdescription.jobdescription} onChange={e => {
                                                setData({ ...data, recruitmentdescription: { ...data.recruitmentdescription, jobdescription: e.target.value } })
                                                console.log(data);
                                            }} />
                                            <Form.Control.Feedback type="invalid">
                                                Please provide a valid description.
                                            </Form.Control.Feedback>
                                        </InputGroup>
                                    </Form.Group>
                                    <Form.Group as={Col} md="12" controlId="validationCustom05">
                                        <Form.Label>Requirement</Form.Label>
                                        <InputGroup>
                                            <Form.Control required as="textarea" aria-label="With textarea" placeholder="Description" value={data.recruitmentdescription.requirements} onChange={e => {
                                                setData({ ...data, recruitmentdescription: { ...data.recruitmentdescription, requirements: e.target.value } })
                                                console.log(data);
                                            }} />
                                            <Form.Control.Feedback type="invalid">
                                                Please provide a valid requirement.
                                            </Form.Control.Feedback>
                                        </InputGroup>
                                    </Form.Group>
                                    <Form.Group as={Col} md="12" controlId="validationCustom05">
                                        <Form.Label>Benefits</Form.Label>
                                        <InputGroup>
                                            <Form.Control required as="textarea" aria-label="With textarea" placeholder="Benefits" value={data.recruitmentdescription.benefits} onChange={e => {
                                                setData({ ...data, recruitmentdescription: { ...data.recruitmentdescription, benefits: e.target.value } })
                                                console.log(data);
                                            }} />
                                            <Form.Control.Feedback type="invalid">
                                                Please provide a valid benefits.
                                            </Form.Control.Feedback>
                                        </InputGroup>
                                    </Form.Group>
                                    <div className="fs-5 fw-bold mt-3  "> Contact</div>
                                    <Form.Group as={Col} md="12" controlId="validationCustom01">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="Contact Person Name"
                                            defaultValue=""

                                            value={data.contact.name}
                                            onChange={e => {
                                                setData({ ...data, contact: { ...data.contact, name: e.target.value } })
                                                console.log(data);
                                            }}
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="12" controlId="validationCustom01">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control
                                            required
                                            type="email"
                                            placeholder="Contact Person Name"
                                            value={data.contact.email}
                                            onChange={e => {
                                                setData({ ...data, contact: { ...data.contact, email: e.target.value } })
                                                console.log(data);
                                            }}
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="12" controlId="validationCustom01">
                                        <Form.Label>Phone Number</Form.Label>
                                        <Form.Control
                                            required
                                            type="tel"
                                            placeholder="Contact Phone number"
                                            pattern="[0-9]{10}"
                                            value={data.contact.phonenumber}
                                            onChange={e => {
                                                setData({ ...data, contact: { ...data.contact, phonenumber: e.target.value } })
                                                console.log(data);
                                            }}
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="12" controlId="validationCustom01">
                                        <Form.Label>Expired Date</Form.Label>
                                        <Form.Control
                                            type="date"
                                            name="datepic"
                                            placeholder="DateRange"
                                            onChange={e => {
                                                setData({ ...data, expireday: e.target.value })
                                                console.log(data);
                                            }}
                                            required
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>

                                </Row>
                                <Form.Group className="mb-3">
                                    <Form.Check
                                        required
                                        label="Agree to terms and conditions"
                                        feedback="You must agree before submitting."
                                        feedbackType="invalid"
                                    />
                                </Form.Group>
                                <Button className="mb-3" type="submit">Submit form</Button>
                            </Form>
                        </div>

                    </Row>
                </Container>
            </Row>
        </Col>
    )

}