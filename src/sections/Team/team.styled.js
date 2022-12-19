import styled from "styled-components";
import {themeList} from "../../contexts/ThemeContext/themeList";

export const TeamCardStyled = styled.div`
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  padding: 20px;
  .team-member-info {
    h3 {
      font-weight: 700;
      font-size: 18px;
      font-family: "Raleway", "sans-serif";
      color: ${({theme: {theme}}) =>
        theme === themeList.light ? "var(--ds-dark-1)" : "var(--ds-light-0)"};
    }
    h4 {
      font-size: 13px;
      font-style: italic;
    }
    p {
      font-size: 13px;
      font-weight: 400;
      font-style: italic;
      letter-spacing: 0.1px;
      color: var(--ds-light-1);
    }
  }
  .team-social {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: auto;
    max-width: 140px;
    li {
      svg {
        transition: all 0.5s;
        font-size: 24px;
        cursor: pointer;
        color: var(--ds-light-1);
        &:hover {
          color: var(--ds-blood);
        }
      }
    }
  }
`;
