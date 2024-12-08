import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRouteWrap = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  useEffect(() => {
    if (!user?.token) {
      navigate("home/login");
    }
  }, [user, navigate]);
  return <>{children}</>;
};

export default ProtectedRouteWrap;
