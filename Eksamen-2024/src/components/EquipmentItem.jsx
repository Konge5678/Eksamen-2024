import React from "react";
import { Link } from "react-router-dom";

function EquipmentItem({ item }) {
  return (
    <div className="border bg-gray-300 rounded-md p-4 mb-2">
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
        <strong>Innkjøpspris:</strong> {item["Innkjøpspris"]} Kr
      </p>
      <p>
        <strong>Innkjøpsdato:</strong> {item["Innkjøpsdato"]}
      </p>
      <p>
        <strong>Tilgjengelig:</strong> {item.count}
      </p>
      <p>
        <strong>Lånt ut:</strong> {item.lentCount || 0}
      </p>
      <Link
        to={`/loan/${item.Beskrivelse}`}
        className="bg-customGreen hover:bg-teal-700 text-white font-bold rounded px-4 py-2 mt-2 inline-block"
      >
        Lån
      </Link>
    </div>
  );
}

export default EquipmentItem;
