import React, { useEffect, useState } from 'react'
import axios from 'axios'

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
            {data ? (
                <div>
                    <h2>{data.title}</h2>
                    <p>{data.body}</p>
                </div>
            ) : (
                <p>Betöltés...</p>
            )}
        </div>
    )
}