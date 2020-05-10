import React from "react";

/**
 * Create a reusable component which returns a hx tag based on the type and class name you pass in.
 */

const Heading = ({type, headingStyle, children}) => {
    const switchType = () => {
        switch (type) {
            case "h1":
                return <h1 className={headingStyle}>{children}</h1>;
            case "h2":
                return <h2 className={headingStyle}>{children}</h2>;
            case "h3": 
                return <h3 className={headingStyle}>{children}</h3>;
        }
    }
    return switchType();
};

export default Heading;