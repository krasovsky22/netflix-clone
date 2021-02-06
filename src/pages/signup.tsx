import { Form } from '@/components';
import * as ROUTES from '@/constants/routes';
import { FooterContainer, HeaderContainer } from '@/containers';
import { FirebaseContext } from '@context/firebase';
import React, { useCallback, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { firebase } from '@lib/firebase.prod';

const SignUp: React.FC = () => {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [firstName, setFirstName] = useState<string>('');
  const [emailAddress, setEmailAddress] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const isInvalid = firstName === '' || password === '' || emailAddress === '';

  const handleSignUp = useCallback(
    (event: React.FormEvent) => {
      event.preventDefault();

      const signUpProcess = async () => {
        const result = await firebase
          ?.auth()
          .createUserWithEmailAndPassword(emailAddress, password);

        await result?.user?.updateProfile({
          displayName: firstName,
          photoURL: `${Math.floor(Math.random() * 5) + 2}`,
        });

        history.push(ROUTES.BROWSE);
      };

      signUpProcess()
        .then(() => {})
        .catch((error) => {
          setError(error.message);
        });
    },
    [firstName, emailAddress, password]
  );

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>

          {error && <Form.Error>{error}</Form.Error>}

          <Form.Base onSubmit={handleSignUp} method="POST">
            <Form.Input
              placeholder="First Name"
              value={firstName}
              onChange={({ target }: React.ChangeEvent<HTMLInputElement>) =>
                setFirstName(target.value)
              }
            />
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
            <Form.Submit disabled={isInvalid}>Sign Up</Form.Submit>
          </Form.Base>

          <Form.Text>
            Already a user?{' '}
            <Form.Link to={ROUTES.SIGN_IN}>Sign in now.</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. Learn more.{' '}
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
};
export default SignUp;
