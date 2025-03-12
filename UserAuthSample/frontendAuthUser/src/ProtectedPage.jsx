import { useEffect, useState } from "react";

const ProtectedPage = ({ setToken }) => {
    const [message, setMessage] = useState("Betöltés...");

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            setMessage("Nincs token, hozzáférés megtagadva");
            return;
        }

        fetch("http://localhost:5000/protected", {
            headers: { 
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        })
        .then((res) => {
            if (!res.ok) {
                throw new Error("Hozzáférés megtagadva");
            }
            return res.json();
        })
        .then((data) => setMessage(data.message))
        .catch((error) => setMessage(error.message));
    }, []);

    // **Kilépés funkció**
    const handleLogout = () => {
        localStorage.removeItem("token"); // Token törlése
        setToken(null); // App állapot frissítése
    };

    return (
        <div>
            <h2>{message}</h2>
            <button onClick={handleLogout}>Kilépés</button>
        </div>
    );
};

export default ProtectedPage;
