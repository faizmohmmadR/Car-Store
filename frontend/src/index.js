import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Feed from "./Components/Feed";
import Add from "./Components/Add";
import SignUp from "./Components/user/SignUp";
import SignIn from "./Components/user/SignIn";
import App from "./App";
import UserProfile from "./Components/user/UserProfile";
import CarDetail from "./Components/CarDetail";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Users from "./Components/Delete";
import Sign from "./Components/Sign";
import Regisrer from "./Components/user/Regisrer";
import Logout, { logout } from "./Components/user/Logout";


const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Feed />,
      },
      {
        path: "/add/",
        element: <Add />,
      },
    ],
  },
  {
    path: "/detail/",
    element: <CarDetail />,
  },
  {
    path: "/userProfile/",
    element: <UserProfile />,
  },
  {
    path: "/signup/",
    element: <SignUp />,
  },
  {
    path: "/signin/",
    element: <SignIn />,
  },/////////////////////////////////// testing
  {
    path: "/del/",
    element: <Users />,
  },
  {
    path: "/for/",
    element: <Sign />,
  },
  {
    path: "/reg/",
    element: <Regisrer/>,
  },
  {
    path: "/logout/",
    element: <Logout/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  </React.StrictMode>
);
