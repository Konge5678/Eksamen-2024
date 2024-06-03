import React from 'react';
import EquipmentItem from './EquipmentItem.jsx';

function EquipmentList({ equipment, onLend, onReturn }) {
  return (
    <div>
      {equipment.map((item, index) => (
        <EquipmentItem
          key={index}
          item={item}
          onLend={onLend}
          onReturn={onReturn}
        />
      ))}
    </div>
  );
}

export default EquipmentList;
