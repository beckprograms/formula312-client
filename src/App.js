import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingContainer from "./components/LandingContainer";
import { Details } from "./components/Details";
import "./App.css";

import { Amplify } from "aws-amplify";

import { Authenticator, withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import awsExports from "./aws-exports";
Amplify.configure(awsExports);

function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <React.Fragment>
          <Routes>
            <Route
              path="/"
              element={<LandingContainer signOut={() => signOut()} />}
            />
            <Route path="/details" element={<Details />} />
          </Routes>
        </React.Fragment>
      )}
    </Authenticator>
  );
}

export default App;
