import React from "react";
import { HeaderContainer } from "../containers/header";
import { Feature, FaqsForm } from "../components";

import { JumbotronContainer } from "../containers/jumbotron";
import { FaqsContainer } from "../containers/faqs";
import { FooterContainer } from "../containers/footer";

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>Unlimited films, TV programmes and more</Feature.Title>
          <Feature.SubTitle>Watch anywhere, Cancel any time</Feature.SubTitle>
          <FaqsForm>
            <FaqsForm.Input placeholder="Email Adress" />
            <FaqsForm.Button>Try it now</FaqsForm.Button>
            <FaqsForm.Break />
            <FaqsForm.Text>
              Ready to watch? Enter your email to create or renew your
              membership
            </FaqsForm.Text>
          </FaqsForm>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}
