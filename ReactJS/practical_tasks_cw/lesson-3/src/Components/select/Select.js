import React from "react";
import Selected from "react-select";

const options = [
  { value: "high", label: "High" },
  { value: "normal", label: "Normal" },
  { value: "low", label: "Low" }
];

const Select = ({ onChooseSelect }) => (
  <>
    <Selected options={options} onChange={e => onChooseSelect(e)} />
  </>
);

export default Select;
