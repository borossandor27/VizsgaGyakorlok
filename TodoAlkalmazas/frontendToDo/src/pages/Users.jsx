import React from 'react';
import axios from 'axios';

export default function Users() {
    const [data, setData] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const axiosData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/user');
                setData(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
            
        }
        axiosData();
    }, []);

    return (
        <div>
            <h1>Főoldal</h1>
            {data.length > 0 ? (
                data.map(user => (
                    <div key={user.user_id}>
                        <h2>{user.name}</h2>
                        <p>{user.email}</p>
                        <p>Születésnap: {new Date(user.birthday).toLocaleDateString()}</p>
                    </div>
                ))
            ) : (
                <p>Betöltés...</p>
            )}
        </div>
    );
}
