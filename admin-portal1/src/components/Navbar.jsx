// // src/components/Navbar.jsx
// import { NavLink } from "react-router-dom";
// import "../styles/common.css";

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <NavLink
//         to="/"
//         end
//         className={({ isActive }) =>
//           isActive ? "nav-link active" : "nav-link"
//         }
//       >
//         Dashboard
//       </NavLink>

//       <NavLink
//         to="/users"
//         className={({ isActive }) =>
//           isActive ? "nav-link active" : "nav-link"
//         }
//       >
//         Users
//       </NavLink>

//       <NavLink
//         to="/reports"
//         className={({ isActive }) =>
//           isActive ? "nav-link active" : "nav-link"
//         }
//       >
//         Reports
//       </NavLink>
//     </nav>
//   );
// };
// export default Navbar;
// import { NavLink } from "react-router-dom";
// import "../styles/common.css";

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <NavLink to="/" end className="nav-link">
//         Dashboard
//       </NavLink>

//       <NavLink to="/users" className="nav-link">
//         Users
//       </NavLink>

//       <NavLink to="/reports" className="nav-link">
//         Reports
//       </NavLink>
//     </nav>
//   );
// };

// export default Navbar;
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-link">
        Dashboard
      </NavLink>
      <NavLink to="/users" className="nav-link">
        Users
      </NavLink>
      <NavLink to="/reports" className="nav-link">
        Reports
      </NavLink>
    </nav>
  );
};

export default Navbar;