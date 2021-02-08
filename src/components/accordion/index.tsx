import React, { useState, createContext, useContext } from "react";
import { WithChildrenType } from "@components/common-types";

import { Container, Title, Item, Inner, Header, Body } from "./styles/accordion";

type AccordionPropsType = {
  children: React.ReactNode;
};

type ToggleContextType = {
  toggleShow?: boolean;
  setToggleShow?: (set: (arg0: boolean) => boolean) => void;
};

const ToggleContext = createContext<ToggleContextType>({});

const Accordion = ({ children, ...rest }: AccordionPropsType) => {
  return (
    <Container {...rest}>
      <Inner>{children}</Inner>
    </Container>
  );
};

Accordion.Title = ({ children, ...rest }: WithChildrenType) => {
  return <Title {...rest}>{children}</Title>;
};

Accordion.Item = ({ children, ...rest }: WithChildrenType) => {
  const [toggleShow, setToggleShow] = useState<boolean>(false);

  return (
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <Item {...rest}>{children}</Item>
    </ToggleContext.Provider>
  );
};

Accordion.Header = ({ children, ...rest }: WithChildrenType) => {
  const { toggleShow, setToggleShow } = useContext(ToggleContext);

  const imageProps = {
    src: toggleShow ? "/images/icons/close-slim.png" : "/images/icons/add.png",
    alt: toggleShow ? "Close" : "Open",
  };

  return (
    <Header
      onClick={() => setToggleShow && setToggleShow((toggleShow: boolean) => !toggleShow)}
      {...rest}
    >
      {children}
      <img {...imageProps} />
    </Header>
  );
};

Accordion.Body = ({ children, ...rest }: WithChildrenType) => {
  const { toggleShow } = useContext(ToggleContext);

  return toggleShow ? <Body {...rest}>{children}</Body> : null;
};

export default Accordion;
