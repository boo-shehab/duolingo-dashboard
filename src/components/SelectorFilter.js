/* eslint-disable react/prop-types */
import React from 'react';
import './componentsStyle/SelectoerFilter.css';

const SelectorFilter = ({ options, title, onChange }) => (
  <select className="select" value={title} onChange={onChange}>
    {options.map((option) => (
      <option key={option} value={option}>
        {option}
      </option>
    ))}
  </select>
);

export default SelectorFilter;
