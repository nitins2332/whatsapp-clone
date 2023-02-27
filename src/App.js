import Messenger from "./Components/Messenger";

import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  const clientId =
    "649174905424-ia8kssaiv03lpcr9oqbggqobfc82e0rp.apps.googleusercontent.com";

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Messenger />
    </GoogleOAuthProvider>
  );
}

export default App;
