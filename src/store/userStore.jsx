// src/store/userStore.jsx

// Zustand store to manage global state for users
import { create } from "zustand"; // Zustand library for state management
import axios from "axios"; // HTTP client for making API requests

// Create a Zustand store for managing user-related state
const useUserStore = create((set) => ({
  // State properties
  users: [], // Array to store the list of users fetched from API
  loading: false, // Boolean to track if data is currently being loaded
  error: null, // String to store any error messages from API calls

  // Action: Fetch users from API
  fetchUsers: async () => {
    // Set loading state to true and clear any previous errors
    set({ loading: true, error: null });
    
    try {
      // Make API request to fetch users from Fake Store API
      const response = await axios.get("https://fakestoreapi.com/users");
      
      // Update state with fetched users and set loading to false
      set({ users: response.data, loading: false });
    } catch (err) {
      // If error occurs, store error message and set loading to false
      set({ error: err.message, loading: false });
    }
  },
}));

// Export the store for use in React components
export default useUserStore;
