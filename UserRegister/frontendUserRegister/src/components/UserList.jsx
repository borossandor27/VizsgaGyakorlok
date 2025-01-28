import  { useState, useEffect } from 'react';
import axios from 'axios';
const baseUrl = 'http://localhost:3000/users';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [form, setForm] = useState({ name: '', email: '', age: '' });

    useEffect(() => {
        axios.get(baseUrl)
            .then(response => setUsers(response.data))
            .catch(error => console.error(error));
    }, []);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(baseUrl, form)
            .then(() => {
                setForm({ name: '', email: '', age: '' });
                return axios.get(baseUrl);
            })
            .then(response => setUsers(response.data))
            .catch(error => console.error(error));
    };

    return (
        <div>
            <h1>Users</h1>
            <form onSubmit={handleSubmit}>
                <input name="name" value={form.name} onChange={handleChange} placeholder="Name" />
                <input name="email" value={form.email} onChange={handleChange} placeholder="Email" />
                <input name="age" value={form.age} onChange={handleChange} placeholder="Age" />
                <button type="submit">Add User</button>
            </form>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name} - {user.email} - {user.age}</li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;