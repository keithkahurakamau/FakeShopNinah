// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import UserList from "./components/UserList";
import UserDetail from "./components/UserDetail";
import './styles/styles.css';


// Root App component with navbar and routes
function App() {
return (
<Router>
<div>
<nav className="navbar">
<Link to="/">User Dashboard</Link>
<div>
<Link to="/">Home</Link>

</div>
</nav>
<Routes>
<Route path="/" element={<UserList />} />
<Route path="/users/:id" element={<UserDetail />} />
</Routes>
</div>
</Router>
);
}


export default App;