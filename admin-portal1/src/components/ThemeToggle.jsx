import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { dispatch } = useContext(ThemeContext);

  return (
    <button className="theme-btn" onClick={() => dispatch({ type: "TOGGLE_THEME" })}>
      🌗
    </button>
  );
};

export default ThemeToggle;