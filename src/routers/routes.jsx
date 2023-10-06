import { createBrowserRouter } from "react-router-dom";
import axios from "axios";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import NewsDetails from "../components/NewsDetails";
import NotFound from "../pages/notFound/NotFound";
import Profile from "../pages/profile/Profile";
import PrivetRoutes from "./PrivetRoutes";
import Settings from "../pages/settings/Settings";


export const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <NotFound />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: () => axios.get("./categories.json")
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/news-details/:id",
                element: <PrivetRoutes><NewsDetails /></PrivetRoutes>
            },
            {
                path: "/profile",
                element: <PrivetRoutes><Profile /></PrivetRoutes>
            },
            {
                path: "/settings",
                element: <PrivetRoutes><Settings /></PrivetRoutes>
            }

        ]
    }
])