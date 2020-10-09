import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import SignUpPage from "./pages/SignUpPage";

const AppRoutes: React.FC = ({ children }) => {
  return (
    <>
      <Router>
        {children}
        <Switch>
          <Route path="/signup">
            <SignUpPage />
          </Route>
          <Route path="/dashboard">
            <DashboardPage />
          </Route>

          <Redirect to="/signup" from="/" />
        </Switch>
      </Router>
    </>
  );
};

export default AppRoutes;
