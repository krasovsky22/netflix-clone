import { Form } from "@/components";
import * as ROUTES from "@/constants/routes";
import { FooterContainer, HeaderContainer } from "@/containers";
import { FirebaseContext } from "@context/firebase";
import React, { useCallback, useContext, useState } from "react";
import { useHistory } from "react-router-dom";

const SignIn: React.FC = () => {
  const { firebase } = useContext(FirebaseContext);
  const history = useHistory();
  const [emailAddress, setEmailAddress] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const isInvalid = password === "" || emailAddress === "";

  const handleSignIn = useCallback(
    (event: React.FormEvent) => {
      event.preventDefault();

      firebase
        ?.auth()
        .signInWithEmailAndPassword(emailAddress, password)
        .then(() => {
          //push to the browse page
          history.push(ROUTES.BROWSE);
        })
        .catch((error) => {
          setEmailAddress("");
          setPassword("");
          setError(error.message);
        });
    },
    [emailAddress, password],
  );

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>

          {error && <Form.Error>{error}</Form.Error>}

          <Form.Base onSubmit={handleSignIn} method="POST">
            <Form.Input
              placeholder="Email Address"
              value={emailAddress}
              onChange={({ target }: React.ChangeEvent<HTMLInputElement>) =>
                setEmailAddress(target.value)
              }
              type="email"
            />

            <Form.Input
              placeholder="Password"
              autoComplete="off"
              type="password"
              value={password}
              onChange={({ target }: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(target.value)
              }
            />
            <Form.Submit disabled={isInvalid}>Sign In</Form.Submit>
          </Form.Base>

          <Form.Text>
            New to Netflix? <Form.Link to={ROUTES.SIGN_UP}>Sign up now.</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you`re not a bot. Learn more.
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
};
export default SignIn;
