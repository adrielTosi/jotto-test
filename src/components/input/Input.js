import React from "react";
import { connect } from "react-redux";

export class Input extends React.Component {
  render() {
    const contents = this.props.success ? null : (
      <form>
        <input
          data-test="input-box"
          id="word-guess"
          placeholder="enter guess"
        />{" "}
        <br />
        <button data-test="submit-button" type="submit">
          Submit
        </button>
      </form>
    );
    return <div data-test="component-input">{contents}</div>;
  }
}

const mapStateToProps = ({ success }) => {
  return { success };
};

export default connect(mapStateToProps)(Input);
