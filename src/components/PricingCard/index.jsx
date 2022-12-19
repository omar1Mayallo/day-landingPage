import React from "react";
import CustomButton from "../CustomButton";
import {PricingCardStyled} from "./pricingCard.styled";

const PricingCard = ({bloodState, planType, buttonType, price, list}) => {
  return (
    <PricingCardStyled bloodState={bloodState} planType={planType}>
      <h3>{planType}</h3>
      <h4>
        <sup>$</sup>
        <span>{price}</span>
        <sub>/ month</sub>
      </h4>
      <ul>
        {list.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
      <CustomButton type={buttonType} className="mb-4">
        Buy Now
      </CustomButton>
    </PricingCardStyled>
  );
};

export default PricingCard;
