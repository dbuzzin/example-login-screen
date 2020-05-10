import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import Heading from "./Heading";
import Button from "./Button";

const PostSignIn = ({changeEmail}) => (
    <Fragment>
        <div className="heading-wrapper">
            <Heading type="h2" headingStyle="heading heading__secondary"> Great, check your email. </Heading>
            <Heading type="h3" headingStyle="heading heading__tertiary"> Click the magic link to access your account. </Heading>
        </div>
        <div className="btn-wrapper">
            <Button id="back" fontColor="#4c494b" fontSize="medium" bgColor="transparent" border="1px solid #efefef" handleClick={changeEmail}>
                <FontAwesomeIcon icon={faArrowLeft} /> <span className="btn__title"> Change Email </span>
            </Button>
            <Button id="contact" fontColor="#ffffff" fontSize="medium" bgColor="#30af5f" border="none"> 
                <FontAwesomeIcon icon={faComments} /> <span className="btn__title"> Contact Support </span>
            </Button>
        </div>
    </Fragment>
);

export default PostSignIn;