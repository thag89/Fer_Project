import React, { useEffect, useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Row, Col } from "react-bootstrap";
import '../Assets/scss/login.scss'
import GoogleButton from 'react-google-button'
import Header from "./Header";
export default function Login() {
    const [UserList, setUserList] = useState([]);
    const email = useRef(null);
    const password = useRef(null);
    useEffect(() => {
        // setCurrUserId(3); // Update the currUserId value using the setter function
        fetch(`http://localhost:9999/user`)
            .then((res) => res.json())
            .then((result) => {
                setUserList(result);
            });
    }, []);
    const handleLogin = (e) => {
        e.preventDefault();
        let foundUser = UserList.find((u) =>
            u.email === email.current.value && u.password === password.current.value
        );

        if (foundUser) {
            sessionStorage.setItem("currUser", JSON.stringify(foundUser));
            window.location.href = "/";
        } else {
            toast.error("Incorrect username and password");
        }
    };
    return (
        <><Header />
            <Row>
                <ToastContainer />
                <Col style={{ marginBottom: "20px", marginTop: "10px" }}>

                    <div
                        className="col-lg-6"
                        style={{
                            margin: "0 auto",
                            backgroundColor: "#f4f4eb",
                            width: "40%",
                            height: "98%",
                            marginTop: "10px",
                            borderRadius: "15px",
                            boxShadow: "10px 10px #b3b3b1",
                            padding: "30px",
                        }}
                    >
                        <h1 className="text-center">Login</h1>

                        <form className="Login" style={{ backgroundColor: "#f4f4eb" }}>
                            <Form style={{ backgroundColor: "#f4f4eb" }}>
                                <Form.Group size="lg" controlId="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        autoFocus
                                        type="email"
                                        className="form-control mt-1"
                                        placeholder="Enter email"
                                        ref={email}
                                    />
                                </Form.Group>
                                <Form.Group size="lg" controlId="password">
                                    <Form.Label className="mt-2">Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        className="form-control mt-1"
                                        placeholder="Enter password"
                                        ref={password}
                                    />
                                </Form.Group>
                            </Form>
                            <div >
                                <div className="w-full flex items-center">
                                    <input type="checkbox" className="w-3 h-2 " ></input>
                                    Remember me for 30 days
                                </div>
                                <p className="text-right" style={{ marginLeft: "350px" }}> <a href="fgp">Forgot password?</a> </p>
                            </div>

                            <div className="w-full flex flex-col my-4">
                                <button
                                    style={{ backgroundColor: "#343a40", border: "none" }}
                                    type="submit"
                                    className="form-control text-white"
                                    onClick={(e) => handleLogin(e)} >Log in</button>
                            </div>
                            <div class="or-seperator" ><i>or</i></div>
                            <GoogleButton
                                type="dark" // can be light or dark
                                marginBottom="30px"
                                onClick={() => { console.log('Google button clicked') }}
                            />
                            <div className="mt-3" style={{ marginLeft: "200px" }}>
                                <p className="text-left">Don't have an account?<a href="/Register"> Sign up here</a> </p>
                            </div>
                        </form>
                    </div>
                </Col>
            </Row>
        </>
    );

}