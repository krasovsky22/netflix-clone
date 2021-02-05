import React from 'react';
import {
  FormType,
  LinkType,
  WithChildrenType,
  WithDisabled,
} from '@components/common-types';
import {
  Container,
  Base,
  Error,
  Title,
  Text,
  TextSmall,
  Link,
  Input,
  Submit,
} from './styles/form';

const Form = ({ children, ...rest }: WithChildrenType) => {
  return <Container {...rest}>{children}</Container>;
};

Form.Error = ({ children, ...rest }: WithChildrenType) => {
  return <Error {...rest}>{children}</Error>;
};

Form.Base = ({ children, ...rest }: WithChildrenType & FormType) => {
  return <Base {...rest}>{children}</Base>;
};

Form.Title = ({ children, ...rest }: WithChildrenType) => {
  return <Title {...rest}>{children}</Title>;
};

Form.Text = ({ children, ...rest }: WithChildrenType) => {
  return <Text {...rest}>{children}</Text>;
};

Form.TextSmall = ({ children, ...rest }: WithChildrenType) => {
  return <TextSmall {...rest}>{children}</TextSmall>;
};

Form.Link = ({ children, ...rest }: WithChildrenType & LinkType) => {
  return <Link {...rest}>{children}</Link>;
};

Form.Input = ({ ...rest }) => {
  return <Input {...rest} />;
};

Form.Submit = ({
  children,
  disabled = false,
  ...rest
}: WithChildrenType & WithDisabled) => {
  return (
    <Submit disabled={disabled} {...rest}>
      {children}
    </Submit>
  );
};

export default Form;
