import { Authenticator, translations } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { I18n } from "aws-amplify/utils";
import "./App.css";

I18n.putVocabularies(translations);
I18n.setLanguage("ja");

function App() {
  return (
    <Authenticator hideSignUp>
      {({ signOut, user }) => (
        <main>
          <h1>Hello {user?.username}</h1>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
}

export default App;
