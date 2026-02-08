// // src/pages/Login.jsx
// import { useState, useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../context/AuthContext";
// import { fakeLogin } from "../services/authService";
// import "../styles/common.css";

// const Login = () => {
//   const navigate = useNavigate();
//   const { dispatch } = useContext(AuthContext);

//   const [form, setForm] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//     setError("");
//   };

//   const validate = () => {
//     if (!form.email || !form.password) return "All fields are required";
//     if (!/\S+@\S+\.\S+/.test(form.email)) return "Invalid email format";
//     if (form.password.length < 6)
//       return "Password must be at least 6 characters";
//     return null;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const validationError = validate();
//     if (validationError) {
//       setError(validationError);
//       return;
//     }

//     const user = fakeLogin(form.email, form.password);
//     if (!user) {
//       setError("Invalid credentials");
//       return;
//     }

//     dispatch({ type: "LOGIN", payload: user });
//     navigate("/");
//   };

//   return (
//     <div className="login-container">
//       <form className="login-form" onSubmit={handleSubmit}>
//         <h2>Login</h2>

//         {error && <p className="error">{error}</p>}

//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={form.email}
//           onChange={handleChange}
//         />

//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={form.password}
//           onChange={handleChange}
//         />

//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { fakeLogin } from "../services/authService";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    const user = fakeLogin(email, password);

    if (user) {
      dispatch({ type: "LOGIN", payload: user });
      navigate("/");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
  <div className="login-page">
    <div className="login-box">
      <h2>Login</h2>

      <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />

      <button onClick={handleLogin}>Login</button>
    </div>
  </div>
);
};

export default Login;