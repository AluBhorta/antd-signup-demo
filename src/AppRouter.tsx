import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import SignUpPage from "./pages/SignUpPage";

const AppRouter: React.FC = ({ children }) => {
  return (
    <>
      <Router>
        {children}
        <Switch>
          <Route path="/signup" exact>
            <SignUpPage />
          </Route>
          <Route path="/dashboard" exact>
            <DashboardPage />
          </Route>

          <Redirect to="/signup" from="/" exact />
        </Switch>
      </Router>
    </>
  );
};

export default AppRouter;
