import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Header = () => {
  const { state, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const logout = () => {
    localStorage.clear();
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };

  return (
    <header className="header">
      {/* Left */}
      <div className="logo" onClick={() => navigate("/dashboard")}>
        ⚙️ Admin Portal
      </div>

      {/* Right */}
      <div className="header-right">
        <button
          className="theme-btn"
          onClick={() => dispatch({ type: "TOGGLE_THEME" })}
        >
          {state.theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>

        <div className="profile">
          <span onClick={() => setOpen(!open)}>👤</span>

          {open && (
            <div className="dropdown">
              <p onClick={() => navigate("/profile")}>Profile</p>
              <p onClick={logout}>Logout</p>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
// import { useContext, useState } from "react";
// import { AuthContext } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";

// const Header = () => {
//   const { dispatch } = useContext(AuthContext);
//   const navigate = useNavigate();
//   const [open, setOpen] = useState(false);

//   return (
//     <header className="header">
//       <h2 className="logo" onClick={() => navigate("/")}>
//         Admin Portal
//       </h2>

//       <div className="header-right">
//         <button onClick={() => dispatch({ type: "TOGGLE_THEME" })}>
//           Toggle Theme
//         </button>

//         <div className="profile">
//           <span onClick={() => setOpen(!open)}>👤</span>

//           {open && (
//             <div className="dropdown">
//               <p onClick={() => navigate("/profile")}>Profile</p>
//               <p onClick={() => dispatch({ type: "LOGOUT" })}>Logout</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;
