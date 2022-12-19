import React from "react";
import {AnimationOnScroll} from "react-animation-on-scroll";
import {Col, Row, Form} from "react-bootstrap";
import CustomButton from "../../components/CustomButton";
import {FormStyled} from "./contact.styled";

const ContactMapFormBlock = () => {
  return (
    <Row>
      <Col lg={6} className="my-2">
        <AnimationOnScroll animateIn={`${"animate__fadeInLeft"}`}>
          <Map />
        </AnimationOnScroll>
      </Col>
      <Col lg={6} className="my-2">
        <AnimationOnScroll animateIn={`${"animate__fadeInRight"}`}>
          <ContactForm />
        </AnimationOnScroll>
      </Col>
    </Row>
  );
};

function Map() {
  return (
    <div className="google-map">
      <div
        className="mapouter"
        style={{
          position: "relative",
          textAlign: "right",
          minHeight: "300px",
          width: "100%",
        }}
      >
        <div
          className="gmap_canvas"
          style={{
            overflow: "hidden",
            background: " none !important",
            height: "100%",
            width: "100%",
          }}
        >
          <iframe
            title="This is a unique title"
            width="100%"
            height="100%"
            id="gamp_canvas"
            src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=11&ie=UTF8&iwloc=&output=embed"
            style={{minHeight: "500px"}}
          />
        </div>
      </div>
    </div>
  );
}
function ContactForm() {
  return (
    <FormStyled>
      <Row>
        <Col lg={6}>
          <Form.Control size="lg" type="text" placeholder="Your Name" />
        </Col>
        <Col lg={6}>
          <Form.Control size="lg" type="email" placeholder="Your Email" />
        </Col>
        <Col lg={12}>
          <Form.Control size="lg" type="text" placeholder="Subject" />
        </Col>
        <Col lg={12}>
          <Form.Control as="textarea" rows={5} placeholder="Message" />
        </Col>
      </Row>
      <div className="text-center">
        <CustomButton className="my-3" type={"regular-pricing-btn"}>
          Send Message
        </CustomButton>
      </div>
    </FormStyled>
  );
}

export default ContactMapFormBlock;
