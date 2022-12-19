import React from "react";
import {Container} from "react-bootstrap";
import {SectionContainerStyled} from "./sectionContainer.styled";

const SectionContainer = ({secName, id, children}) => {
  return (
    <SectionContainerStyled id={id} className={`${secName} py-5`}>
      <Container>{children}</Container>
    </SectionContainerStyled>
  );
};

export default SectionContainer;
