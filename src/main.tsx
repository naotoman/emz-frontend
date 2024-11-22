import { Amplify } from "aws-amplify";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: __USER_POOL_ID__,
      userPoolClientId: __USER_POOL_CLIENT_ID__,
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
