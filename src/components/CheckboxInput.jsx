import React from "react";

/**
 * Creates a semi reusable, custom checkbox component.
 * 
 * (Only semi reusable because it still relies on a certain stylesheet)
 */

const CheckboxInput = ({id, name, handleChange}) => (
    <label className="form form__checkbox" htmlFor={name}> 
        <span> Remember this device  </span>
        <input type="checkbox" id={id} name={name} onChange={handleChange}/>
        <span className="form__checkbox__mark"></span>
    </label>
);

export default CheckboxInput;