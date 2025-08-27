/* src/main.jsx */

// Import React and ReactDOM for rendering the application
import React from 'react'; // React core library
import ReactDOM from 'react-dom/client'; // React DOM library for browser rendering
import App from './App'; // Main App component
import './styles/styles.css'; // Import global CSS styles for the entire application

// Create a root element for React to render into
// Uses the DOM element with id 'root' (typically defined in index.html)
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the application
root.render(
  // React StrictMode wrapper for development-time checks and warnings
  <React.StrictMode>
    {/* Main App component that contains the entire application */}
    <App />
  </React.StrictMode>
);
