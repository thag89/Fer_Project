import { Container, Row } from "react-bootstrap";
import Header from "./Header";
import { Outlet } from "react-router-dom";

import React from 'react';
export default function Index() {
    return (
        <Container fluid>
            <Row>
                <Header />
            </Row>
            <Row>
                <Outlet />
            </Row>
        </Container>

    )
}