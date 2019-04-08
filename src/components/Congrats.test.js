import React from "react";
import { shallow } from "enzyme";

import Congrats from "./Congrats";
import { findByTestAttr, checkProps } from "../../test/Utils";

const defaultProps = { success: false };

/**
 * Function to create a shallow wrapper of congrats component
 * @param {Object} props - Props for Congrats component
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Congrats {...setupProps} />);
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
  test("do not throw warning with expected property", () => {
    const expectedProps = { success: true };
    checkProps(Congrats, expectedProps);
  });
});
