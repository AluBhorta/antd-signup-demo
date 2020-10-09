import React, { useContext } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { UserContext } from "./AppState";
import DashboardPage from "./pages/DashboardPage";
import SignUpPage from "./pages/SignUpPage";

const AppRouter: React.FC = ({ children }) => {
  const { user } = useContext(UserContext);
  return (
    <>
      <Router>
        {children}
        <Switch>
          <Route path="/signup" exact>
            <SignUpPage />
          </Route>
          <Route path="/dashboard">
            {user === null ? <Redirect to="/signup" /> : <DashboardPage />}
          </Route>

          <Redirect to="/signup" from="*" />
        </Switch>
      </Router>
    </>
  );
};

export default AppRouter;
