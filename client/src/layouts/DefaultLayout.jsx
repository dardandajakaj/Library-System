import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../Context/AuthContext";

export default function DefaultLayout() {
    const {token} = useAuthContext();

    if(token){
        return(
            <Navigate to="/dashboard"></Navigate>
        )
    }
    return (
        <div className="text-center">
            <h1>Welcome to our Page</h1>
            <Outlet />
        </div>
    );
}
