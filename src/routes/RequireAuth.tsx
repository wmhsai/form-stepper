import { Navigate, useLocation } from "react-router-dom";

export default function RequireAuth({ children }: { children: JSX.Element }) {
    const location = useLocation();
    if (location.pathname == "/") {
        return <Navigate to="/home" state={{ from: location }} />;
    }

    return children;
}