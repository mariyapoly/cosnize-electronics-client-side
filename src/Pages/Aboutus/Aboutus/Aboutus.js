import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import aboutImg from "../../../images/about.png";
import service1 from "../../../images/service1.png";
import service2 from "../../../images/service2.png";
import service3 from "../../../images/service3.png";
import mission1 from "../../../images/mission-1.png";
import mission2 from "../../../images/mission-2.png";
import mission3 from "../../../images/mission-3.png";
import "./Aboutus.css";
import Testimonial from "../../Share/Testimonial/Testimonial/Testimonial";
import Brand from "../../Home/Brand/Brand";

const Aboutus = () => {
  return (
    <>
      <div className="about-part">
        <Container>
          <Row>
            <div className="bread-cramb">
              <NavLink end to="/">
                home
              </NavLink>
              <span>/</span>
              <NavLink end to="/aboutUs">
                About
              </NavLink>
            </div>
            <Col lg={6}>
              <div className="about-img">
                <img src={aboutImg} alt="" />
              </div>
            </Col>
            <Col lg={6}>
              <div className="about-text">
                <span>ABOUT OUR ONLINE STORE</span>
                <h3>Hello</h3>
                <h3>With 25+ Years Of Experience</h3>
                <h5>
                  Over 25 years Cosnize helping companies reach their dolore
                  financial and branding goals.
                </h5>
                <p>
                  The main purpose of your About Us page is to give your
                  visitors a glimpse into who you are as a person or a business
                  As users discover your brand, they need to distinguish what
                  sets you apart and makes you… you. This often requires finding
                  the right balance between compelling content and a design
                  carefully planned to look the part.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="about-service-area">
        <Container>
          <Row>
            <div className="chose-part">
              <span>Chose</span>
              <h3>Why Chose Us?</h3>
              <p>
                The perfect way to enjoy brewing tea on low hanging fruit to
                identify. Duis autem vel eum iriurein vulputae velit esse
                molestie consequat, vel illum dolore eu feugia
              </p>
            </div>
          </Row>
          <div className="our-service">
            <Row>
              <Col lg={4}>
                <div className="single-service">
                  <img src={service1} alt="" />
                  <h5>Free Delivery</h5>
                  <p>
                    Erat metus sodales eget dolor consectetuer, porta ut purus
                    at et alias, nulla ornare velit amet enim
                  </p>
                </div>
              </Col>
              <Col lg={4}>
                <div className="single-service">
                  <img src={service2} alt="" />
                  <h5>100% Money Back Guarantee</h5>
                  <p>
                    Erat metus sodales eget dolor consectetuer, porta ut purus
                    at et alias, nulla ornare velit amet enim
                  </p>
                </div>
              </Col>
              <Col lg={4}>
                <div className="single-service">
                  <img src={service3} alt="" />
                  <h5>Online Support 24/7</h5>
                  <p>
                    Erat metus sodales eget dolor consectetuer, porta ut purus
                    at et alias, nulla ornare velit amet enim
                  </p>
                </div>
              </Col>
            </Row>
          </div>
          <div className="mission-history-part">
            <Row>
              <Col lg={4}>
                <div className="single-mission">
                  <img src={mission1} alt="" />
                  <h5>What Do We Do?</h5>
                  <p>
                    Erat metus sodales eget dolor consectetuer, porta ut putamus
                    parum claram, anteposuerit litterarum formas humanitatis per
                    seacula quarta of decima et quinta decima humanitatis.
                  </p>
                </div>
              </Col>
              <Col lg={4}>
                <div className="single-mission">
                  <img src={mission2} alt="" />
                  <h5>Our Mission</h5>
                  <p>
                    Erat metus sodales eget dolor consectetuer, porta ut putamus
                    parum claram, anteposuerit litterarum formas humanitatis per
                    seacula quarta of decima et quinta decima humanitatis.
                  </p>
                </div>
              </Col>
              <Col lg={4}>
                <div className="single-mission">
                  <img src={mission3} alt="" />
                  <h5>History Of Us</h5>
                  <p>
                    Erat metus sodales eget dolor consectetuer, porta ut putamus
                    parum claram, anteposuerit litterarum formas humanitatis per
                    seacula quarta of decima et quinta decima humanitatis.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <Testimonial></Testimonial>
      <Brand></Brand>
    </>
  );
};

export default Aboutus;
