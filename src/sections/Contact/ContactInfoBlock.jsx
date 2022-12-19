import React from "react";
import {AnimationOnScroll} from "react-animation-on-scroll";
import {Col, Row} from "react-bootstrap";
import {contactInfo} from "./contactData";
import ContactInfoCard from "./ContactInfoCard";

const ContactInfoBlock = () => {
  return (
    <Row className="my-2">
      {contactInfo.map((item, idx) => (
        <Col
          sm={12}
          md={idx === 0 ? 12 : 6}
          lg={idx === 0 ? 6 : 3}
          className="text-center my-2"
          key={idx}
        >
          <AnimationOnScroll animateIn={`${"animate__fadeInLeft"}`}>
            <ContactInfoCard {...item} />
          </AnimationOnScroll>
        </Col>
      ))}
    </Row>
  );
};

export default ContactInfoBlock;
