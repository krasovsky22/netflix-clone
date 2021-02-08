import React, { MouseEvent } from "react";
import { ImageType, WithChildrenType } from "@components/common-types";
import { Container, Title, List, Item, Picture, Name } from "./styles/profiles";

const Profiles = ({ children, ...rest }: WithChildrenType) => {
  return <Container {...rest}>{children}</Container>;
};

Profiles.Title = ({ children, ...rest }: WithChildrenType) => {
  return <Title {...rest}>{children}</Title>;
};

Profiles.List = ({ children, ...rest }: WithChildrenType) => {
  return <List {...rest}>{children}</List>;
};

type ProfileItemType = {
  onClick: (event: any) => void;
};

Profiles.Item = ({ children, ...rest }: WithChildrenType & ProfileItemType) => {
  return <Item {...rest}>{children}</Item>;
};

Profiles.Picture = ({ src, ...rest }: ImageType) => {
  return (
    <Picture src={src !== "" ? `/images/users/${src}.png` : "/images/misc/loading.gif"} {...rest} />
  );
};

Profiles.Name = ({ children, ...rest }: WithChildrenType) => {
  return <Name {...rest}>{children}</Name>;
};

export default Profiles;
