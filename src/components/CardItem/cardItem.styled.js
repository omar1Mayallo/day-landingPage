import styled from "styled-components";
import {themeList} from "../../contexts/ThemeContext/themeList";

export const CardItemStyled = styled.div`
  transition: all 0.5s;
  text-align: ${(props) => {
    // console.log(props);
    return props.centeredState ? "center" : "start";
  }};
  padding: 25px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  &:hover {
    background-color: var(--ds-blood);
    .card-icon-square {
      background-color: var(--ds-light-0);
      svg {
        color: var(--ds-blood);
        transform: scale(1.2);
      }
    }
    .card-num,
    h4,
    p {
      color: var(--ds-light-0);
    }
  }
  .card-num {
    transition: all 0.5s;
    color: var(--ds-blood);
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 15px;
  }
  .card-icon-square {
    transition: all 0.5s;
    margin-bottom: 15px;
    width: 60px;
    height: 60px;
    margin-inline: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--ds-blood);
    z-index: 2;
    position: relative;
    svg {
      transition: all 0.5s;
      font-size: 28px;
      color: var(--ds-light-0);
    }
  }
  h4 {
    transition: all 0.5s;
    color: ${({theme: {theme}}) =>
      themeList.light === theme ? "var(--ds-dark-1)" : "var(--ds-light-0)"};
    font-weight: 600;
  }
  p {
    transition: all 0.5s;
    color: var(--ds-light-1);
  }
`;
