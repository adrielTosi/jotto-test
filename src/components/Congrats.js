import React from "react";

/**
 * Function component for congratulation message
 * @function
 * @param {Object} props - React props
 * @returns {JSX.Element} - Null or congrats message
 */

export default props => {
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
