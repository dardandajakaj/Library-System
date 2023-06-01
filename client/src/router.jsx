import { createBrowserRouter } from "react-router-dom";
import NotFound from "./views/NotFound";
import DefaultLayout from "./layouts/DefaultLayout";
import AdminLayout from "./layouts/AdminLayout";
import DashBoard from "./views/DashBoard";
import SignUp from "./views/SignUp";
import Login from "./views/Login";
import Logout from "./views/Logout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                path: "*",
                element: <NotFound />,
            },
            {
                path: "/signup",
                element: <SignUp/>
            },
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: "/logout",
                element: <Logout/>
            }
        ],
    },
    {
        path: "/",
        element: <AdminLayout />,
        children: [
            {
                path: "/dashboard",
                element: <DashBoard />
            }
        ],
    },
]);

export default router;
