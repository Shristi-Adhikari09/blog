import { Navigate } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

export default function ProtectedRoute({ children }) {
    const { isLoggedIn } = useContext(AuthContext);

    if (!isLoggedIn)  return <Navigate to="/login" replace/>;

    return children;
}