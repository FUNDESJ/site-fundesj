import { Navigate } from "react-router-dom";

function isTokenValid() {
  const token = localStorage.getItem("authToken");
  if (!token) return false;

  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    const now = Math.floor(Date.now() / 1000);
    return payload.exp && payload.exp > now;
  } catch (e) {
    return false;
  }
}

export default function PrivateRoute({ children }) {
  if (!isTokenValid()) {
    localStorage.removeItem("authToken");
    return <Navigate to="/wp-admin" replace />;
  }

  return children;
}
