import React from 'react';
import {
  JumbotronContainer,
  FooterContainer,
  FAQsContainer,
  HeaderContainer,
} from '@/containers';
type HomePropsType = {};

const Home: React.FC<HomePropsType> = (props) => {
  return (
    <>
      <HeaderContainer />
      <JumbotronContainer />
      <FAQsContainer />
      <FooterContainer />
    </>
  );
};
export default Home;
