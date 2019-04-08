import React from "react";
import PropTypes from "prop-types";

/**
 * Function component for congratulation message
 * @function
 * @param {Object} props - React props
 * @returns {JSX.Element} - Null or congrats message
 */

const Congrats = props => {
  if (props.success) {
    return (
      <div data-test="component-congrats">
        <span data-test="congrats-message">
          Congratulations you guessed the word!
        </span>
      </div>
    );
  } else {
    return <div data-test="component-congrats" />;
  }
};

Congrats.propTypes = {
  success: PropTypes.bool.isRequired
};

export default Congrats;
