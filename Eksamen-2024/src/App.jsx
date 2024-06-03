import React, { useEffect, useState } from 'react';
import EquipmentList from './components/EquipmentList.jsx';

function App() {
  const [equipment, setEquipment] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [lentEquipment, setLentEquipment] = useState([]);
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    // Fetch the equipment data from the JSON file
    fetch('/inventory_data_with_categories.json')
      .then(response => response.json())
      .then(data => setEquipment(data));
  }, []);

  const handleLend = (item) => {
    setLentEquipment([...lentEquipment, item]);
  };

  const handleReturn = (item) => {
    setLentEquipment(lentEquipment.filter(e => e !== item));
  };

  const filteredEquipment = equipment.filter(item => {
    const searchTermLower = searchTerm.toLowerCase();
    const searchInSpecs = item['Spesifikasjoner']
      ? item['Spesifikasjoner'].toLowerCase().includes(searchTermLower)
      : false;

    return (
      (item['Produsent'] && item['Produsent'].toLowerCase().includes(searchTermLower)) ||
      (item['Beskrivelse'] && item['Beskrivelse'].toLowerCase().includes(searchTermLower)) ||
      (item['Kategori'] && item['Kategori'].toLowerCase().includes(searchTermLower)) ||
      searchInSpecs
    );
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredEquipment.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredEquipment.length / itemsPerPage);

  return (
    <div className="container mx-auto p-4">
      <input 
        type="text" 
        placeholder="Søk etter utstyr" 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 mb-4"
      />
      <EquipmentList 
        equipment={currentItems} 
        onLend={handleLend} 
        onReturn={handleReturn} 
        lentEquipment={lentEquipment} 
      />

      <div className="pagination flex justify-center items-center mt-4">
        <button 
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} 
          disabled={currentPage === 1}
          className="bg-gray-300 text-black px-4 py-2 mx-2"
        >
          Forrige
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button 
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} 
          disabled={currentPage === totalPages}
          className="bg-gray-300 text-black px-4 py-2 mx-2"
        >
          Neste
        </button>
      </div>
    </div>
  );
}

export default App;
