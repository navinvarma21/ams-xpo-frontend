import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../AuthService"; // Import login function


const Login = () => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = login(credentials.username, credentials.password);
    
    if (user) {
      navigate(`/${user.role}`); // Redirect based on role
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div>
      
      <h2>Login</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
