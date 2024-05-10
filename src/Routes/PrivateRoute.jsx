import { Navigate, useLocation, useNavigate } from "react-router-dom";
import UseAuth from "../Hook/UseAuth";

const PrivateRoute = ({children}) => {
    const { user, isLoading } = UseAuth();
    const location = useLocation()
    // const navigate = useNavigatevigate()

    // if (isLoading) {
    //     return <span className="loading loading-spinner text-error text-5xl"></span>
    // }

    if (user) {
        return children
    }
    return <Navigate state={location.pathname} to='/login' replace></Navigate>;
};

export default PrivateRoute;