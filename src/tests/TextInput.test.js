import React from "react";
import { mount } from "enzyme";

import Form from "../components/Form";
import TextInput from "../components/TextInput";

const form = mount(<Form />);
const emailField = form.find(TextInput).at(0);
const input = emailField.find("input").at(0);

describe("TextInput", () => {
    it("Should capture email input correctly in form state onChange", () => {
        input.instance().value = "test@email.co.uk";
        input.simulate("change");

        expect(form.state().email).toBe("test@email.co.uk");
    });
    it("Should update isValid in form state to be true", () => {
        input.instance().value = "test@email.co.uk";
        input.simulate("change");

        expect(form.state().isValid).toBe(true);
    });
    it("Should not update isValid in form state to be true", () => {
        input.instance().value = "";
        input.simulate("change");

        expect(form.state().isValid).toBe(false);
    });
    it("Should not update isValid in form state to be true", () => {
        input.instance().value = "teststring";
        input.simulate("change");

        expect(form.state().isValid).toBe(false);
    });
    it("Should not update isValid in form state to be true", () => {
        input.instance().value = "test@email";
        input.simulate("change");

        expect(form.state().isValid).toBe(false);
    });
});