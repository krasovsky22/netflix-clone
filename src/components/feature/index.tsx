import React from "react";
import { WithChildrenType } from "@components/common-types";
import { Container, Title, SubTitle } from "./styles/feature";

const Feature = ({ children, ...rest }: WithChildrenType) => {
  return <Container {...rest}>{children}</Container>;
};

Feature.Title = ({ children, ...rest }: WithChildrenType) => {
  return <Title {...rest}>{children}</Title>;
};

Feature.SubTitle = ({ children, ...rest }: WithChildrenType) => {
  return <SubTitle {...rest}>{children}</SubTitle>;
};

export default Feature;
