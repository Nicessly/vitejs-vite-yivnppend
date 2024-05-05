import React, { useState } from 'react';
import './search.css'; // Estilo CSS

// Datos de ejemplo (aquí podrían venir de una API o de algún otro origen de datos)
const personas = [
  { id: 1, nombre: 'Juan', apellido: 'Pérez' },
  { id: 2, nombre: 'María', apellido: 'Gómez' },
  { id: 3, nombre: 'Pedro', apellido: 'Rodríguez' },
  { id: 4, nombre: 'Ana', apellido: 'Martínez' },
  { id: 5, nombre: 'Carlos', apellido: 'López' },
  { id: 6, nombre: 'Laura', apellido: 'Sánchez' },
];

const SearchBox = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleChange = (event) => {
    const inputValue = event.target.value;
    setQuery(inputValue);

    // Filtrar las personas cuyos nombres coincidan con la búsqueda
    const filteredResults = personas.filter(
      (persona) =>
        persona.nombre.toLowerCase().includes(inputValue.toLowerCase())
    );
    // Limitar los resultados a los primeros 5
    const slicedResults = filteredResults.slice(0, 5);
    setResults(slicedResults);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Buscar personas..."
        value={query}
        onChange={handleChange}
        className="search-input"
      />
      <ul className="search-results">
        {results.map((persona) => (
          <li key={persona.id} className="result-item">
            {persona.nombre} {persona.apellido}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBox;
