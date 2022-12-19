import React from "react";
import {AnimationOnScroll} from "react-animation-on-scroll";
import {Col, Row} from "react-bootstrap";
import CardItem from "../../components/CardItem";
import {cards} from "./aboutData";

const AboutBlocks = () => {
  return (
    <div className="cards-block">
      <Row>
        {cards.map(({number, title, text}, idx) => (
          <Col sm={12} md={6} lg={4} className="mb-2" key={idx}>
            <AnimationOnScroll animateIn="animate__fadeIn">
              <CardItem cardNumber={number} cardTitle={title} cardText={text} />
            </AnimationOnScroll>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default AboutBlocks;
