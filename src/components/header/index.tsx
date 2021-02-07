import React, { Dispatch, SetStateAction, useState } from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import {
  ImageType,
  LinkType,
  WithChildrenType,
  ClickableType,
} from '@components/common-types';
import {
  Container,
  ButtonLink,
  Background,
  Logo,
  BackgroundType,
  Feature,
  Text,
  Link,
  Group,
  FeatureCallout,
  ActiveLink,
  Picture,
  Dropdown,
  Profile,
  Search,
  SearchIcon,
  SearchInput,
  PlayButton,
} from './styles/header';

const Header = ({ children, ...rest }: WithChildrenType & BackgroundType) => {
  return <Background {...rest}>{children}</Background>;
};

Header.TextLink = ({
  children,
  ...rest
}: WithChildrenType & ActiveLink & ClickableType) => {
  return <Link {...rest}>{children}</Link>;
};

Header.Frame = ({ children, ...rest }: WithChildrenType) => {
  return <Container {...rest}>{children}</Container>;
};

Header.Group = ({ children, ...rest }: WithChildrenType) => {
  return <Group {...rest}>{children}</Group>;
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

Header.Feature = ({ children, ...rest }: WithChildrenType) => {
  return <Feature {...rest}>{children}</Feature>;
};

Header.FeatureCallout = ({ children, ...rest }: WithChildrenType) => {
  return <FeatureCallout {...rest}>{children}</FeatureCallout>;
};

Header.Text = ({ children, ...rest }: WithChildrenType) => {
  return <Text {...rest}>{children}</Text>;
};

Header.Picture = ({ src, ...rest }: ImageType) => {
  return <Picture src={`/images/users/${src}.png`} {...rest} />;
};

Header.Profile = ({ children, ...rest }: WithChildrenType) => {
  return <Profile {...rest}>{children}</Profile>;
};

Header.Dropdown = ({ children, ...rest }: WithChildrenType) => {
  return <Dropdown {...rest}>{children}</Dropdown>;
};

Header.PlayButton = ({ children, ...rest }: WithChildrenType) => {
  return <PlayButton {...rest}>{children}</PlayButton>;
};

type SearchType = {
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
};
Header.Search = ({ searchTerm, setSearchTerm, ...rest }: SearchType) => {
  const [searchActive, setSearchActive] = useState<boolean>(false);

  console.table({ searchActive });
  return (
    <Search {...rest}>
      <SearchIcon
        onClick={() => setSearchActive((searchActive) => !searchActive)}
      >
        <img src="/images/icons/search.png" alt="Search" />
      </SearchIcon>
      <SearchInput
        value={searchTerm}
        onChange={({ target }) => setSearchTerm(target.value)}
        placeholder="Search films and series"
        active={searchActive}
      />
    </Search>
  );
};

export default Header;
