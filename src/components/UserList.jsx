// src/components/UserList.jsx

// Import necessary React hooks and components
import React, { useEffect } from "react"; // React core library with useEffect hook
import useUserStore from "../store/userStore"; // Zustand store for global user state management
import UserCard from "./UserCard"; // UserCard component for displaying individual users
import '../styles/styles.css'; // Import custom CSS styles for styling the component

// UserList component - fetches and displays a grid of user cards
// Component to fetch and display users in a grid layout
function UserList() {
  // Destructure state and actions from the user store
  const { users, loading, error, fetchUsers } = useUserStore();

  // useEffect hook to fetch users when component mounts
  useEffect(() => {
    fetchUsers(); // Call the fetchUsers action from the store
  }, [fetchUsers]); // Dependency: re-run effect if fetchUsers function changes

  // Display loading state while data is being fetched
  if (loading) return <p style={{ textAlign: 'center', color: '#be185d', fontWeight: 'bold' }}>Loading users...</p>;
  
  // Display error message if API request fails
  if (error) return <p style={{ textAlign: 'center', color: 'red', fontWeight: 'bold' }}>Error: {error}</p>;

  // Render the grid of user cards
  return (
    <div className="user-grid">
      {/* Map through users array and render a UserCard for each user */}
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}

// Export the component for use in other parts of the application
export default UserList;
