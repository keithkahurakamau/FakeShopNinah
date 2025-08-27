// src/components/UserCard.jsx
import React from "react";
import { Link } from "react-router-dom";
import '../styles/styles.css';


function UserCard({ user }) {
return (
<Link to={`/users/${user.id}`} className="user-card-link">
<div className="card user-card">
<p><strong>Username:</strong> {user.username}</p>
<p><strong>Email:</strong> {user.email}</p>
<p><strong>Name:</strong> {user.name.firstname} {user.name.lastname}</p>
</div>
</Link>
);
}


export default UserCard;