// components/ProtectedRoute.jsx
import React from "react";
import { Route, Navigate } from "react-router-dom";

const ProtectedRoute = ({ element: Component, ...rest }) => {
  // Ganti logika autentikasi ini sesuai kebutuhan aplikasi Anda
  const isAuthenticated = true; // Misalnya, sementara autentikasi selalu benar

  return (
    <Route
      {...rest}
      element={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Navigate to="/login" replace />
        )
      }
    />
  );
};

export default ProtectedRoute;
