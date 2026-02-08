// src/services/authService.js
export const fakeLogin = (email, password) => {
  if (email === "admin@example.com" && password === "admin123") {
    return {
      id: 1,
      name: "Admin User",
      email: "admin@example.com",
      role: "Admin",
    };
  }

  if (email === "1" && password === "1") {
    return {
      id: 2,
      name: "Normal User",
      email: "user@example.com",
      role: "User",
    };
  }

  return null;
};