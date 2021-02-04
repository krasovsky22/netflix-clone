import React from 'react';
import { WithChildrenType } from '@components/common-types';
import {
  Container,
  Row,
  Column,
  Link,
  Title,
  Text,
  Break,
} from './styles/footer';

export default function Footer({ children, ...rest }: WithChildrenType) {
  return <Container {...rest}>{children}</Container>;
}

Footer.Row = function ({ children, ...rest }: WithChildrenType) {
  return <Row {...rest}>{children}</Row>;
};

Footer.Column = function ({ children, ...rest }: WithChildrenType) {
  return <Column {...rest}>{children}</Column>;
};

Footer.Link = function ({
  children,
  ...rest
}: WithChildrenType & { href: string }) {
  return <Link {...rest}>{children}</Link>;
};

Footer.Title = function ({ children, ...rest }: WithChildrenType) {
  return <Title {...rest}>{children}</Title>;
};

Footer.Text = function ({ children, ...rest }: WithChildrenType) {
  return <Text {...rest}>{children}</Text>;
};

Footer.Break = function ({ ...rest }: {}) {
  return <Break {...rest} />;
};
