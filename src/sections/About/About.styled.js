import styled from "styled-components";
import {Row, Image} from "react-bootstrap";

//About
export const RowReversedStyled = styled(Row)`
  @media (max-width: 991px) {
    flex-direction: column-reverse;
  }
`;

//Sponsors
export const GrayImage = styled(Image)`
  transition: all 0.5s;
  cursor: pointer;
  filter: grayscale(100);
  @media (max-width: 991px) {
    padding: 10px 0;
  }
  &:hover {
    filter: grayscale(0);
    transform: scale(1.3);
  }
`;
