import React from "react";
import { mount } from "enzyme";

import MainBox from "../components/MainBox";
import Form from "../components/Form";
import PreSignIn from "../components/PreSignIn";
import PostSignIn from "../components/PostSignIn";
import Button from "../components/Button";

describe("Main Box", () => {

    describe("Initial State", () => {
        const mainBox = mount(<MainBox />);

        afterAll(() => {
            mainBox.unmount();
        });

        // it("signedIn must be false", () => {
        //     expect(mainBox.state("signedIn")).toBe(false);
        // });
        it("PreSignIn must be rendered while signedIn is false", () => {
            expect(mainBox.containsMatchingElement(<PreSignIn />)).toBe(true);
        });
        it("PostSignIn must not be rendered while signedIn is false", () => {
            expect(mainBox.containsMatchingElement(<PostSignIn />)).toBe(false);
        });
    });

    describe("Signed in button clicked with valid email", () => {
        const mainBox = mount(<MainBox />);
        const pre = mainBox.find(PreSignIn);
        const form = pre.find(Form);
        const signInButton = form.find(Button);

        beforeAll(() => {
            form.setState({ email: "test@email.co.uk" });
            signInButton.simulate("click");
        });

        afterAll(() => {
            mainBox.unmount();
        });
    
        // it("signed in should be true", () => {
        //     expect(mainBox.state("signedIn")).toBe(true);
        // });
        it("PreSignIn must not be rendered while signedIn is true", () => {
            expect(mainBox.containsMatchingElement(<PreSignIn />)).toBe(false);
        });
        it("PostSignIn must be rendered while signedIn is true", () => {
            expect(mainBox.containsMatchingElement(<PostSignIn />)).toBe(true);
        });
    });

    describe("Change email button clicked", () => {
        const mainBox = mount(<MainBox />);
        const pre = mainBox.find(PreSignIn);
        const form = pre.find(Form);
        const signInButton = form.find(Button);

        beforeAll(() => {
            form.setState({ email: "test@email.co.uk" });
            signInButton.simulate("click");

            const post = mainBox.find(PostSignIn);
            const changeEmailButton = post.find(Button).at(0);

            changeEmailButton.simulate("click");
        });

        afterAll(() => {
            mainBox.unmount();
        });
    
        // it("signed in should be false", () => {
        //     expect(mainBox.state("signedIn")).toBe(false);
        // });
        it("PreSignIn must be rendered while signedIn is false", () => {
            expect(mainBox.containsMatchingElement(<PreSignIn />)).toBe(true);
        });
        it("PostSignIn must not be rendered while signedIn is false", () => {
            expect(mainBox.containsMatchingElement(<PostSignIn />)).toBe(false);
        });
    });
});