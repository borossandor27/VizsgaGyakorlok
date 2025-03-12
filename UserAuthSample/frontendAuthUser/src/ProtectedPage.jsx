import { useEffect, useState } from "react";

const ProtectedPage = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch("http://localhost:5000/protected", {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage("Hozzáférés megtagadva"));
  }, []);

  return <h2>{message}</h2>;
};

export default ProtectedPage;
