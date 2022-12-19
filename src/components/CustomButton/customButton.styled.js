import {Button} from "react-bootstrap";
import styled, {css} from "styled-components";

//Reset Styles
const defaultBtnStyles = css`
  transition: 0.5s;
  border: none;
  border-radius: 0;
  outline: none;
`;

const ButtonOnImgsStyles = css`
  color: white;
  background-color: transparent;
  border: 2px solid white;
  padding: 10px 25px;
  &:hover {
    background-color: var(--ds-blood);
    border-color: var(--ds-blood);
  }
`;

const ButtonRegularPricingStyles = css`
  color: var(--ds-light-0);
  background-color: var(--ds-blood);
  padding: 10px 40px;
  font-size: 15px;
  font-weight: 500;
  &:hover {
    background-color: #e82d2d;
  }
`;
const ButtonBloodPricingStyles = css`
  ${ButtonRegularPricingStyles}
  color: var(--ds-light-0);
  background-color: rgba(255, 255, 255, 0.2);
  &:hover {
    background-color: var(--ds-light-0);
    color: var(--ds-blood);
  }
`;

export const CustomButtonStyled = styled(Button)`
  ${defaultBtnStyles}
  ${(props) => {
    switch (props.type) {
      case "btn-on-img":
        return ButtonOnImgsStyles;
      case "regular-pricing-btn":
        return ButtonRegularPricingStyles;
      case "blood-pricing-btn":
        return ButtonBloodPricingStyles;
      default:
        return defaultBtnStyles;
    }
  }}
`;
