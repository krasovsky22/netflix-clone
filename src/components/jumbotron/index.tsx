import React from "react";
import { WithChildrenType } from "@components/common-types";

import {
  Container,
  Image,
  Inner,
  InnerPropsType,
  Pane,
  SubTitle,
  Title,
  Item,
} from "./styles/jumbotron";

export type JumbotronPropsType = InnerPropsType & WithChildrenType;

export default function Jumbotron({ direction, children, ...rest }: JumbotronPropsType) {
  return (
    <Item {...rest}>
      <Inner direction={direction}>{children}</Inner>
    </Item>
  );
}

Jumbotron.Container = function ({ children, ...rest }: WithChildrenType) {
  return <Container {...rest}>{children}</Container>;
};

Jumbotron.Pane = function ({ children, ...rest }: WithChildrenType) {
  return <Pane {...rest}>{children}</Pane>;
};

Jumbotron.Title = function ({ children, ...rest }: WithChildrenType) {
  return <Title {...rest}>{children}</Title>;
};

Jumbotron.SubTitle = function ({ children, ...rest }: WithChildrenType) {
  return <SubTitle {...rest}>{children}</SubTitle>;
};

Jumbotron.Image = function ({ ...rest }: any) {
  return <Image {...rest} />;
};
