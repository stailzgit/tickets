import React from "react";
import "./CheckBox.css";

const CheckBox = (props) => {
  const { id, label, checked, onChange, disabled } = props;
  return (
    <>
      <input type="checkbox" className="custom__checkbox" {...props} />
      <label htmlFor={id}>{label}</label>
    </>
  );
};

export default CheckBox;
