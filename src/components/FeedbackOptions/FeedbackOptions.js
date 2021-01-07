import React from "react";
import PropTypes from "prop-types";
import "../FeedbackOptions/FeedbackOptions.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map((option) => (
    <button
      type="button"
      className="btn"
      key={option}
      onClick={() => onLeaveFeedback(option)}
    >
      {option}
    </button>
  ));
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;
