export const fakeLogin = (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Fake credentials
      if (email === "admin@gmail.com" && password === "admin123") {
        resolve({
          id: 1,
          name: "Admin User",
          email: email,
          role: "admin",
        });
      } else {
        reject("Invalid email or password");
      }
    }, 1000);
  });
};
