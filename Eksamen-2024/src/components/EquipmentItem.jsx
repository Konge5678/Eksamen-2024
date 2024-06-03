import React from 'react';

function EquipmentItem({ item }) {
  return (
    <div>
      <h2>{item.name}</h2>
      <p>{item.description}</p>
    </div>
  );
}

export default EquipmentItem;