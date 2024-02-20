import React, { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/js/dist/dropdown'
import { Button, Container, Row, Collapse, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
export default function Sider() {
    const [open, setOpen] = useState(false)
    return (
        <Col xs={2} className="bg-dark vh-100 sticky-top ">
            <div className="col-auto  d-flex flex-column justify-content-between">

                <a href="/" className="text-decoration-none d-flex align-items-center text-white d-none d-sm-block text-center ">
                    <span className="fs-2 align-self-center ">Menu</span>
                </a>
                <hr className="text-white d-none d-sm-block "></hr>
                <ul class="nav nav-tabs flex-column border-0 " id='parentM'>
                    <li className="nav-item fs-5 ">
                        <a href="/" className="nav-link text-white" aria-current="page">
                            <i className="bi bi-speedometer2"></i>
                            <span className="ms-3 d-none d-xl-inline  ">Dashboard</span>
                        </a>
                    </li>
                    <li class="nav-item text-white fs-5 ">
                        <a href="/" className="nav-link text-white ">
                            <i className="bi bi-newspaper"></i>
                            <span className="ms-3 d-none d-xl-inline">User</span>
                        </a>
                    </li>
                    <li class="nav-item text-white fs-5 ">
                        <a href="/" className="nav-link text-white ">
                            <i className="bi bi-newspaper"></i>
                            <span className="ms-3 d-none d-xl-inline">Applicant</span>
                        </a>
                    </li>
                    <li class="nav-item text-white fs-5 ">
                        <Button className="nav-item text-white fs-5 bg-transparent border-0 ms-2 " onClick={() => setOpen(!open)}>
                            <i className="bi bi-newspaper"></i>
                            <span className="ms-3 d-none d-xl-inline">Job</span>
                        </Button>
                        <Collapse in={open} >
                            <div className="ms-5">
                                <a href="/">All Job</a>
                                <br />
                                <Link to="/postJob" className="text-decoration-none text-white  ">Post Job</Link>
                            </div>
                        </Collapse>
                    </li>
                    <li class="nav-item text-white fs-5 ">
                        <a href="/" className="nav-link text-white ">
                            <i className="bi bi-building"></i>
                            <span className="ms-3 d-none d-xl-inline">Company</span>
                        </a>
                    </li>
                    <li class="nav-item text-white fs-5 ">
                        <a href="/" className="nav-link text-white ">
                            <i className="bi bi-send"></i>
                            <span className="ms-3 d-none d-xl-inline">Application</span>
                        </a>
                    </li>
                </ul>

            </div>
        </Col>

    )
}