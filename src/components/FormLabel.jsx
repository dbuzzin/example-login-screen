import React from "react";

const FormLabel = ({id, title}) => (
    <div className="form__label">
        <label htmlFor={id}>{title}</label>
    </div>
);

export default FormLabel;