import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./components/Home";
import LoanForm from "./components/LoanForm";
import LoanedItems from "./components/LoanedItems";
import Login from "./components/Login";
import Register from "./components/Register";
import { EquipmentProvider } from "./context/EquipmentContext";
import { AuthProvider } from "./context/AuthContext";
import "./index.css";
import Layout from "./layout";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <EquipmentProvider>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/app" element={<App />} />
              <Route path="/loan/:id" element={<LoanForm />} />
              <Route path="/loaned-items" element={<LoanedItems />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Route>
          </Routes>
        </EquipmentProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
