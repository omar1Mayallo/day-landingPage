import styled from "styled-components";
import {themeList} from "../../contexts/ThemeContext/themeList";

export const HeaderStyled = styled.header`
  transition: all 1s;
  background-color: ${({theme: {theme}}) =>
    theme === themeList.light ? "var(--ds-light-0)" : "var(--ds-dark-1)"};
  box-shadow: rgba(0, 0, 0, 0.25) 0px 3px 8px;
  z-index: 98;
  &.active {
    position: fixed;
    width: 100%;
    background-color: ${({theme: {theme}}) =>
      theme === themeList.light ? "var(--ds-light-7)" : "var(--ds-dark-2)"};
    a {
      color: var(--ds-light-0);
    }
  }
  nav {
    padding: 0;
    //Brand
    .navbar-brand {
      color: var(--ds-blood);
      font-size: 30px;
      font-weight: 700;
    }
    //NavLinksContainer
    .navbar-nav {
      //Default
      display: flex;
      @media (max-width: 991px) {
        display: none;
      }
      a {
        transition: 0.7s;
        font-size: 14px;
        cursor: pointer;
        @media (min-width: 992px) {
          margin-right: 8px;
          color: ${({theme: {theme}}) =>
            theme === themeList.light
              ? "var(--ds-dark-1)"
              : "var(--ds-light-0)"};
          padding: 20px 15px;
          &:hover,
          &.active {
            background-color: var(--ds-blood);
            color: ${({theme: {theme}}) =>
              theme === themeList.light && "var(--ds-light-0)"};
          }
        }
      }
      //Collapse
      &.nav-links-container {
        display: none;
        @media (max-width: 992px) {
          position: fixed;
          margin: auto;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          z-index: 99;
          width: calc(100vw - 40px);
          height: calc(100vh - 40px);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          background-color: var(--ds-light-0);
          box-shadow: rgba(0, 0, 0, 0.9) 7px 7px 7px 100px;
        }
        a {
          @media (max-width: 992px) {
            margin: 13px;
            padding: 0;
            color: var(--ds-dark-1);
            &:hover,
            &.active {
              color: var(--ds-blood);
              background-color: none;
            }
          }
        }
        .close-icon {
          position: absolute;
          top: 20px;
          right: 20px;
          font-size: 25px;
          cursor: pointer;
        }
      }
    }

    .menu-icon {
      margin: 15px 0;
      font-size: 30px;
      cursor: pointer;
      color: ${({theme: {theme}}) =>
        theme === themeList.light ? "var(--ds-dark-1)" : "var(--ds-light-0)"};
    }
  }
`;
