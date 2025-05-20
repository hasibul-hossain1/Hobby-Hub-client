import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./components/Home/Home.jsx";
import FirebaseContextProvider from "./components/contexts/FirebaseContext/FirebaseContextProvider.jsx";
import LoginPage from "./components/Login/LoginPage.jsx";
import Register from "./components/Login/Register.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path:'login',
        Component:LoginPage
      },
      {
        path:'/register',
        Component:Register
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FirebaseContextProvider>
      <RouterProvider router={router} />
    </FirebaseContextProvider>
  </StrictMode>
);
