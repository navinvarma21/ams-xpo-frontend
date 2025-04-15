import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../AuthService"; // Import login function
import IMAGES from "../../../Images/images";

const Register = () =>{

    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
      });
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
        <div className="full-container">
          <div className="Logoname_contaier">
            <div className="Logoname_contaier_1">
              <p>Logo</p>
              <p className="schoolname">SCHOOL NAME</p>
            </div>
    
            <div className="Logoname_contaier_2">
              <p className="schoolname">ACADEMIC MANAGEMENT SYSTEM</p>
            </div>
          </div>
          <div
            style={{
              width: "80%",
              height: "89vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundImage: `url(${IMAGES.image7})`,
              backgroundSize: "contain", // Updated for fitting the image
              backgroundRepeat: "no-repeat", // Added to prevent image repetition
              backgroundPosition: "center", // Centers the image
              marginLeft: "10%",
              position: "absolute",
              left: "1%",
            }}
          >
            <div className="Login-container">
              {error && <p style={{ color: "red" }}>{error}</p>}
    
              <form className="Login-container_1" onSubmit={handleSubmit}>
    
                <h4>Select Roll:</h4>
                <select name="role" style={{width:"67%"}} required className="input">
                  <option value="" disabled selected>
                    Select Role
                  </option>
                  <option value="admin">Admin</option>
                  <option value="teacher">Teacher</option>
                  <option value="student">Student</option>
                  <option value="parent">Parent</option>
                  
                </select>
    
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  onChange={handleChange}
                  required
                  className="input"
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                  required
                  className="input"
                />
                 <input
                  type="password"
                  name="password"
                  placeholder="Admin Password"
                  onChange={handleChange}
                  required
                  className="input"
                />
                <button type="submit" className="btn-1">Create</button>
    
               
               
              </form>
            </div>
          </div>
          <footer className="Logoname_contaier_3">
            <p>XPO MEDIA Software Division</p>
          </footer>
        </div>
      );
 
}

export default Register;