import React from "react";

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
      <div role="alert" aria-labelledby={id} className={error ? "visible" : "hidden"}>
        {error ?
          <p>{error}</p>
          :
          <p>The alert will trigger when there is an error in the input</p>
        }
      </div>
    </div>
  )
};

export default TextInput;