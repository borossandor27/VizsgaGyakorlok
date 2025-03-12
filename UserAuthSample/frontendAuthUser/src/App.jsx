import { useState } from "react";
import Login from "./Login";
import ProtectedPage from "./ProtectedPage";

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  return (
    <div>
      {!token ? <Login setToken={setToken} /> : <ProtectedPage />}
    </div>
  );
};

export default App;
