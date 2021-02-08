import React from "react";
import { OptForm } from "@/components";

const OptFormContainer: React.FC = () => {
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
