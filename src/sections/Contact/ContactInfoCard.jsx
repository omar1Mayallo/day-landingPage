import React from "react";
import {ContactInfoCardStyled} from "./contact.styled";
const ContactInfoCard = ({Icon, title, text}) => {
  return (
    <ContactInfoCardStyled>
      <div className="contact-icon-circle">
        <Icon />
      </div>
      <div className="contact-info">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </ContactInfoCardStyled>
  );
};

export default ContactInfoCard;
