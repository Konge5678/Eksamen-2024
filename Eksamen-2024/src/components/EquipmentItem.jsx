import React from 'react';

function EquipmentItem({ item, onLend, onReturn, isLent }) {
  return (
    <div className="border p-4 mb-2">
      <h2 className="text-xl font-bold">{item.Beskrivelse}</h2>
      <p><strong>Produsent:</strong> {item.Produsent}</p>
      <p><strong>Spesifikasjoner:</strong> {item.Spesifikasjoner}</p>
      <p><strong>Kategori:</strong> {item.Kategori}</p>
      {isLent ? (
        <button
          onClick={() => onReturn(item)}
          className="bg-red-500 text-white px-4 py-2 mt-2"
        >
          Returner
        </button>
      ) : (
        <button
          onClick={() => onLend(item)}
          className="bg-green-500 text-white px-4 py-2 mt-2"
        >
          Lån
        </button>
      )}
    </div>
  );
}

export default EquipmentItem;
