import { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import ProtectedPage from "./ProtectedPage";

const App = () => {
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [showRegister, setShowRegister] = useState(false);

    return (
        <div>
            {!token ? (
                showRegister ? (
                    <Register setShowRegister={setShowRegister} />
                ) : (
                    <Login setToken={setToken} setShowRegister={setShowRegister} />
                )
            ) : (
                <ProtectedPage setToken={setToken} />
            )}
        </div>
    );
};

export default App;
