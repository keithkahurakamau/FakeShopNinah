// src/components/UserCard.jsx

// Import necessary React and React Router components
import React from "react"; // React core library
import { Link } from "react-router-dom"; // React Router component for navigation links
import '../styles/styles.css'; // Import custom CSS styles for styling the component

// UserCard component - displays a summary card for an individual user
// Props: user - object containing user data to display
function UserCard({ user }) {
  // Render a clickable card that navigates to the user's detail page
  return (
    // Link component that navigates to the user detail page when clicked
    <Link to={`/users/${user.id}`} className="user-card-link">
      {/* Card container with styling classes */}
      <div className="card user-card">
        {/* Display username with strong emphasis */}
        <p><strong>Username:</strong> {user.username}</p>
        
        {/* Display user email */}
        <p><strong>Email:</strong> {user.email}</p>
        
        {/* Display user's full name (firstname + lastname) */}
        <p><strong>Name:</strong> {user.name.firstname} {user.name.lastname}</p>
      </div>
    </Link>
  );
}

// Export the component for use in other parts of the application
export default UserCard;
