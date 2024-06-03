import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Navbar from './components/Navbar';
import Home from './components/Home';
import LoanForm from './components/LoanForm';
import { EquipmentProvider } from './context/EquipmentContext';  
import './index.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <EquipmentProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/app" element={<App />} />
          <Route path="/loan/:id" element={<LoanForm />} />
        </Routes>
      </EquipmentProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
