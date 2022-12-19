import styled from "styled-components";
export const PricingCardStyled = styled.div`
  padding: 15px;
  border-radius: 10px;
  background-color: ${(props) =>
    props.bloodState ? "var(--ds-blood)" : "var(--ds-light-6)"};
  h3 {
    font-size: 20px;
    font-weight: 600;
    text-transform: uppercase;
    padding: 10px;
    color: ${(props) =>
      props.bloodState ? "var(--ds-light-0)" : "var(--ds-dark-1)"};
  }
  h4 {
    padding: 10px;
    sup {
      color: ${(props) =>
        props.bloodState ? "var(--ds-light-0)" : "var(--ds-blood)"};
      font-size: 20px;
    }
    sub {
      color: var(--ds-light-3);
      font-size: 18px;
      font-weight: 300;
    }
    span {
      font-size: 40px;
      font-weight: 400;
      color: ${(props) =>
        props.bloodState ? "var(--ds-light-0)" : "var(--ds-blood)"};
    }
  }
  ul {
    li {
      padding: 8px;
      font-size: 15px;
      font-weight: 400;
      color: ${(props) =>
        props.bloodState ? "var(--ds-light-0)" : "var(--ds-dark-1)"};
      &:nth-of-type(4) {
        text-decoration: ${(props) =>
          props.planType === "free" && "line-through"};
      }
      &:nth-of-type(5) {
        text-decoration: ${(props) =>
          (props.planType === "free" || props.planType === "business") &&
          "line-through"};
      }
    }
  }
`;
