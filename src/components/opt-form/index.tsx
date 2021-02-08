import { WithChildrenType } from "@components/common-types";
import React from "react";
import { Break, Button, Container, Input, Text } from "./styles/opt-form";

const OptForm = ({ children, ...rest }: WithChildrenType) => {
  return <Container {...rest}>{children}</Container>;
};

OptForm.Input = ({ ...rest }) => {
  return <Input {...rest} />;
};

OptForm.Button = ({ children, ...rest }: WithChildrenType) => {
  return (
    <Button {...rest}>
      {children} <img src="/images/icons/chevron-right.png" alt="Try Now" />
    </Button>
  );
};

OptForm.Text = ({ children, ...rest }: WithChildrenType) => {
  return <Text {...rest}>{children}</Text>;
};

OptForm.Break = ({ ...rest }) => {
  return <Break {...rest} />;
};

export default OptForm;
