import React from "react";
import {CustomButtonStyled} from "./customButton.styled";

const CustomButton = ({children, ...restParams}) => {
  return <CustomButtonStyled {...restParams}>{children}</CustomButtonStyled>;
};

export default CustomButton;
