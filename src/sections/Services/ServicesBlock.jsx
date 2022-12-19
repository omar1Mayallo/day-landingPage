import React from "react";
import {AnimationOnScroll} from "react-animation-on-scroll";
import {Col, Row} from "react-bootstrap";
import CardItem from "../../components/CardItem";
import {services} from "./servicesData";

const ServicesBlock = () => {
  return (
    <div className="services-block">
      <Row>
        {services.map(({iconName, title, text}, idx) => (
          <Col md={6} lg={4} className="mb-2" key={idx}>
            <AnimationOnScroll animateIn="animate__fadeIn">
              <CardItem
                alignStateCenter={true}
                Icon={iconName}
                cardTitle={title}
                cardText={text}
              />
            </AnimationOnScroll>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ServicesBlock;
