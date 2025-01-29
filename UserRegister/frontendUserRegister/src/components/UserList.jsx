/**
 * UserList component fetches and displays a list of users, and provides a form to add new users.
 * 
 * @component
 * @example
 * return (
 *   <UserList />
 * )
 * 
 * @returns {JSX.Element} The rendered component.
 * 
 * @typedef {Object} User
 * @property {string} name - The name of the user.
 * @property {string} email - The email of the user.
 * @property {string} birthday - The birthday of the user.
 * @property {number} id - The unique identifier of the user.
 * 
 * @typedef {Object} Form
 * @property {string} name - The name input value.
 * @property {string} email - The email input value.
 * @property {string} birthday - The birthday input value.
 * 
 * @typedef {Object} AxiosResponse
 * @property {Array<User>} data - The data returned from the API.
 * 
 * @function useEffect
 * Fetches the list of users from the API when the component mounts.
 * 
 * @function handleChange
 * Updates the form state when an input value changes.
 * 
 * @function handleSubmit
 * Submits the form data to the API to add a new user, then fetches the updated list of users.
 * 
 * @param {Object} e - The event object.
 * @param {Object} e.target - The target element of the event.
 * @param {string} e.target.name - The name of the input element.
 * @param {string} e.target.value - The value of the input element.
 * 
 * @param {Object} user - The user object.
 * @param {number} user.id - The unique identifier of the user.
 * @param {string} user.name - The name of the user.
 * @param {string} user.email - The email of the user.
 * @param {string} user.birthday - The birthday of the user.
 * 
 * @param {number} index - The index of the user in the users array.
 */
import { useState, useEffect } from 'react';
import axios from 'axios';
import ButtonUpdate from './ButtonUpdate';
import ButtonDelete from './ButtonDelete';

export const baseUrl = 'http://localhost:3000/user';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [form, setForm] = useState({ name: '', email: '', birthday: '' });

    // API hívás a felhasználók listájának lekéréséhez
    const fetchUsers = () => {
        axios.get(baseUrl)
            .then(response => setUsers(response.data))
            .catch(error => console.error(error));
    };

    // Komponens betöltésekor lefut
    useEffect(() => {
        fetchUsers();
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
            <h1>Felhasználók nyilvántartása</h1>
            <form onSubmit={handleSubmit}>
                <input type='text' name="name" value={form.name} onChange={handleChange} placeholder="Name" />
                <input type='email' name="email" value={form.email} onChange={handleChange} placeholder="Email" />
                <input type='date' name="birthday" value={form.birthday} onChange={handleChange} placeholder="Age" />
                <button type="submit">Add User</button>
            </form>
            <h2>Regisztrált Felhasználók</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Birthday</th>
                        <th>Delete</th>
                        <th>Update</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.birthday}</td>
                            <td><ButtonDelete
                                id={user.id}
                                onDeleteSuccess={() => console.log('Delete completed!')}
                            />
                            </td>
                            <td><ButtonUpdate
                                id={user.id}
                                updatedData={{ name: 'New Name', email: 'newemail@example.com' }}
                                onUpdateSuccess={() => console.log('Update completed!')}
                            />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
};

export default UserList;