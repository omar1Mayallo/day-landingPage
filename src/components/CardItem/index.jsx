import React from "react";
import {CardItemStyled} from "./cardItem.styled";
const CardItem = ({
  Icon,
  alignStateCenter,
  cardNumber,
  cardText,
  cardTitle,
}) => {
  return (
    <CardItemStyled className="mb-2" centeredState={alignStateCenter}>
      {cardNumber ? (
        <span className="card-num">{cardNumber}</span>
      ) : (
        <div className="card-icon-square">
          <Icon />
        </div>
      )}
      <h4>{cardTitle}</h4>
      <p>{cardText}</p>
    </CardItemStyled>
  );
};

export default CardItem;
