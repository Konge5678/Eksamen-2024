import React from 'react';
import EquipmentItem from './EquipmentItem.jsx';

function EquipmentList({ equipment, onLend, onReturn, lentEquipment }) {
  return (
    <div>
      {equipment.map((item, index) => {
        const isLent = lentEquipment.includes(item);
        return (
          <EquipmentItem
            key={index}
            item={item}
            onLend={onLend}
            onReturn={onReturn}
            isLent={isLent}
          />
        );
      })}
    </div>
  );
}

export default EquipmentList;
