import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Feed from "./Components/Feed";
import Add from "./Components/Add";
import SignUp from "./Components/user/SignUp";
import SignIn from "./Components/user/SignIn";
import UserProfile from "./Components/user/UserProfile";
import CarDetail from "./Components/CarDetail";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Users from "./Components/Delete";
import Regisrer from "./Components/user/Regisrer";
import Logout from "./Components/user/Logout";
import UpdateCar from "./Components/UpdateCar";
import App from "./Components/App"
import Regisrer1 from "./Components/user/Register1";
import Login from "./Components/user/Login";

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
    path: "/detail/:id/",
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
    path: "/signin/:id/",
    element: <SignIn />,
  }, /////////////////////////////////// testing
  {
    path: "/del/",
    element: <Users />,
  },
  // pracitce
  {
    path: "/reg/",
    element: <Regisrer />,
  },
  {
    path: "/reg1/",
    element: <Regisrer1/>,
  },
  {
    path: "/log/",
    element: <Login/>,
  },
  // practice
  {
    path: "/logout/",
    element: <Logout />,
  },
  {
    path: "/update/:id/",
    element: <UpdateCar />,
  },
]);

ReactDOM.createRoot(document.getElementById("app")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  </React.StrictMode>
);
