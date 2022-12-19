import React from "react";
import {AnimationOnScroll} from "react-animation-on-scroll";
import {Col, Row} from "react-bootstrap";
import PricingCard from "../../components/PricingCard";
import {pricingPlans} from "./pricingData";
const PricingBlock = () => {
  return (
    <div className="PricingBlock">
      <Row>
        {pricingPlans.map((item, idx) => (
          <Col sm={12} md={6} lg={4} className="text-center my-2" key={idx}>
            <AnimationOnScroll
              animateIn={`${
                idx === 1 ? "animate__fadeInUp" : "animate__fadeInDown"
              }`}
            >
              <PricingCard {...item} />
            </AnimationOnScroll>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default PricingBlock;
