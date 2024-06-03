import React from 'react';

function EquipmentItem({ item, onLend, onReturn }) {
  return (
    <div className="border p-4 mb-2">
      <h2 className="text-xl font-bold">{item.Beskrivelse}</h2>
      <p><strong>Produsent:</strong> {item.Produsent}</p>
      <p><strong>Spesifikasjoner:</strong> {item.Spesifikasjoner}</p>
      <p><strong>Kategori:</strong> {item.Kategori}</p>
      <p><strong>Tilgjengelig:</strong> {item.count}</p>
      <p><strong>Lånt ut:</strong> {item.lentCount || 0}</p>
      <div className="flex space-x-2 mt-2">
        <button
          onClick={() => onLend(item)}
          className="bg-green-500 text-white px-4 py-2"
          disabled={item.count === 0}
        >
          Lån
        </button>
        <button
          onClick={() => onReturn(item)}
          className="bg-red-500 text-white px-4 py-2"
          disabled={item.lentCount === 0}
        >
          Returner
        </button>
      </div>
    </div>
  );
}

export default EquipmentItem;
