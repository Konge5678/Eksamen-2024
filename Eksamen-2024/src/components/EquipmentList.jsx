import React from 'react';
import EquipmentItem from './EquipmentItem.jsx';

function EquipmentList({ equipment }) {
  return (
    <div>
      {equipment.map((item, index) => (
        <EquipmentItem
          key={index}
          item={item}
        />
      ))}
    </div>
  );
}

export default EquipmentList;
