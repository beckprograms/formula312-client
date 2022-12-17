import React from "react";
import { Route, Routes } from "react-router-dom";
import { Amplify } from "aws-amplify";
import { useAuthenticator } from "@aws-amplify/ui-react";

import { AppAuthenticator } from "./components/AppAuthenticator";
import LandingContainer from "./components/LandingContainer";
import { Details } from "./components/Details";

import "./App.css";

import awsExports from "./aws-exports";
Amplify.configure(awsExports);

const Home = () => {
  const { signOut } = useAuthenticator((context) => [context.user]);

  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<LandingContainer signOut={signOut} />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </React.Fragment>
  );
};

function App() {
  const { authStatus } = useAuthenticator((context) => [context.authStatus]);

  return (
    <>
      {authStatus === "configuring" ? (
        "Loading..."
      ) : authStatus !== "authenticated" ? (
        <AppAuthenticator />
      ) : (
        <Home />
      )}
    </>
  );
}

export default App;
