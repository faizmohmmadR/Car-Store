import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Feed from "./Components/layout/Feed";
import Add from "./Components/car/Add";
import SignIn from "./Components/user/SignIn";
import UserProfile from "./Components/user/UserProfile";
import CarDetail from "./Components/car/CarDetail";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Regisrer from "./Components/user/Regisrer";
import Logout from "./Components/user/Logout";
import UpdateCar from "./Components/car/UpdateCar";
import App from "./Components/App";


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
    element: <Regisrer />,
  },
  {
    path: "/signin/",
    element: <SignIn />,
  }, /////////////////////////////////// testing
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
