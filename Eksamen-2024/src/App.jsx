import React, { useEffect, useState } from 'react';
import EquipmentList from './components/EquipmentList.jsx';
import LendEquipment from './components/LendEquipment.jsx';
import ReturnEquipment from './components/ReturnEquipment.jsx';

function App() {
  const [equipment, setEquipment] = useState([]);

  useEffect(() => {
  // Fetch the equipment data from the JSON file
  fetch('/inventory_data_with_categories.json')
    .then(response => response.json())
    .then(data => setEquipment(data));
}, []);

  return (
    <div>
      <EquipmentList equipment={equipment} />
      <LendEquipment />
      <ReturnEquipment />
    </div>
  );
}

export default App;