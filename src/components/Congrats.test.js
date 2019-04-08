import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Congrats from "./Congrats";
import { findByTestAttr } from "../../test/Utils";

Enzyme.configure({ adapter: new Adapter() });
/**
 * Function to create a shallow wrapper of congrats component
 * @param {Object} props - Props for Congrats component
 */
const setup = (props = {}) => {
  return shallow(<Congrats {...props} />);
};

describe("Congrats component", () => {
  test("renders without errors", () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, "component-congrats");
    expect(component.length).toBe(1);
  });
  test("renders no text when succes prop is false", () => {
    const wrapper = setup({ success: false });
    const component = findByTestAttr(wrapper, "component-congrats");
    expect(component.text()).toBe("");
  });
  test("renders non empty congrats message", () => {
    const wrapper = setup({ success: true });
    const message = findByTestAttr(wrapper, "congrats-message");
    expect(message.text().length).not.toBe(0);
  });
});
