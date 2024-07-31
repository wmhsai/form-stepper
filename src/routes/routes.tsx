import { createBrowserRouter, Outlet } from "react-router-dom";
import { Home } from "../pages/Home";
import Layout from "../pages/Layout";
import Loan from "../pages/Loan";
import Login from "../pages/Login";
import RequireAuth from "./RequireAuth";

export const createRoutes = () => createBrowserRouter([
    {
        element: <Outlet />,
        errorElement: <>خطا</>,
        children: [
            {
                path: '/',
                element:
                    <RequireAuth>
                        <Layout />
                    </RequireAuth>,
                children: [
                    {
                        element: <Login />,
                        index: true,
                        errorElement: <>خطا</>
                    },
                    {
                        path: "/login",
                        element: <Login />,
                        index: true
                    },
                    {
                        path: '/home',
                        element: <Home />,
                        errorElement: <>خطا</>
                    },
                    {
                        path: '/loan',
                        element: <Loan />,
                        errorElement: <>خطا</>
                    },

                ]
            },
        ]
    }
]);