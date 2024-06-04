import React, { createContext, useContext, useState, useEffect } from 'react';

const EquipmentContext = createContext();

export const useEquipment = () => {
  return useContext(EquipmentContext);
};

export const EquipmentProvider = ({ children }) => {
  const [equipment, setEquipment] = useState(() => {
    const savedEquipment = localStorage.getItem('equipment');
    return savedEquipment ? JSON.parse(savedEquipment) : [];
  });

  const [loanedItems, setLoanedItems] = useState(() => {
    const savedLoanedItems = localStorage.getItem('loanedItems');
    return savedLoanedItems ? JSON.parse(savedLoanedItems) : [];
  });

  useEffect(() => {
    if (equipment.length === 0) {
      fetch('/inventory_data_with_categories.json')
        .then(response => response.json())
        .then(data => {
          const groupedData = groupByType(data);
          setEquipment(groupedData);
        });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('equipment', JSON.stringify(equipment));
  }, [equipment]);

  useEffect(() => {
    localStorage.setItem('loanedItems', JSON.stringify(loanedItems));
  }, [loanedItems]);

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
    setLoanedItems([...loanedItems, lentItem]);
    setEquipment(updatedEquipment);
  };

  const handleReturn = (item) => {
    const updatedEquipment = equipment.map(e => {
      if (e.Beskrivelse === item.Beskrivelse && e.lentCount > 0) {
        return { ...e, count: e.count + 1, lentCount: e.lentCount - 1 };
      }
      return e;
    });

    const updatedLoanedItems = loanedItems.filter(i => !(i.Beskrivelse === item.Beskrivelse && i.userName === item.userName && i.userPhone === item.userPhone));
    setLoanedItems(updatedLoanedItems);
    setEquipment(updatedEquipment);
  };

  return (
    <EquipmentContext.Provider value={{ equipment, loanedItems, handleLend, handleReturn }}>
      {children}
    </EquipmentContext.Provider>
  );
};
