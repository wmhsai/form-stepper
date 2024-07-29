import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../pages/Layout";
import RequireAuth from "./RequireAuth";

export const createRoutes = () => createBrowserRouter([
    {
        element: <Outlet />,
        errorElement: <>ErrorPage</>,
        children: [
            {
                path: '/',
                element:
                    <RequireAuth>
                        <Layout />
                    </RequireAuth>,
                children: [
                    {
                        element: <Home />,
                        index: true,
                        errorElement: <>ErrorPage</>
                    },
                ]
            }
        ]
    }
]);