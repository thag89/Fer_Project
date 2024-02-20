import { Container,  Nav,  Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from "../../Assets/logo.png";

export default function Header() {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container fluid>
                    <Navbar.Brand href="http://localhost:3000"><img src={logo} alt=''/></Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/admin/jobpost">Job Management</Nav.Link>
                        <Nav.Link as={Link} to="/admin/user">User Management</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

