import users from "./users"; // Import the mock user database

// Function to authenticate user
export const login = (username, password) => {
  const foundUser = users.find(
    (user) => user.username === username && user.password === password
  );

  if (foundUser) {
    // Save user to localStorage to persist login
    localStorage.setItem("user", JSON.stringify(foundUser));
    return foundUser; // Return user details
  } else {
    return null; // Authentication failed
  }
};

// Function to logout user
export const logout = () => {
  localStorage.removeItem("user");
};

// Function to check if a user is logged in
export const getCurrentUser = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};
