import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import Header from './Header';
import axios from 'axios';  // Don't forget to import axios

export default function ApplyJobs() {
    const { id } = useParams();
    const isUserLoggedIn = sessionStorage.getItem("currUser");
    const parsedObject = JSON.parse(isUserLoggedIn);
    const [name, setName] = useState("");
    const [CV, setCV] = useState("");  

    

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = {
            userid: parsedObject.id,
            job: parseInt(id),
            CV: CV,
            applydate: new Date().toLocaleDateString(),
            applicationstatus: 1,
          };

        axios.post("http://localhost:9999/application", formData)
            .then((res) => {
                window.location.href = "/";
            })
            .catch((err) => {
                console.error("Error submitting application:", err);
                // You can handle errors or display an error message to the user.
            });
    };

    return (
        <>
            <Header />
            <div className="apply-job">
                <div className="container">
                    <header className="header">
                        <h1 className="post-job">Fill the form </h1>
                    </header>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="form-group">
                            <Form.Label id="name-label" for="name">
                                Enter Your Name
                            </Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                className="form-control"
                                placeholder="Enter Your Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="form-group">
                            <Form.Label>
                                Upload Your Resume
                            </Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                className="form-control"
                                placeholder="Enter Your CV URL"
                                value={CV}
                                onChange={(e) => setCV(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="form-group">
                            <Button
                                type="submit"
                                className="submit-button"
                            >
                                Submit
                            </Button>
                        </Form.Group>
                    </Form>
                </div>
            </div>
        </>
    );
}
