/* eslint-disable react/prop-types */
import React from 'react';
import './componentsStyle/SelectoerFilter.css';

const SelectorFilter = ({ options, tilte, onChange }) => (
  <select className="select" value={tilte} onChange={onChange}>
    {options.map((option) => (
      <option key={option} value={option}>
        {option}
      </option>
    ))}
  </select>
);

export default SelectorFilter;
