import React from "react";
import {AnimationOnScroll} from "react-animation-on-scroll";
import {Col, Row} from "react-bootstrap";
import TeamCard from "./TeamCard";
import {teams} from "./teamsData";
const TeamBlock = () => {
  return (
    <div>
      <Row>
        {teams.map((item, idx) => (
          <Col sm={12} md={6} lg={4} className="text-center my-3" key={idx}>
            <AnimationOnScroll
              animateIn={`${
                idx === 1 ? "animate__fadeInDown" : "animate__fadeInUp"
              }`}
            >
              <TeamCard {...item} />
            </AnimationOnScroll>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default TeamBlock;
