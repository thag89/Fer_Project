import Footer from "../Component/Footer";
import Header from "../Component/Header";
import "../Assets/scss/Footer.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
export default function DefaultTemplate({ children }) {
    return (
        <Container fluid>
            <Header />
            <div className="row" style={{ minHeight: "650px" }}>
                {children}
            </div>
            <Footer />
        </Container>
    );
}
