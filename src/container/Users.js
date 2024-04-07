import React, { useState } from 'react';

function Users() {
    const [users, setUsers] = useState([
        { name: 'Mohan', age: 25 },
        { name: 'Sohan', age: 26 }
    ]);

    return (
        <div>
            <h2>Users</h2>
            <ul>
                {users.map((user, index) => {
                    return <li key={index}>{user.name}, {user.age}</li>;
                })}
            </ul>
        </div>
    );
}

export default Users;
