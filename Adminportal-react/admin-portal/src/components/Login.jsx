import { useState, } from "react";
import { fakeLogin } from "../services/authService";
import "../styles/login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("All fields are required");
      return;
    }

    if (!email.includes("@")) {
      setError("Invalid email format");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    try {
      setLoading(true);
      const userData = await fakeLogin(email, password);
      login(userData); 
      navigate("/dashboard");
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <form className="login-box" onSubmit={handleSubmit}>
        <h2>Login</h2>

        {error && <p className="error">{error}</p>}

        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>

        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>

        <button type="submit" disabled={loading}>{loading ? "Logging in..." : "Login"} </button>

        <p className="hint">
          Demo: <br />
          Email: <b>admin@gmail.com</b> <br />
          Password: <b>admin123</b>
        </p>
      </form>
    </div>
  );
};

export default login;
