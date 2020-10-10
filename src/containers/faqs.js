import React from "react";
import { Accordion } from "../components";
import faqsData from "../fixtures/faqs.json";
import { FaqsForm } from "../components";

export function FaqsContainer() {
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      {faqsData.map((item) => (
        <Accordion.Item key={item.id}>
          <Accordion.Header>{item.header}</Accordion.Header>
          <Accordion.Body>{item.body}</Accordion.Body>
        </Accordion.Item>
      ))}
      <Accordion.Item />

      <FaqsForm>
        <FaqsForm.Input placeholder="Email Adress" />
        <FaqsForm.Button>Try it now</FaqsForm.Button>
        <FaqsForm.Break />
        <FaqsForm.Text>
          Ready to watch? Enter your email to create or renew your membership
        </FaqsForm.Text>
      </FaqsForm>
    </Accordion>
  );
}
