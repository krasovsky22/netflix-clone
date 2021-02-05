import React from 'react';
import {
  JumbotronContainer,
  FooterContainer,
  FAQsContainer,
  HeaderContainer,
} from '@/containers';
import { Feature } from '@/components';
import OptFormContainer from './../containers/opt-form';
type HomePropsType = {};

const Home: React.FC<HomePropsType> = (props) => {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>
            Unlimited films, TV programmes and more.
          </Feature.Title>
          <Feature.SubTitle>
            Watch anywhere. Cancel at any time.
          </Feature.SubTitle>
          <OptFormContainer />
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <FAQsContainer />
      <FooterContainer />
    </>
  );
};
export default Home;
