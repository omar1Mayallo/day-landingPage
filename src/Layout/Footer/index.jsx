import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {FooterStyled} from "./footer.styled";
import {footerLinks} from "./footerData";
import FooterListLinks from "./FooterListLinks";
import FooterNewsLetter from "./FooterNewsLetter";
import FooterSquare from "./FooterSquare";

const Footer = () => {
  const {usefulLinks, servicesLinks} = footerLinks;
  return (
    <>
      <FooterStyled>
        <Container>
          <hr />
          <Row className="py-3">
            <Col md={12} lg={4}>
              <FooterSquare />
            </Col>
            <Col sm={12} md={6} lg={2}>
              <FooterListLinks {...usefulLinks} />
            </Col>
            <Col sm={12} md={6} lg={2}>
              <FooterListLinks {...servicesLinks} />
            </Col>
            <Col md={12} lg={4}>
              <FooterNewsLetter />
            </Col>
          </Row>
          <hr />
          <div className="d-flex align-items-center justify-content-between pb-3">
            <span style={{fontSize: "15px"}}>
              Made by
              <a
                href="https://github.com/omar1Mayallo"
                style={{color: "var(--ds-blood)", textDecoration: "underline"}}
                target="_blank"
                rel="noreferrer"
              >
                &nbsp;OTM
              </a>
            </span>
            <span>
              Template which I inspired from
              <a
                href="https://bootstrapmade.com/demo/templates/Day"
                style={{color: "var(--ds-blood)", textDecoration: "underline"}}
                target="_blank"
                rel="noreferrer"
              >
                &nbsp;here
              </a>
            </span>
          </div>
        </Container>
      </FooterStyled>
    </>
  );
};

export default Footer;
