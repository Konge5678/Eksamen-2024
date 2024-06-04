import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEquipment } from "../context/EquipmentContext";

const LoanForm = () => {
  const { id } = useParams();
  const { equipment, handleLend } = useEquipment();
  const navigate = useNavigate();
  const item = equipment.find((e) => e.Beskrivelse === id);
  const [userName, setUserName] = useState("");
  const [userPhone, setUserPhone] = useState("");

  const handleLendClick = () => {
    if (userName && userPhone) {
      handleLend(item, userName, userPhone);
      navigate("/app");
    } else {
      alert("Skriv in navnet og telefonnummeret ditt.");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Lån {item.Beskrivelse}</h2>
      <div>
        <label className="block mb-2">Navn:</label>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="border p-2 mb-4 w-full"
        />
      </div>
      <div>
        <label className="block mb-2">Telefon Nummer:</label>
        <input
          type="number"
          value={userPhone}
          onChange={(e) => setUserPhone(e.target.value)}
          className="border p-2 mb-4 w-full"
        />
      </div>
      <button
        onClick={handleLendClick}
        className="bg-customGreen hover:bg-teal-700 text-white font-bold rounded px-4 py-2"
      >
        Lån Produkt
      </button>
    </div>
  );
};

export default LoanForm;
