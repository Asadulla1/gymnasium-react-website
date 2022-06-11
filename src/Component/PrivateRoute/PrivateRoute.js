import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/UseAuth";

const PrivateRoute = ({ children, ...rest }) => {
  const { user } = useAuth();
  let location = useLocation();
  return user.email ? (
    children
  ) : (
    <Navigate to="/login" replace state={{ from: location }}></Navigate>
  );
};
export default PrivateRoute;
