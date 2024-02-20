import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Row, Col, Container } from "react-bootstrap";
import logo from "../Assets/logo.png";
import { Link } from 'react-router-dom';
export default function ResetPassword() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    function validateForm() {
        return email.length > 0 && password.length > 0;
    }
    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <Row>
            <Container/>
                <div className="Logo" style={{ marginTop: "20px", marginRight: "10px" }}>
                    <Link to="../">
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <div
                    className="col-lg-8"
                    style={{
                        margin: "80px",
                        backgroundColor: "#f4f4eb",
                        height: "500px",
                        marginTop: "75px",
                        borderRadius: "15px",
                        boxShadow: "10px 10px #b3b3b1",
                        padding: "70px"
                    }}
                >
                    <h1 className="text-center mb-3">Reset Password</h1>

                    <form className="password">
                        <Form onSubmit={handleSubmit}>
                            <Form.Group size="lg" controlId="password">
                                <Form.Label className="mt-3">Enter New Password</Form.Label>
                                <Form.Control
                                    autoFocus
                                    type="password"
                                    className="form-control mt-1"
                                    placeholder=""
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group size="lg" controlId="password">
                                <Form.Label className="mt-3">Confirm Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    className="form-control mt-1"
                                    placeholder=""
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </Form.Group>
                        </Form>

                        <div className="w-full flex flex-col my-4">
                            <button
                                style={{ backgroundColor: "#343a40", border: "none" }}
                                type="submit"
                                className="form-control text-white mt-4"
                                onClick={(e) => handleSubmit(e)} >Reset Password</button>
                        </div>
                    </form>
                </div>
        </Row>
    );

}