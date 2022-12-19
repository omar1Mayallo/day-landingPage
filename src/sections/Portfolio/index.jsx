import React from "react";
import SectionContainer from "../../components/SectionContainer";
import SectionHead from "../../components/SectionHead";
import PortfolioBlock from "./PortfolioBlock";

const Portfolio = () => {
  return (
    <SectionContainer id={"portfolio"} secName={"portfolio-sec"}>
      <SectionHead
        head={"portfolio"}
        text={
          "Sit sint consectetur velit quisquam cupiditate impedit suscipit alias"
        }
      />
      <PortfolioBlock />
    </SectionContainer>
  );
};

export default Portfolio;
