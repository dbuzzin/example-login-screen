import React from "react";
import { mount } from "enzyme";

import Form from "../components/Form";
import CheckBoxInput from "../components/CheckboxInput";

const form = mount(<Form />);
const checkField = form.find(CheckBoxInput).at(0);
const input = checkField.find("input").at(0);

describe("CheckBoxInput", () => {
    it("Should capture checkbox ticked correctly in form state onChange", () => {
        input.instance().checked = true;
        input.simulate("change");

        expect(form.state().remember).toBe(true);
    });
});
