import { Accordion } from "@/components";
import React from "react";
import OptFormContainer from "./opt-form";

type FAQDataType = {
  id: number;
  header: string;
  body: string;
};

const faqsData: FAQDataType[] = require("@fixtures/faqs.json");

const FAQsContainer: React.FC = () => {
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      {faqsData.map((data) => (
        <Accordion.Item key={data.id}>
          <Accordion.Header>{data.header}</Accordion.Header>
          <Accordion.Body>{data.body}</Accordion.Body>
        </Accordion.Item>
      ))}

      <OptFormContainer />
    </Accordion>
  );
};

export default FAQsContainer;
