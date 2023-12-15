import React from "react";

const CustomInput = (props) => {
  const { type, label, i_id, name, onChange, onBlur, value } = props;
  return (
    <div className="mb-3 relative">
      <input
        type={type}
        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        id={i_id}
        name={name}
        placeholder={label}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
    </div>
  );
};

export default CustomInput;
