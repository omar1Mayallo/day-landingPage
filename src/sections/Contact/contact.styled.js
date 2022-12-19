import styled from "styled-components";
import {themeList} from "../../contexts/ThemeContext/themeList";
import {Form} from "react-bootstrap";

export const ContactInfoCardStyled = styled.div`
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 20px;
  .contact-icon-circle {
    border: 1.5px dashed var(--ds-blood);
    border-radius: 100%;
    width: fit-content;
    padding: 12px;
    margin: 10px auto;
    svg {
      color: var(--ds-blood);
      font-size: 30px;
    }
  }
  .contact-info {
    h3 {
      font-size: 21px;
      font-weight: 700;
      letter-spacing: -0.5px;
      color: ${({theme: {theme}}) =>
        theme === themeList.light ? "var(--ds-light-4)" : "var(--ds-light-0)"};
    }
    p {
      font-size: 14px;
    }
  }
`;

export const FormStyled = styled(Form)`
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  input,
  textarea {
    padding: 15px;
    font-size: 15px;
    border-radius: 0;
    margin: 10px 0;
    border: ${({theme: {theme}}) => theme === themeList.dark && "none"};
    background: ${({theme: {theme}}) =>
      theme === themeList.light ? "var(--ds-light-0)" : "var(--ds-dark-1)"};
    color: ${({theme: {theme}}) =>
      theme === themeList.light ? "var(--ds-dark-1)" : "var(--ds-light-0)"};
    &:focus {
      border-color: var(--ds-blood);
      box-shadow: none;
    }
  }
`;
