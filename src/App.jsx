// src/App.jsx

// Import necessary React and React Router components
import React from "react"; // React core library
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; // React Router for navigation and routing
import UserList from "./components/UserList"; // Component to display list of users
import UserDetail from "./components/UserDetail"; // Component to display user details
import './styles/styles.css'; // Import custom CSS styles for styling

// Root App component with navbar and routes
// Main application component that sets up routing and navigation
function App() {
  return (
    // Router component to enable client-side routing
    <Router>
      <div>
        {/* Navigation bar with glass effect styling */}
        <nav className="navbar">
          {/* Main dashboard link */}
          <Link to="/">User Dashboard</Link>
          
          <div>
            {/* Home navigation link */}
            <Link to="/">Home</Link>
          </div>
        </nav>
        
        {/* Route configuration for the application */}
        <Routes>
          {/* Route for the home page - displays user list */}
          <Route path="/" element={<UserList />} />
          
          {/* Route for individual user detail pages - uses dynamic parameter :id */}
          <Route path="/users/:id" element={<UserDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

// Export the App component as the default export
export default App;
