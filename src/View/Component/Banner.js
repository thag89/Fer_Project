import "../Assets/scss/stylingSon.scss"
import BannerImg from "../Assets/h1_hero.jpg"
import Anh2 from "../Assets/banner3.jpg"
import { Carousel } from "react-bootstrap";
export default function BannerCarousel() {
    return (
        <Carousel>
            <Carousel.Item>
                <img style={{ width: "100%", height: "700px" }} src={BannerImg} />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img style={{ width: "1879px", height: "700px" }} src={Anh2} />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );

}