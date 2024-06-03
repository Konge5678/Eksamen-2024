import React from 'react';

function LendEquipment({ equipment, onLend }) {
  return (
    <div>
      <h2>Lend Equipment</h2>
      {equipment.map((item, index) => (
        <div key={index}>
          <span>{item['Beskrivelse']}</span>
          <button onClick={() => onLend(item)}>Lend</button>
        </div>
      ))}
    </div>
  );
}

export default LendEquipment;
