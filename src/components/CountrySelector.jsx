import React from 'react';

const CountrySelector = ({ countries, onSelect }) => {
  return (
    <select onChange={(e) => onSelect(e.target.value)}>
      {countries.map((c) => (
        <option key={c.code} value={c.code}>{c.name}</option>
      ))}
    </select>
  );
};

export default CountrySelector;

