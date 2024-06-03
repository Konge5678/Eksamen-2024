import React, { createContext, useContext, useState, useEffect } from 'react';

const EquipmentContext = createContext();

export const useEquipment = () => {
  return useContext(EquipmentContext);
};

export const EquipmentProvider = ({ children }) => {
  const [equipment, setEquipment] = useState([]);

  useEffect(() => {
    fetch('/inventory_data_with_categories.json')
      .then(response => response.json())
      .then(data => {
        const groupedData = groupByType(data);
        setEquipment(groupedData);
      });
  }, []);

  const groupByType = (items) => {
    const grouped = {};
    items.forEach(item => {
      const key = item.Beskrivelse; 
      if (!grouped[key]) {
        grouped[key] = { ...item, count: 0, lentCount: 0 };
      }
      grouped[key].count++;
    });
    return Object.values(grouped);
  };

  const handleLend = (item, userName, userPhone) => {
    const updatedEquipment = equipment.map(e => {
      if (e.Beskrivelse === item.Beskrivelse && e.count > 0) {
        return { ...e, count: e.count - 1, lentCount: (e.lentCount || 0) + 1 };
      }
      return e;
    });

    const lentItem = { ...item, userName, userPhone };
    const lentItems = JSON.parse(localStorage.getItem('lentItems')) || [];
    lentItems.push(lentItem);
    localStorage.setItem('lentItems', JSON.stringify(lentItems));

    setEquipment(updatedEquipment);
  };

  const handleReturn = (item) => {
    const updatedEquipment = equipment.map(e => {
      if (e.Beskrivelse === item.Beskrivelse && e.lentCount > 0) {
        return { ...e, count: e.count + 1, lentCount: e.lentCount - 1 };
      }
      return e;
    });

    const lentItems = JSON.parse(localStorage.getItem('lentItems')) || [];
    const updatedLentItems = lentItems.filter(i => !(i.Beskrivelse === item.Beskrivelse && i.userName === item.userName && i.userPhone === item.userPhone));
    localStorage.setItem('lentItems', JSON.stringify(updatedLentItems));

    setEquipment(updatedEquipment);
  };

  return (
    <EquipmentContext.Provider value={{ equipment, handleLend, handleReturn }}>
      {children}
    </EquipmentContext.Provider>
  );
};
