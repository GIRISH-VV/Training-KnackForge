import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { loginService } from "../services/authService";

const Login = () => {
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const validate = () => {
    if (!email || !password) return "All fields are required";
    if (!email.includes("@")) return "Invalid email format";
    if (password.length < 6) return "Password must be at least 6 characters";
    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    const user = loginService(email, password);

    if (!user) {
      setError("Invalid email or password");
      return;
    }

    localStorage.setItem("user", JSON.stringify(user));
    dispatch({ type: "LOGIN", payload: user });
    navigate("/dashboard");
  };

  return (
    <div className="login-container">
      <form className="login-box" onSubmit={handleSubmit}>
        <h2>Admin Login</h2>

        {error && <p className="error">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>

        <p className="hint">
          Demo: <b>admin@gmail.com</b> / <b>admin123</b>
        </p>
      </form>
    </div>
  );
};

export default Login;// import { useState, useContext } from "react";
// import { AuthContext } from "../context/AuthContext";
// import { loginService } from "../services/authService";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const { dispatch } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     if (!email || !password) {
//       setError("All fields are required");
//       return;
//     }

//     const user = loginService(email, password);
//     if (!user) {
//       setError("Invalid credentials");
//       return;
//     }

//     dispatch({ type: "LOGIN", payload: user });
//     navigate("/");
//   };

//   return (
//     <div className="login">
//       <h2>Login</h2>
//       <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
//       <input
//         type="password"
//         placeholder="Password"
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button onClick={handleLogin}>Login</button>
//       {error && <p className="error">{error}</p>}
//     </div>
//   );
// };

// export default Login;
