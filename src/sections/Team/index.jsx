import React from "react";
import SectionContainer from "../../components/SectionContainer";
import SectionHead from "../../components/SectionHead";
import TeamBlock from "./TeamBlock";

const Team = () => {
  return (
    <SectionContainer id={"team"} secName={"team-sec"}>
      <SectionHead
        head={"team"}
        text={
          "Sit sint consectetur velit quisquam cupiditate impedit suscipit alias"
        }
      />
      <TeamBlock />
    </SectionContainer>
  );
};

export default Team;
