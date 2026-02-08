// // // src/components/Header.jsx
// // import { useContext, useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { AuthContext } from "../context/AuthContext";
// // import { ThemeContext } from "../context/ThemeContext";
// // import "../styles/common.css";

// // const Header = () => {
// //   const navigate = useNavigate();
// //   const { user, dispatch: authDispatch } = useContext(AuthContext);
// //   const { theme, dispatch: themeDispatch } = useContext(ThemeContext);

// //   const [open, setOpen] = useState(false);

// //   const toggleTheme = () => {
// //     themeDispatch({ type: "TOGGLE_THEME" });
// //   };

// //   const logout = () => {
// //     authDispatch({ type: "LOGOUT" });
// //     navigate("/login");
// //   };

// //   return (
// //     <header className={`header ${theme}`}>
// //       <div className="header-left" onClick={() => navigate("/")}>
// //         <span className="logo">AdminPanel</span>
// //       </div>

// //       <div className="header-right">
// //         <button className="theme-btn" onClick={toggleTheme}>
// //           {theme === "light" ? "🌙" : "☀️"}
// //         </button>

// //         <div className="profile">
// //           <div className="profile-icon" onClick={() => setOpen(!open)}>
// //             👤
// //           </div>

// //           {open && (
// //             <div className="dropdown">
// //               <p onClick={() => navigate("/profile")}>Profile</p>
// //               <p onClick={logout}>Logout</p>
// //             </div>
// //           )}
// //         </div>
// //       </div>
// //     </header>
// //   );
// // };

// // export default Header;
// import { useNavigate } from "react-router-dom";
// import ThemeToggle from "./ThemeToggle";
// import ProfileDropdown from "./Dropdown";
// import "../styles/common.css";

// const Header = () => {
//   const navigate = useNavigate();

//   return (
//     <header className="header">
//       {/* LEFT */}
//       <div className="logo" onClick={() => navigate("/")}>
//         Admin Portal
//       </div>

//       {/* RIGHT */}
//       <div className="header-right">
//         <ThemeToggle />
//         <ProfileDropdown />
//       </div>
//     </header>
//   );
// };

// export default Header;
import { useNavigate } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import ProfileDropdown from "./Dropdown";
import logo from "../assets/logo.png";
import "../styles/common.css";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      {/* LOGO → DASHBOARD */}
      <div
        className="header-logo"
        onClick={() => navigate("/")}
      >
        <img src={logo} alt="Logo" />
      </div>

      {/* RIGHT SIDE */}
      <div className="header-right">
        <ThemeToggle />
        <ProfileDropdown />
      </div>
    </header>
  );
};

export default Header;