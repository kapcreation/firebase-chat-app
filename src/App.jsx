import React from 'react';
import { useAuth } from './context/auth';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Navigate,
  Outlet,
} from "react-router-dom";
import Landing from './components/Landing/Landing';
import ChatRoom from './components/ChatRoom/ChatRoom';
import Login from './components/Login/Login'

function App() {
  const { user } = useAuth()

  const Layout = () => {
    return (
      <>
        <Navbar />
        <Outlet />
      </>
    )
  }

  const ProtectedRoute = ({ children }) => {
    if(!user) return <Navigate to='login' />

    return children
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProtectedRoute><Layout /></ProtectedRoute>,
      children: [
        {
          path: '/',
          element: <Landing />
        },
        {
          path: "room/:id",
          element: <ChatRoom />,
        },
      ]
    },
    {
      path: "login",
      element: !user ? <Login /> : <Navigate to='/' />,
    },
  ]);
  
  return (
    <div className="container">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;