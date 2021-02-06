import { Browse, Home, SignIn, SignUp } from '@/pages';
import * as ROUTES from '@constants/routes';
import { IsUserRedirect, ProtectedRoute } from '@helpers/routes';
import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { useAuthListener } from '@/hooks';

function App() {
  const { user } = useAuthListener();

  console.log(user);

  return (
    <Router>
      <Switch>
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.SIGN_UP}
          exact
        >
          <SignUp />
        </IsUserRedirect>

        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.SIGN_IN}
          exact
        >
          <SignIn />
        </IsUserRedirect>

        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.HOME}
          exact
        >
          <Home />
        </IsUserRedirect>

        <ProtectedRoute exact path={ROUTES.BROWSE} user={user}>
          <Browse />
        </ProtectedRoute>
      </Switch>
    </Router>
  );
}

export default App;
