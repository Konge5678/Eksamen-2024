import React, { useState } from 'react';
import { useEquipment } from '../context/EquipmentContext';
import { useAuth } from '../context/AuthContext';

const LoanedItems = () => {
  const { equipment, handleReturn } = useEquipment();
  const { isAdmin } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');

  const lentItems = JSON.parse(localStorage.getItem('lentItems')) || [];

  const filteredLentItems = lentItems.filter(item => 
    item.userName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Lånte produkter</h2>
      <input 
        type="text" 
        placeholder="Søk etter bruker" 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 mb-4 w-full"
      />
      {filteredLentItems.length > 0 ? (
        filteredLentItems.map((item, index) => (
          <div key={index} className="border bg-gray-300 rounded-md p-4 mb-2">
            <h2 className="text-xl font-bold">{item.Beskrivelse}</h2>
            <p><strong>Produsent:</strong> {item.Produsent}</p>
            <p><strong>Spesifikasjoner:</strong> {item.Spesifikasjoner}</p>
            <p><strong>Kategori:</strong> {item.Kategori}</p>
            <p><strong>Innkjøpspris:</strong> {item['Innkjøpspris']} Kr</p>
            <p><strong>Innkjøpsdato:</strong> {item['Innkjøpsdato']}</p>
            <p><strong>Lånt av:</strong> {item.userName}</p>
            {isAdmin && <p><strong>Telefon:</strong> {item.userPhone}</p>}
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
