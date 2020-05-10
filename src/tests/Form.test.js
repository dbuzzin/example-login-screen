import React from "react";
import { mount } from "enzyme";

import MainBox from "../components/MainBox";
import Form from "../components/Form";
import PreSignIn from "../components/PreSignIn";
import PostSignIn from "../components/PostSignIn";

const mainBox = mount(<MainBox />);
const pre = mainBox.find(PreSignIn);
const form = pre.find(Form);

describe("Form State", () => {
    it("email should be empty string", () => {
        expect(form.state().email).toBe("");
    });
    it("remember should be false", () => {
        expect(form.state().remember).toBe(false);
    });
});