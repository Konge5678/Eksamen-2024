import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

const defaultAdmin = { username: "Admin", password: "admin123", role: "admin" };

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(() => {
    const savedUser = JSON.parse(localStorage.getItem("currentUser"));
    return savedUser || null;
  });

  const [users, setUsers] = useState(() => {
    const savedUsers = JSON.parse(localStorage.getItem("users"));
    return savedUsers ? savedUsers : [defaultAdmin];
  });

  useEffect(() => {
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
  }, [currentUser]);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const login = (username, password) => {
    const user = users.find(
      (user) => user.username === username && user.password === password
    );
    if (user) {
      setCurrentUser(user);
      return true;
    }
    return false;
  };

  const logout = () => {
    setCurrentUser(null);
  };

  const register = (username, password) => {
    const existingUser = users.find((user) => user.username === username);
    if (existingUser) {
      return false; // Username already exists
    }
    const newUser = { username, password, role: "user" };
    setUsers([...users, newUser]);
    return true;
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        isAdmin: currentUser?.role === "admin",
        login,
        logout,
        register,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
