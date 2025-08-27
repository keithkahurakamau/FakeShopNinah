# FakeShopNinah - User Management Application Documentation

## Overview
This is a React-based user management application that displays user data from the Fake Store API. The application features a modern, responsive design with a rose-themed color scheme and provides both list and detail views of users.

## Project Structure

```
src/
├── components/          # React components
│   ├── UserList.jsx    # Displays grid of user cards
│   ├── UserCard.jsx    # Individual user card component
│   └── UserDetail.jsx  # Detailed user information view
├── store/              # State management
│   └── userStore.jsx   # Zustand store for user data
├── styles/             # Styling
│   └── styles.css      # Global CSS styles
├── App.jsx             # Main application component
└── main.jsx            # Application entry point
```

## Technology Stack

- **React 19.1.1** - UI library
- **React Router DOM 7.8.2** - Client-side routing
- **Zustand 5.0.8** - State management
- **Axios 1.11.0** - HTTP client for API requests
- **Vite 7.1.2** - Build tool and development server

## Component Documentation

### UserList.jsx
**Purpose**: Fetches and displays a grid of user cards
- Uses Zustand store to manage user data state
- Handles loading and error states
- Renders UserCard components in a responsive grid layout
- Automatically fetches users on component mount

### UserCard.jsx
**Purpose**: Displays summary information for a single user
- Clickable card that navigates to user detail page
- Shows username, email, and full name
- Uses React Router Link for navigation

### UserDetail.jsx
**Purpose**: Displays detailed information for a specific user
- Fetches user data from API if not already in store
- Shows comprehensive user information
- Includes back navigation to user list
- Optimized to use cached data when available

### App.jsx
**Purpose**: Main application component with routing
- Sets up React Router configuration
- Contains navigation bar
- Defines routes for user list and user detail pages

## State Management (userStore.jsx)

The application uses Zustand for state management with the following properties:

- `users`: Array of user objects
- `loading`: Boolean indicating if data is being fetched
- `error`: String containing any error messages
- `fetchUsers`: Async function to fetch users from API

## Styling (styles.css)

The application features a cohesive rose-themed design:

- **Color Scheme**: Rose-950 palette with gradients
- **Responsive Design**: Grid layout adapts to screen size
- **Glass Effect**: Navigation bar with backdrop filter
- **Hover Effects**: Smooth transitions and scaling
- **Card Design**: Consistent card styling throughout

## API Integration

The application integrates with the Fake Store API:
- Base URL: `https://fakestoreapi.com`
- Endpoints:
  - `/users` - Get all users
  - `/users/{id}` - Get specific user

## Key Features

1. **Responsive Design**: Adapts to mobile, tablet, and desktop screens
2. **State Management**: Efficient data caching with Zustand
3. **Error Handling**: Graceful error handling and user feedback
4. **Navigation**: Seamless client-side routing
5. **Performance**: Optimized API calls with caching strategy
6. **Accessibility**: Semantic HTML and proper link styling

## Development Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## File Purpose Summary

- **src/main.jsx**: Application entry point with ReactDOM rendering
- **src/App.jsx**: Main app component with routing setup
- **src/components/UserList.jsx**: User grid listing component
- **src/components/UserCard.jsx**: Individual user card component
- **src/components/UserDetail.jsx**: User detail view component
- **src/store/userStore.jsx**: Global state management store
- **src/styles/styles.css**: Global styling and responsive design
- **package.json**: Project dependencies and scripts
