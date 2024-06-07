import React, { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  useEffect(() => {
    if (!localStorage.getItem("adminUserCreated")) {
      const defaultAdmin = {
        username: "Admin",
        password: "123",
        role: "admin",
      };
      const users = JSON.parse(localStorage.getItem("users")) || [];
      users.push(defaultAdmin);
      localStorage.setItem("users", JSON.stringify(users));
      localStorage.setItem("adminUserCreated", "true");
    }
  }, []);

  const login = (username, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (user) => user.username === username && user.password === password
    );
    if (user) {
      setUser(user);
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      alert("Ugyldige innloggingsdetaljer");
    }
  };

  const register = (username, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.some((user) => user.username === username);
    if (!userExists) {
      const newUser = { username, password, role: "user" };
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));
      alert("Bruker registrert!");
    } else {
      alert("Brukernavn allerede tatt");
    }
  };

  const forgotPassword = (username, newPassword) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userIndex = users.findIndex((user) => user.username === username);
    if (userIndex !== -1) {
      users[userIndex].password = newPassword;
      localStorage.setItem("users", JSON.stringify(users));
      alert("Passord oppdatert!");
    } else {
      alert("Bruker ikke funnet");
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider
      value={{ user, login, register, forgotPassword, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
