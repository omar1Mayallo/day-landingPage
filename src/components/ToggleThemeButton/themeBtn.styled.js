import styled from "styled-components";

export const ThemeButton = styled.div`
  transition: all 0.5s;
  cursor: pointer;
  position: fixed;
  z-index: 90;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background-color: var(--ds-dark-1);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  &.isDark {
    background-color: var(--ds-light-0);
    svg {
      color: var(--ds-dark-1);
    }
  }
  svg {
    transition: 0.5s;
    color: var(--ds-light-0);
    font-size: 25px;
  }
`;
