import React from 'react';
import { OptForm, Accordion } from '@/components';

type FAQDataType = {
  id: number;
  header: string;
  body: string;
};

const faqsData: FAQDataType[] = require('@fixtures/faqs.json');

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

      <OptForm>
        <OptForm.Input placeholder="Email address" />
        <OptForm.Button>Try it now</OptForm.Button>
        <OptForm.Break />
        <OptForm.Text>
          Ready to watch? Enter your email to create or restart your membership.
        </OptForm.Text>
      </OptForm>
    </Accordion>
  );
};

export default FAQsContainer;
