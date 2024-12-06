import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

//home => layout=> header,aside,blog,footer
//home/blog/blog:id => blog_detail => header, blog_detail, footer
//home/blog/blog:id/dashboard => dashboard => header, dashboard, footer
//home/profile => profile => header, profile, footer
//home/register => register => header, register, footer
//home/login => login => header, login, footer

import App from "./App.jsx"; //done
import BlogDetail from "./pages/BlogDetail.jsx"; //done
import BlogCreate from "./pages/BlogCreate.jsx"; //done
import Dashboard from "./pages/Dashboard.jsx";
import Profile from "./pages/Profile.jsx"; //done
import Register from "./pages/Register.jsx"; //done
import Login from "./pages/login.jsx"; //done
import Layout from "./pages/Layout.jsx"; //done

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "home",
        element: <App />,
        children: [
          {
            path: "register",
            element: <Register />,
          },
          {
            path: "login",
            element: <Login />,
          },
          {
            path: "profile",
            element: <Profile />,
          },
          {
            path: "blog",
            element: <BlogCreate />,
            children: [
              {
                path: ":id",
                element: <BlogDetail />,
                children: [
                  {
                    path: "dashboard",
                    element: <Dashboard />,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
