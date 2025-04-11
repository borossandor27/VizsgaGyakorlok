import React from 'react'

export default function Home() {
    const data = [
        {
            "user_id": 1,
            "name": "Ádám",
            "email": "adam@valahol.hu",
            "birthday": "2014-01-06T23:00:00.000Z"
        },
        {
            "user_id": 2,
            "name": "Éva",
            "email": "eva@valahol.hu",
            "birthday": "2008-04-09T22:00:00.000Z"
        }
    ];

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
