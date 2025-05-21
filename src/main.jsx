import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./components/Home/Home.jsx";
import FirebaseContextProvider from "./components/contexts/FirebaseContext/FirebaseContextProvider.jsx";
import LoginPage from "./components/Login/LoginPage.jsx";
import Register from "./components/Login/Register.jsx";
import AllGroups from "./components/AllGroup/AllGroup.jsx";
import CreateGroup from "./components/CreateGroup/CreateGroup.jsx";
import Loading from "./components/common/Loading.jsx";
import MyGroups from "./components/MyGroups/MyGroups.jsx";
import PrivateRoute from './components/common/PrivateRoute.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        loader: () => fetch("http://localhost:2020/groups"),
        Component: Home
      },
      {
        path: "login",
        Component: LoginPage,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/all",
        loader: () => fetch("http://localhost:2020/groups"),
        hydrateFallbackElement: <Loading/>,
        element: <PrivateRoute><AllGroups/></PrivateRoute>,
      },
      {
        path: "/create",
        element:<PrivateRoute><CreateGroup/></PrivateRoute>,
      },
      {
        path: "/mygroups",
        loader: () => fetch("http://localhost:2020/groups"),
        element:<PrivateRoute><MyGroups/></PrivateRoute> ,
      },
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
