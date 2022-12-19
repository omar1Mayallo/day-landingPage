import React from "react";
import {MdKeyboardArrowRight} from "react-icons/md";
import {FooterListLinksStyled} from "./footer.styled";
const FooterListLinks = ({head, links}) => {
  return (
    <FooterListLinksStyled>
      <h4>{head}</h4>
      <ul>
        {links.map((link, idx) => (
          <li key={idx}>
            <MdKeyboardArrowRight />
            {link}
          </li>
        ))}

        {/* <li>
          <MdKeyboardArrowRight />
          Web Development
        </li>
        <li>
          <MdKeyboardArrowRight />
          Product Management
        </li>
        <li>
          <MdKeyboardArrowRight />
          Marketing
        </li>
        <li>
          <MdKeyboardArrowRight />
          Graphic Design
        </li> */}
      </ul>
    </FooterListLinksStyled>
  );
};

export default FooterListLinks;
