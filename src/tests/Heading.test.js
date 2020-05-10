import React from "react";
import { shallow } from "enzyme";
import Heading from "../components/Heading";

describe("Heading", () => {
    it("Should render h1 element", () => {
        const wrapper = shallow(<Heading type="h1"></Heading>);

        expect(wrapper.type()).toBe("h1");
    });
    it("Should render h2 element", () => {
        const wrapper = shallow(<Heading type="h2"></Heading>);

        expect(wrapper.type()).toBe("h2");
    });
    it("Should render h3 element", () => {
        const wrapper = shallow(<Heading type="h3"></Heading>);

        expect(wrapper.type()).toBe("h3");
    });
    it("Should not render h4 element", () => {
        const wrapper = shallow(<Heading type="h4"></Heading>);

        expect(wrapper.type()).not.toBe("h4");
    });
    it("Should render text", () => {
        const wrapper = shallow(<Heading type="h2" headingStyle="heading heading__secondary"> Example login screen </Heading>);
        const str = wrapper.find("h2");

        expect(str.text()).toBe(" Example login screen ");
    });
});