import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import testimonialImg from "../../../../images/testmonial.png";
import SingleTestimonial from "../SingleTestimonial/SingleTestimonial";
import "./Testimonial.css";

const Testimonial = () => {
  return (
    //   testimonial-area start
    <div className="testimonial-area">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="testimonial-wrapper">
              <span>testimonial</span>
              <h3>What Our Custumers Say ?</h3>
              <p>
                The perfect way to enjoy brewing tea on low hanging fruit to
                identify. Duis autem vel eum iriurein vulputae velit esse
                molestie consequat, vel illum dolore eu feugia
              </p>
              <img src={testimonialImg} alt="" />
            </div>
            <SingleTestimonial></SingleTestimonial>
          </Col>
        </Row>
      </Container>
    </div>
    //   testimonial-area end
  );
};

export default Testimonial;
