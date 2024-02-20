import React from "react";
import "../Assets/scss/PostJob.scss";
import { Container, Form, FormGroup, FormLabel, InputGroup, Navbar } from "react-bootstrap";
import FormCheckLabel from "react-bootstrap/esm/FormCheckLabel";
export default function PostJob() {
    return (
        <Container style={{ marginBottom: '30px' }}>
            <Navbar />
            <div className="job-background" style={{ marginLeft: '100px' }}>
                <div className="title">
                    <h1>Post a Job</h1>
                </div>
            </div>
            <div className="container">
                <header className="header">
                    <h1 className="post-job">Fill the form </h1>
                </header>
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
                    />
                </FormGroup>
                <FormGroup>
                    <FormLabel id="name-label" htmlFor="name">
                        Enter Job Location
                    </FormLabel>
                    <InputGroup
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Enter Job Location"

                        required
                    />
                </FormGroup>
                <FormGroup>
                    <FormLabel id="logo-label" htmlFor="logo">
                        Company logo
                    </FormLabel>
                    <FormLabel>
                        <InputGroup
                            type="file"
                            id="myFile"
                            name="filename"

                            required
                        />
                    </FormLabel>
                </FormGroup>
                <FormGroup>
                    <FormLabel>What position are you posting for?</FormLabel>
                    <Form.Select
                        id="dropdown"
                        name="role"
                        className="form-control"

                        required
                    >
                        <option disabled selected value>
                            Select position
                        </option>
                        <option>Frontend</option>
                        <option>Backend</option>
                        <option>Full Stack</option>
                        <option>Devops</option>
                        <option>Digital Marketing</option>
                    </Form.Select>
                </FormGroup>
                <FormGroup>
                    <FormLabel id="name-label" htmlFor="name">
                        Enter Job Role
                    </FormLabel>
                    <InputGroup
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Enter Job Role"

                        required
                    />
                </FormGroup>

                <FormGroup>
                    <FormLabel>Experience </FormLabel>
                    <FormLabel>
                        <input
                            name="user-recommend"
                            value="0-1 Year"
                            type="radio"
                            className="input-radio"
                        />
                        0-1 Year
                    </FormLabel>
                    <FormLabel>
                        <input
                            name="user-recommend"
                            value=" 2-3 Years"
                            type="radio"
                            className="input-radio"
                        />
                        2-3 Years
                    </FormLabel>
                    <FormLabel>
                        <input
                            name="user-recommend"
                            value=" 4-5 Years"
                            type="radio"
                            className="input-radio"
                        />
                        4-5 Years
                    </FormLabel>
                    <FormLabel>
                        <input
                            name="user-recommend"
                            value="5+ Years"
                            type="radio"
                            className="input-radio"
                        />
                        5+ Years
                    </FormLabel>
                </FormGroup>

                <FormGroup>
                    <FormLabel>Salary</FormLabel>
                    <select
                        className="form-control"

                        required
                    >
                        <option disabled selected value>
                            Select Salary
                        </option>
                        <option value="0-15K">0-15K</option>
                        <option value="15-30K">15-30K</option>
                        <option value="30K-50K">30K-50K</option>
                        <option value="50K-80K">50K-80K</option>
                        <option value="80K+">80K+</option>
                    </select>
                </FormGroup>
                <FormGroup>
                    <button type="submit" className="submit-button">
                        Submit
                    </button>
                </FormGroup>

            </div>
        </Container>
    );
}