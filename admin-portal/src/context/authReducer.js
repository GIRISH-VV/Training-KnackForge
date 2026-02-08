// const authReducer = (state, action) => {
//   switch (action.type) {
//     case "LOGIN":
//       localStorage.setItem("user", JSON.stringify(action.payload));
//       return {
//         ...state,
//         user: action.payload,
//         isAuthenticated: true,
//       };

//     case "LOGOUT":
//       localStorage.clear();
//       return {
//         user: null,
//         isAuthenticated: false,
//         theme: "light",
//       };

//     case "TOGGLE_THEME": {
//       const newTheme = state.theme === "light" ? "dark" : "light";
//       localStorage.setItem("theme", newTheme);
//       return {
//         ...state,
//         theme: newTheme,
//       };
//     }

//     case "UPDATE_USER": {
//       const updatedUser = { ...state.user, ...action.payload };
//       localStorage.setItem("user", JSON.stringify(updatedUser));
//       return {
//         ...state,
//         user: updatedUser,
//       };
//     }

//     default:
//       return state;
//   }
// };

// export default authReducer;

export const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  isAuthenticated: !!localStorage.getItem("user"),
  theme: localStorage.getItem("theme") || "light"
};

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true
      };

    case "LOGOUT":
      return {
        ...state,
        user: null,
        isAuthenticated: false
      };

    case "TOGGLE_THEME": {
      const theme = state.theme === "light" ? "dark" : "light";
      localStorage.setItem("theme", theme);
      return { ...state, theme };
}

    case "UPDATE_USER":
      return { ...state, user: action.payload };

    default:
      return state;
  }
};