import styled from "styled-components";
import {themeList} from "../../contexts/ThemeContext/themeList";

export const SectionHeadStyled = styled.div`
  position: relative;
  .back-head {
    color: ${({theme: {theme}}) =>
      theme === themeList.light ? "var(--ds-light-2)" : "var(--ds-dark-3)"};
    transition: all 0.5s;
    font-size: 50px;
    font-weight: 800;
    text-transform: uppercase;
    position: absolute;
    top: -15px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
  }
  .sec-head {
    transition: all 0.5s;
    font-size: 30px;
    text-transform: uppercase;
    font-weight: 700;
    color: ${({theme: {theme}}) =>
      theme === themeList.light ? "var(--ds-dark-3)" : "var(--ds-light-2)"};
    z-index: 3;
    position: relative;
  }
`;
