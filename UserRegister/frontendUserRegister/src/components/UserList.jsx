import { useState, useEffect } from 'react';
import axios from 'axios';
const baseUrl = 'http://localhost:3000/user';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [form, setForm] = useState({ name: '', email: '', birthday: '' });

    useEffect(() => {
        axios.get(baseUrl)
            .then(response => {
                console.log(response.data); // Ellenőrizd a pontos adatstruktúrát!
                setUsers(response.data);
            })
            .catch(error => console.error(error));
    }, []);


    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(baseUrl, form)
            .then(() => {
                setForm({ name: '', email: '', birthday: '' });
                return axios.get(baseUrl);
            })
            .then(response => setUsers(response.data))
            .catch(error => console.error(error));
    };

    return (
        <div>
            <h1>Users</h1>
            <form onSubmit={handleSubmit}>
                <input type='text' name="name" value={form.name} onChange={handleChange} placeholder="Name" />
                <input type='email' name="email" value={form.email} onChange={handleChange} placeholder="Email" />
                <input type='date' name="birthday" value={form.birthday} onChange={handleChange} placeholder="Age" />
                <button type="submit">Add User</button>
            </form>
            <ul>
                {users.map((user, index) => (
                    <li key={index}>{user.name} - {user.email} - {user.birthday}</li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;