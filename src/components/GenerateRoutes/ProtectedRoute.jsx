import { Navigate } from "react-router";


import { useSelector } from "react-redux";

export default function ProtectedRoute({ children }) {

    const  isLoggedIn =useSelector( (state) => state.auth.isLoggedIn)

    if (!isLoggedIn)  return <Navigate to="/login" replace/>;

    return children;
}