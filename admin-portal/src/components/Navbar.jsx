import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <aside className="sidebar">
      <NavLink to="/dashboard" className="menu">
        Dashboard
      </NavLink>

      <NavLink to="/users" className="menu">
        Users
      </NavLink>

      <NavLink to="/reports" className="menu">
        Reports
      </NavLink>
    </aside>
  );
};

export default Navbar;
// import { NavLink } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <NavLink to="/">Dashboard</NavLink>
//       <NavLink to="/users">Users</NavLink>
//       <NavLink to="/reports">Reports</NavLink>
//     </nav>
//   );
// };

// export default Navbar;
