import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
import logo from "../Assets/logo.png";
import { Link } from 'react-router-dom';
export default function ForgotPassword() {

    const [email, setEmail] = useState("");
    const [validate, setValidate] = useState();
    function handleSubmit(e) {
        e.preventDefault();
    }
    return (
        <Row>
            <ToastContainer />

            <div className="Logo" style={{ marginTop: "20px", marginRight: "10px" }}>
                <Link to="../">
                    <img src={logo} alt="" />
                </Link>
            </div>

            <div
                className="col-lg-8"
                style={{
                    marginRight: "100px",
                    backgroundColor: "#f4f4eb",
                    height: "400px",
                    marginTop: "100px",
                    borderRadius: "15px",
                    boxShadow: "10px 10px #b3b3b1",
                    padding: "66px"
                }}
            >
                <h1 className="text-center mb-5" >Forgot Password</h1>

                <form className="Login">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group size="lg" controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                autoFocus
                                type="email"
                                className="form-control mb-2 mt-1"
                                placeholder="Enter email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>
                    </Form>

                    <div className="w-full flex flex-col my-4">
                        <button
                            style={{ backgroundColor: "#343a40", border: "none" }}
                            type="submit"
                            className="form-control text-white mt-2 mb-3"
                        > <a href="Np.js"></a>Continue</button>
                    </div>

                </form>
            </div>

        </Row>
    );

}