import React from "react";

/**
 * Creates a semi reusable button component which can be styled using props.
 * 
 * (Only semi reusable because it still relies on a certain stylesheet)
 */

const Button = ({id, fontColor, fontSize, bgColor, border, handleClick, children}) => {

    const clickHandler = (e) => {
        e.preventDefault();

        return handleClick();
    }

    return (
        <button id={id} className={`btn btn__primary btn__text--${fontSize}`} style={{color: fontColor, backgroundColor: bgColor, border: border}} onClick={clickHandler}>{children}</button>
    );
};

export default Button;