import React from "react";
import {Image} from "react-bootstrap";
import {TeamCardStyled} from "./team.styled";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

const TeamCard = ({name, img, subTitle, text}) => {
  return (
    <TeamCardStyled>
      <div className="team-img-container mb-4">
        <Image
          src={img}
          alt="Team-member-img"
          width={"170px"}
          height={"170px"}
          className="rounded-circle"
        />
      </div>
      <div className="team-member-info">
        <h3 className="mb-2">{name}</h3>
        <h4 className="mb-3">{subTitle}</h4>
        <p>{text}</p>
      </div>
      <ul className="team-social">
        <li>
          <AiFillFacebook />
        </li>
        <li>
          <AiFillTwitterSquare />
        </li>
        <li>
          <AiFillInstagram />
        </li>
        <li>
          <AiFillLinkedin />
        </li>
      </ul>
    </TeamCardStyled>
  );
};

export default TeamCard;
