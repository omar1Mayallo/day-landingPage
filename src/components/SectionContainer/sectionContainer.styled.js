import styled from "styled-components";
import {themeList} from "../../contexts/ThemeContext/themeList";

export const SectionContainerStyled = styled.section`
  transition: all 0.5s;
  background-color: ${({theme: {theme}}) =>
    theme === themeList.light ? "var(--ds-light-0)" : "var(--ds-dark-4)"};
`;
