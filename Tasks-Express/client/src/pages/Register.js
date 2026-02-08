import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const registerUser = async () => {
    try {
      await API.post("/users/register", { name, email, password, role });
      alert("Registered successfully");
      navigate("/login");
    } catch (err) {
        if (err.response && err.response.data) {
          setError(err.response.data.message);
        } else {
        setError("Server not responding. Please try again.");
        }
    }
  };
    const movetoLogin = () => {
      navigate("/login");
    };

  

  return (
    <div className="auth-container">
        <div className="auth-box">
            <h2>Register</h2>
            {error && <p style={{ color: "red" }}>{error}</p>}

            <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
            <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <select onChange={(e) => setRole(e.target.value)}>
              <option className="select-role" value="">Select Role</option>
              <option value="user">user</option>
              <option value="admin">admin</option>
            </select>
            <button onClick={registerUser}>Register</button>
            <div className="ar">
              <p>ALREADY REGISTERED</p>
              <button className="login-btn" onClick={movetoLogin}>Login</button>
            </div>
        </div>
    </div>
  );
}

export default Register;
