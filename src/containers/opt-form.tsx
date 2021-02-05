import React from 'react';
import { OptForm } from '@/components';

type OptFormContainerPropsType = {};

const OptFormContainer: React.FC<OptFormContainerPropsType> = () => {
  return (
    <OptForm>
      <OptForm.Input placeholder="Email address" />
      <OptForm.Button>Try it now</OptForm.Button>
      <OptForm.Break />
      <OptForm.Text>
        Ready to watch? Enter your email to create or restart your membership.
      </OptForm.Text>
    </OptForm>
  );
};
export default OptFormContainer;
