import React from 'react';
import '../styles/myselect.css'

const MySelect = ({options, defaultValue, value, onChange}) => {
  return(
    <select value={value} onChange={event => onChange(event.target.value)} className="myselect">
      <option disabled value="">{defaultValue}</option>
      {options.map(option =>
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      )}
    </select>
  );
};
export default MySelect;
