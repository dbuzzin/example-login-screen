import React, { useState, Component } from "react";

import Logo from "./Logo";
import PreSignIn from "./PreSignIn";
import PostSignIn from "./PostSignIn";

const MainBox = () => {
    const [signedIn, setSignedIn] = useState(false);

    const handleSubmit = (check) => {
        return check && setSignedIn(true);
    }

    const changeEmail = () => {
        return setSignedIn(false);
    }
 
    return (
        <div className="sign-in-box">
            <div className="sign-in-box__content">
                <Logo />
                {

                    /** 
                     * Mounts either component based on it's signedIn state
                     */

                    signedIn 
                        ? <PostSignIn changeEmail={changeEmail}/>
                        : <PreSignIn handleSubmit={handleSubmit}/>
                }
            </div>
        </div>
    );
}

/**
 * This class component to test state change.
 */

// class MainBox extends Component {
//     constructor (props) {
//         super(props);

//         this.state = {
//             signedIn: false
//         }
//     }

//     handleSubmit(check) {
//         return check && this.setState({ signedIn: true });
//     }

//     changeEmail() {
//         return this.setState({ signedIn: false });
//     }
 
//     render() {
//         return (
//             <div className="sign-in-box">
//                 <div className="sign-in-box__content">
//                     <Logo />
//                     {

//                         /** 
//                          * Mounts either component based on this.state.signedIn
//                          */

//                         this.state.signedIn 
//                             ? <PostSignIn changeEmail={this.changeEmail.bind(this)}/>
//                             : <PreSignIn handleSubmit={this.handleSubmit.bind(this)}/>
//                     }
//                 </div>
//             </div>
//         );
//     }
// }

export default MainBox;