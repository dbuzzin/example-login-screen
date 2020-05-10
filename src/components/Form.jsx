import React, { Component } from "react";

import FormField from "./FormField";
import FormLabel from "./FormLabel";
import TextInput from "./TextInput";
import CheckboxInput from "./CheckboxInput";
import Button from "./Button";

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            isValid: false,
            remember: false
        }
    }
    
    handleChange(e) {
        return this.setState(({ [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value }));
    }
    
    handleSubmit() {
        return this.props.submit(this.state.isValid ? true : false);
    }

    /**
     * Runs a very basic check which sets isValid to true if the value contains a string with an "@" sign and at least one "." in the domain name.
     */
    
    basicEmailValidation(e) {
        const regex = /\S+(@)\S+\.\S+/;

        return this.setState({ isValid: regex.test(this.state.email) ? true : false });
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.email !== prevState.email) {
            this.basicEmailValidation();
        }   
    }

    render() {
        return (
            <form>
                <div className="form form__fields">
                    <FormField>
                        <FormLabel id="email" title="Email Address" />
                        <TextInput type="email" name="email" id="email" autoComplete="off" width="100%" value={this.state.email} handleChange={this.handleChange.bind(this)}/>
                    </FormField>
                    <FormField>
                        <CheckboxInput id="remember" name="remember" handleChange={this.handleChange.bind(this)}/>
                    </FormField>
                </div>
                <Button id="submit" fontColor="#4c494b" fontSize="large" bgColor="transparent" border="1px solid #efefef" handleClick={this.handleSubmit.bind(this)}> Sign In </Button>
            </form>
        );
    }
}

export default Form;