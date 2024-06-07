import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useEquipment } from "../context/EquipmentContext";

const LoanedItems = () => {
  const { user } = useAuth();
  const { equipment, handleReturn } = useEquipment();
  const lentItems = JSON.parse(localStorage.getItem("lentItems")) || [];
  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = lentItems.filter((item) => {
    const searchTermLower = searchTerm.toLowerCase();
    return (
      item.Beskrivelse.toLowerCase().includes(searchTermLower) ||
      item.Produsent.toLowerCase().includes(searchTermLower) ||
      item.Spesifikasjoner.toLowerCase().includes(searchTermLower) ||
      item.Kategori.toLowerCase().includes(searchTermLower) ||
      item.userName.toLowerCase().includes(searchTermLower)
    );
  });

  return (
    <div className="container mx-auto p-4 min-h-screen">
      <h2 className="text-xl font-bold mb-4">Lånte produkter</h2>
      <input
        type="text"
        placeholder="Søk etter utstyr eller låntaker"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 mb-4 w-full"
      />
      {filteredItems.length > 0 ? (
        filteredItems.map((item, index) => (
          <div key={index} className="border bg-gray-300 rounded-md p-4 mb-2">
            <h2 className="text-xl font-bold">{item.Beskrivelse}</h2>
            <p>
              <strong>Produsent:</strong> {item.Produsent}
            </p>
            <p>
              <strong>Spesifikasjoner:</strong> {item.Spesifikasjoner}
            </p>
            <p>
              <strong>Kategori:</strong> {item.Kategori}
            </p>
            <p>
              <strong>Lånt av:</strong> {item.userName}
            </p>
            {user && user.role === "admin" && (
              <p>
                <strong>Telefon:</strong> {item.userPhone}
              </p>
            )}
            <button
              onClick={() => handleReturn(item)}
              className="bg-red-500 text-white rounded px-4 py-2 mt-2"
            >
              Returner
            </button>
          </div>
        ))
      ) : (
        <p>Ingen produkter lånt ut.</p>
      )}
    </div>
  );
};

export default LoanedItems;
