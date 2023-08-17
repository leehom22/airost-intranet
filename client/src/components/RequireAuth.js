import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = ({ allowedPosition }) => {
    const user = useAuth();
    const location = useLocation(); 
    return(
        user?.position?.find(position => allowedPosition?.includes(position))
            ? <Outlet/>
            : user
                ? <Navigate to="/unauthorized"/>
                : <Navigate to="/login" state={{from:location}} replace/>
    )
}

export default RequireAuth