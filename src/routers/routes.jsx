import { createBrowserRouter } from "react-router-dom";
import axios from "axios";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";


export const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
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
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            }

        ]
    }
])