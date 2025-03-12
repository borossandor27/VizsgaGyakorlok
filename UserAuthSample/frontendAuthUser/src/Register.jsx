import { useState } from "react";

const Register = ({ setShowRegister }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();
        const res = await fetch("http://localhost:5000/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password })
        });

        const data = await res.json();
        if (data.message) {
            alert("Sikeres regisztráció! Most jelentkezz be.");
            setShowRegister(false); // Visszavisz a login oldalra
        } else {
            alert(data.error);
        }
    };

    return (
        <div>
            <h2>Regisztráció</h2>
            <form onSubmit={handleRegister}>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Felhasználónév" required />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Jelszó" required />
                <button type="submit">Regisztráció</button>
            </form>
            <p>Van már fiókod? <button onClick={() => setShowRegister(false)}>Vissza a bejelentkezéshez</button></p>
        </div>
    );
};

export default Register;
