import React from "react";

const Input = ({ label, id, value, setValue, placeholder }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        id={id}
        name={id}
        value={value}
        onChange={({ target }) => setValue(target.value)}
        placeholder={placeholder}
        onFocus={(e) => (e.target.placeholder = "")}
        onBlur={(e) => e.target.placeholder = placeholder} 
      />
    </div>
  );
};

export default Input;
