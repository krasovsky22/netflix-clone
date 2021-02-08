import { Feature } from "@/components";
import { FAQsContainer, FooterContainer, HeaderContainer, JumbotronContainer } from "@/containers";
import React from "react";
import OptFormContainer from "./../containers/opt-form";

const Home: React.FC = () => {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>Unlimited films, TV programmes and more.</Feature.Title>
          <Feature.SubTitle>Watch anywhere. Cancel at any time.</Feature.SubTitle>
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
