// // // src/routes/AppRoutes.jsx
// // import { Routes, Route, Navigate } from "react-router-dom";
// // import { useContext } from "react";
// // import { AuthContext } from "../context/AuthContext";

// // import Login from "../pages/Login";
// // import Dashboard from "../pages/Dashboard";
// // import Users from "../pages/Users";
// // import Reports from "../pages/Reports";
// // import Profile from "../pages/Profile";

// // const AppRoutes = () => {
// //   const { state } = useContext(AuthContext);
// //   const { isAuthenticated } = state;

// //   return (
// //     <Routes>
// //       {/* Public Route */}
// //       <Route
// //         path="/"
// //         element={!isAuthenticated ? <Login /> : <Navigate to="/dashboard" />}
// //       />

// //       {/* Protected Routes */}
// //       <Route
// //         path="/dashboard"
// //         element={isAuthenticated ? <Dashboard /> : <Navigate to="/" />}
// //       />
// //       <Route
// //         path="/users"
// //         element={isAuthenticated ? <Users /> : <Navigate to="/" />}
// //       />
// //       <Route
// //         path="/reports"
// //         element={isAuthenticated ? <Reports /> : <Navigate to="/" />}
// //       />
// //       <Route
// //         path="/profile"
// //         element={isAuthenticated ? <Profile /> : <Navigate to="/" />}
// //       />

// //       {/* Fallback */}
// //       <Route path="*" element={<Navigate to="/" />} />
// //     </Routes>
// //   );
// // };

// // export default AppRoutes;
// // src/routes/AppRoutes.jsx
// import { Routes, Route, Navigate } from "react-router-dom";
// import { useContext } from "react";
// import { AuthContext } from "../context/AuthContext";

// import Login from "../pages/Login";
// import Dashboard from "../pages/Dashboard";
// import Users from "../pages/Users";
// import Reports from "../pages/Reports";
// import Profile from "../pages/Profile";
// import ProtectedRoute from "../components/ProtectedRoute";

// const AppRoutes = () => {
//   const { isAuthenticated } = useContext(AuthContext);

//   return (
//     <Routes>
//       <Route
//         path="/login"
//         element={isAuthenticated ? <Navigate to="/" /> : <Login />}
//       />

//       <Route
//         path="/"
//         element={
//           <ProtectedRoute>
//             <Dashboard />
//           </ProtectedRoute>
//         }
//       />

//       <Route
//         path="/users"
//         element={
//           <ProtectedRoute>
//             <Users />
//           </ProtectedRoute>
//         }
//       />

//       <Route
//         path="/reports"
//         element={
//           <ProtectedRoute>
//             <Reports />
//           </ProtectedRoute>
//         }
//       />

//       <Route
//         path="/profile"
//         element={
//           <ProtectedRoute>
//             <Profile />
//           </ProtectedRoute>
//         }
//       />

//       <Route path="*" element={<Navigate to="/" />} />
//     </Routes>
//   );
// };

// export default AppRoutes;
// src/routes/AppRoutes.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Users from "../pages/Users";
import Reports from "../pages/Reports";
import Profile from "../pages/Profile";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const AppRoutes = () => {
  const { state } = useContext(AuthContext);

  return (
    <Routes>
      {/* Login */}
      <Route
        path="/login"
        element={!state.isAuthenticated ? <Login /> : <Navigate to="/" />}
      />

      {/* Protected Routes */}
      <Route
        path="/"
        element={state.isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
      />
      <Route
        path="/users"
        element={state.isAuthenticated ? <Users /> : <Navigate to="/login" />}
      />
      <Route
        path="/reports"
        element={state.isAuthenticated ? <Reports /> : <Navigate to="/login" />}
      />
      <Route
        path="/profile"
        element={state.isAuthenticated ? <Profile /> : <Navigate to="/login" />}
      />

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
    
  );
};

export default AppRoutes;