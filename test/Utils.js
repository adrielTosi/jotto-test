import checkPropTypes from "check-prop-types";

/**
 * Search for data-test value un ShallowWrapper
 * @param {ShallowWrapper} wrapper - enzyme Shallow Wrapper
 * @param {String} val - data-test value to search
 */
export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`);
};

/**
 * Check if the props passes
 * @param {component} component - React Component
 * @param {Object} props - Component props
 */
export const checkProps = (component, props) => {
  const propError = checkPropTypes(
    component.propTypes,
    props,
    "prop",
    component.name
  );
  expect(propError).toBeUndefined();
};
