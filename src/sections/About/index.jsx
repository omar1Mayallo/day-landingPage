import React from "react";
import {Col, Image} from "react-bootstrap";
import SectionContainer from "../../components/SectionContainer";
import AboutBlocks from "./AboutBlocks";
import AboutSponsor from "./AboutSponsor";
import {AiOutlineCheckCircle} from "react-icons/ai";
import {RowReversedStyled} from "./About.styled";
import {paragraphs} from "./aboutData";
import aboutImage from "../../assets/about.jpg";

const About = () => {
  return (
    <>
      <SectionContainer id={"about"} secName={"about-sec"}>
        <RowReversedStyled className="my-2">
          <Col lg={6} className="mb-3">
            <h3>
              Voluptatem dignissimos provident quasi corporis voluptates sit
              assumenda.
            </h3>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <ul>
              {paragraphs.map((par, idx) => (
                <li className="mb-3" key={idx}>
                  <AiOutlineCheckCircle
                    className="me-1"
                    size={24}
                    color={"var(--ds-blood)"}
                  />
                  {par}
                </li>
              ))}
            </ul>
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum
            </p>
          </Col>
          <Col lg={6} className="mb-3">
            <Image
              src={aboutImage}
              alt="about-img"
              width="100%"
              height="auto"
            />
          </Col>
        </RowReversedStyled>
        <AboutBlocks />
      </SectionContainer>
      <AboutSponsor />
    </>
  );
};

export default About;
