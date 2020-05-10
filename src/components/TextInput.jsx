import React from "react";

/**
 * Creates a semi reusable input component which can be edited using props.
 * 
 * (Only semi reusable because it still relies on a certain stylesheet)
 */

const TextInput = ({type, name, id, autoComplete, width, value, handleChange}) => (
    <div>
        <input type={type} name={name} id={id} className="form form__text-input" autoComplete={autoComplete} style={{width: width}} value={value} onChange={handleChange}/>
    </div>
)
export default TextInput;