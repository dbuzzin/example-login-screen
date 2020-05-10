import React, { Fragment } from "react";

import Heading from "./Heading";
import Form from "./Form";

const PreSignIn = ({handleSubmit}) => (
    <Fragment>
        <div className="heading-wrapper">
            <Heading type="h2" headingStyle="heading heading__secondary"> Example login screen </Heading>
            <Heading type="h3" headingStyle="heading heading__tertiary"> Getting started with Green. </Heading>
        </div>
        <Form submit={handleSubmit}/>
    </Fragment>
);

export default PreSignIn;