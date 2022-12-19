import styled from "styled-components";
import {themeList} from "../../contexts/ThemeContext/themeList";

export const FooterStyled = styled.footer`
  background-color: ${({theme: {theme}}) =>
    theme === themeList.light ? "var(--ds-light-0)" : "var(--ds-dark-4)"};
  padding-top: 10px;
  h4 {
    font-size: 16px;
    font-weight: 700;
    color: ${({theme: {theme}}) =>
      theme === themeList.light ? "var(--ds-dark-1)" : "var(--ds-light-0)"};
  }
`;

export const FooterSquareStyled = styled.div`
  text-align: center;
  padding: 30px;
  border-top: 5px solid var(--ds-blood);
  background-color: ${({theme: {theme}}) =>
    theme === themeList.light ? "var(--ds-light-6)" : "var(--ds-dark-1)"};
  h3 {
    font-size: 40px;
    font-weight: 700;
    text-transform: uppercase;
    color: ${({theme: {theme}}) =>
      theme === themeList.light ? "var(--ds-dark-3)" : "var(--ds-light-0)"};
  }
  p {
    margin: 0;
    font-size: 15px;
  }
  ul {
    width: 100px;
    margin: auto;
    padding: 10px 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    li {
      transition: all 0.3s;
      border-radius: 100%;
      cursor: pointer;
      padding: 11px 12px;
      line-height: 5px;
      background-color: red;
      margin-inline: 3px;
      background-color: ${({theme: {theme}}) =>
        theme === themeList.light ? "var(--ds-light-0)" : "#262626"};
      &:hover {
        background-color: var(--ds-blood);
        svg {
          color: var(--ds-light-0);
        }
      }
      svg {
        font-size: 20px;
      }
    }
  }
`;

export const FooterListLinksStyled = styled.div`
  @media (max-width: 991px) {
    margin: 20px 0;
  }
  ul {
    li {
      transition: all 0.5s;
      font-size: 14px;
      font-weight: 500;
      margin: 10px 0;
      cursor: pointer;
      &:hover {
        color: var(--ds-blood);
      }
      svg {
        font-size: 20px;
        color: var(--ds-blood);
      }
    }
  }
`;

export const FooterNewsLetterStyled = styled.div`
  p {
    font-size: 16px;
    font-style: italic;
    letter-spacing: -1px;
  }
  .subscribe-form {
    display: flex;
    input {
      border-radius: 0;
      width: 70%;
      &:focus {
        box-shadow: none;
        border: 1px solid var(--ds-blood);
      }
    }
    button {
      width: 30%;
      padding: 10px;
    }
  }
`;
