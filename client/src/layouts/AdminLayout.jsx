import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../Context/AuthContext";

export default function AdminLayout() {
    const {user, token} = useAuthContext();
    console.log(user)
    if (!token) {
        return <Navigate to="/login" />;
    }

    return (
        <div className="text-center">
            <h1>Welcome Back {user}</h1>
            <Outlet />
        </div>
    );
}
