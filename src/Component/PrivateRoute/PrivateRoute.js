import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/UseAuth";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();
  let location = useLocation();
  if (isLoading) {
    return (
      <div class="spinner-grow text-success" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    );
  }
  return user.email ? (
    children
  ) : (
    <Navigate to="/login" replace state={{ from: location }}></Navigate>
  );
};
export default PrivateRoute;
