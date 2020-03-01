import React from "react";
import copy from '../../container/feeCharges/copy';

const TextInput = ({
  name,
  id,
  value,
  onChange,
  label,
  ariaRequired,
  error
}) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input
        className="form-control"
        name={name}
        id={id}
        type="text"
        value={value}
        onChange={onChange}
        aria-required={ariaRequired}
      />
      <div role="alert" aria-labelledby={id} className={`error ${error ? "visible" : "hidden"}`}>
        {error ?
          <p>{error}</p>
          :
          <p>{copy.inputAriaAlert}</p>
        }
      </div>
    </div>
  )
};

export default TextInput;