import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Dropdown = () => {
  const [open, setOpen] = useState(false);
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="dropdown">
      <img
        src="/avatar.png"
        className="profile-icon"
        onClick={() => setOpen(!open)}
      />

      {open && (
        <div className="dropdown-menu">
          <div onClick={() => navigate("/profile")}>Profile</div>
          <div onClick={logout}>Logout</div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;