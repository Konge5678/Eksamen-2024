import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Navbar from './components/Navbar';
import Home from './components/Home';
import LoanForm from './components/LoanForm';
import LoanedItems from './components/LoanedItems'; // New import
import { EquipmentProvider } from './context/EquipmentContext';
import './index.css';
import Footer from './components/Footer';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <EquipmentProvider>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/app" element={<App />} />
              <Route path="/loan/:id" element={<LoanForm />} />
              <Route path="/loaned-items" element={<LoanedItems />} /> {/* New route */}
            </Routes>
          </div>
          <Footer />
        </div>
      </EquipmentProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
