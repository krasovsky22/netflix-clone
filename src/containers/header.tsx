import React from 'react';
import { Header } from '@/components';
import * as ROUTES from '@constants/routes';
import { WithChildrenType } from '@components/common-types';

type HeaderContainerPropsType = {};

const HeaderContainer: React.FC<
  HeaderContainerPropsType & WithChildrenType
> = ({ children, ...rest }) => {
  return (
    <Header {...rest}>
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} alt="Netflix" src="/images/logo.svg" />
        <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  );
};

export default HeaderContainer;
