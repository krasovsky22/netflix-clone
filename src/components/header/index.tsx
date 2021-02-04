import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import {
  ImageType,
  LinkType,
  WithChildrenType,
} from '@components/common-types';
import { Container, ButtonLink, Background, Logo } from './styles/header';

const Header = ({ children, ...rest }: WithChildrenType) => {
  return <Background {...rest}>{children}</Background>;
};

Header.Frame = ({ children, ...rest }: WithChildrenType) => {
  return <Container {...rest}>{children}</Container>;
};

Header.ButtonLink = ({ children, ...rest }: WithChildrenType & LinkType) => {
  return <ButtonLink {...rest}>{children}</ButtonLink>;
};

Header.Logo = ({ to, ...rest }: LinkType & ImageType) => {
  return (
    <ReactRouterLink to={to}>
      <Logo {...rest} />
    </ReactRouterLink>
  );
};

export default Header;
