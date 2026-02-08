// import { createContext, useReducer } from "react";
// import authReducer from "./authReducer.js";

// export const AuthContext = createContext();

// const initialState = {
//   user: JSON.parse(localStorage.getItem("user")) || null,
//   isAuthenticated: !!localStorage.getItem("user"),
//   theme: localStorage.getItem("theme") || "light",
// };

// export const AuthProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(authReducer, initialState);

//   return (
//     <AuthContext.Provider value={{ state, dispatch }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
import React, { createContext, useReducer } from "react";
import { authReducer, initialState } from "./authReducer";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      <div className={state.theme}>{children}</div>
    </AuthContext.Provider>
  );
};