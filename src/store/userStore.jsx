// src/store/userStore.js
// Zustand store to manage global state for users
import { create } from "zustand";
import axios from "axios";


const useUserStore = create((set) => ({
users: [], // list of users
loading: false, // loading state
error: null, // error state


// Action: Fetch users from API
fetchUsers: async () => {
set({ loading: true, error: null });
try {
const response = await axios.get("https://fakestoreapi.com/users");
set({ users: response.data, loading: false });
} catch (err) {
set({ error: err.message, loading: false });
}
},
}));


export default useUserStore;