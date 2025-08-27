// src/components/UserDetail.jsx

// Import necessary React hooks and libraries
import React, { useEffect, useState } from "react"; // React core library with hooks for state and effects
import { useParams, Link } from "react-router-dom"; // React Router hooks for URL parameters and navigation
import axios from "axios"; // HTTP client for making API requests
import useUserStore from "../store/userStore"; // Zustand store for global user state management
import '../styles/styles.css'; // Import custom CSS styles for styling the component

// UserDetail component - displays detailed information about a specific user
function UserDetail() {
  // Extract the 'id' parameter from the URL using React Router
  const { id } = useParams();
  
  // Access the global user store to get the list of users
  const { users } = useUserStore();
  
  // Local state to store the current user's detailed information
  const [user, setUser] = useState(null);

  // useEffect hook to fetch user data when component mounts or id/users change
  useEffect(() => {
    // First check if the user already exists in the global store
    const existingUser = users.find(u => u.id === parseInt(id));
    
    if (existingUser) {
      // If user exists in store, use that data (optimization to avoid unnecessary API calls)
      setUser(existingUser);
    } else {
      // If user not found in store, fetch from external API
      axios.get(`https://fakestoreapi.com/users/${id}`).then(res => setUser(res.data));
    }
  }, [id, users]); // Dependencies: re-run effect when id or users array changes

  // Display loading message while user data is being fetched
  if (!user) return <p style={{ textAlign: 'center', color: '#be185d', fontWeight: 'bold' }}>Loading user...</p>;

  // Render the user details component
  return (
    <div className="detail-container">
      {/* Main heading with username */}
      <h2>{user.username}</h2>
      
      {/* User details displayed in styled cards */}
      <div className="detail-card user-card"><strong>Username:</strong> {user.username}</div>
      <div className="detail-card user-card"><strong>Email:</strong> {user.email}</div>
      <div className="detail-card user-card"><strong>Name:</strong> {user.name.firstname} {user.name.lastname}</div>
      <div className="detail-card user-card"><strong>Phone:</strong> {user.phone}</div>
      
      {/* Navigation link to return to the user list */}
      <Link to="/" className="back-button">← Back to Users</Link>
    </div>
  );
}

// Export the component for use in other parts of the application
export default UserDetail;
