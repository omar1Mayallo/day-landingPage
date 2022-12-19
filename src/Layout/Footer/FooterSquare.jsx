import React from "react";
import {FooterSquareStyled} from "./footer.styled";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const FooterSquare = () => {
  return (
    <FooterSquareStyled>
      <h3>Day</h3>
      <p className="mb-3">A108 Adam Street NY 535022, USA</p>
      <p className="mb-1">Phone: +1 5589 55488 55</p>
      <p className="mb-1">Email: info@example.com</p>
      <ul>
        <li>
          <FaFacebookF />
        </li>
        <li>
          <FaInstagram />
        </li>
        <li>
          <FaTwitter />
        </li>
        <li>
          <FaLinkedinIn />
        </li>
      </ul>
    </FooterSquareStyled>
  );
};

export default FooterSquare;
