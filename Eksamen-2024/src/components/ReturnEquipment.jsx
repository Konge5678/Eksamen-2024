import React from "react";

function ReturnEquipment({ lentEquipment, onReturn }) {
  return (
    <div>
      <h2>Return Equipment</h2>
      {lentEquipment.map((item, index) => (
        <div key={index}>
          <span>{item["Beskrivelse"]}</span>
          <button onClick={() => onReturn(item)}>Return</button>
        </div>
      ))}
    </div>
  );
}

export default ReturnEquipment;
