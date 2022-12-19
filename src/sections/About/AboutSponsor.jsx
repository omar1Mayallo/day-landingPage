import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {GrayImage} from "./About.styled";
import {sponsors} from "./aboutData";
import {AnimationOnScroll} from "react-animation-on-scroll";

const AboutSponsor = () => {
  return (
    <div
      className="sponsor-container py-5"
      style={{background: "var(--ds-light-5)"}}
    >
      <Container>
        <Row>
          {sponsors.map((img, idx) => (
            <Col xs={6} md={4} lg={2} className="text-center" key={idx}>
              <AnimationOnScroll animateIn="animate__fadeInUp">
                <GrayImage
                  src={img}
                  alt="sponsor-img"
                  width="50%"
                  height="auto"
                />
              </AnimationOnScroll>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default AboutSponsor;
