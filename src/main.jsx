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
import UpdateGroup from "./components/UpdateGroup/UpdateGroup.jsx";
import GroupDetails from "./components/GroupDetails/GroupDetails.jsx";
import NotFound from "./components/NotFoundPage/NotFound.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        loader: () => fetch("https://backend-opal-delta-19.vercel.app/groups"),
        hydrateFallbackElement:<Loading/>,
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
        loader: () => fetch("https://backend-opal-delta-19.vercel.app/groups"),
        hydrateFallbackElement: <Loading/>,
        Component:AllGroups
      },
      {
        path: "/create",
        element:<PrivateRoute><CreateGroup/></PrivateRoute>,
      },
      {
        path: "/mygroups",
        loader: () => fetch("https://backend-opal-delta-19.vercel.app/groups"),
        hydrateFallbackElement:<Loading/>,
        element:<PrivateRoute><MyGroups/></PrivateRoute> ,
      },
      {
        path:'/update/:id',
        loader:({params})=>fetch(`https://backend-opal-delta-19.vercel.app/groups/${params.id}`),
        hydrateFallbackElement:<Loading/>,
        Component:UpdateGroup
      },
      {
        path:'/details/:id',
        loader:({params}) => fetch(`https://backend-opal-delta-19.vercel.app/groups/${params.id}`),
        Component:GroupDetails,
        hydrateFallbackElement:<Loading/>
      },
    ],
  },{
    path:'/*',
    Component:NotFound
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FirebaseContextProvider>
      <RouterProvider router={router} />
    </FirebaseContextProvider>
  </StrictMode>
);
