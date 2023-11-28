import React from "react";
import { Navigate } from "react-router-dom";
import { UserAuth } from "../context/Auth.context";

const ProtectedRoute = ({ children }) => {
  const { user } = UserAuth();
  if (!user) {
    return <Navigate to="/" />;
  } else {
    return children;
  }
  return <div>ProtectedRoute</div>;
};

export default ProtectedRoute;
