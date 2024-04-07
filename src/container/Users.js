import React, { useState, useEffect } from 'react';

function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                setUsers(data);
            });
    }, []); // Empty dependency array to run effect only once

    return (
        <div>
            <h2>Users</h2>
            <ul>
                {users.map((user, index) => (
                    <li key={index}>{user.name}, {user.email}</li>
                ))}
            </ul>
        </div>
    );
}

export default Users;
