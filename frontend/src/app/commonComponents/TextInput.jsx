import React from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

const TextInput = ({ value, label, name, placeholder, onChange, type }) => {
  let newId = uuidv4();

  const labelElem = label ? (
    <label className="usa-label" htmlFor={newId}>
      {label}
    </label>
  ) : null;

  return (
    <React.Fragment>
      {labelElem}
      <input
        autoComplete="off"
        className="usa-input"
        id={newId}
        name={name}
        type={type || "text"}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
      />
    </React.Fragment>
  );
};

TextInput.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

export default TextInput;
