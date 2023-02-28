import { GoogleOAuthProvider } from "@react-oauth/google";

import Messenger from "./Components/Messenger";
import AccountProvider from "./Constext/AccountProvider";

function App() {
  const clientId =
    "649174905424-ia8kssaiv03lpcr9oqbggqobfc82e0rp.apps.googleusercontent.com";

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
        <Messenger />
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
