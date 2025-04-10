import { useNavigate } from "react-router-dom";
import { logout } from "../services/AuthService";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
