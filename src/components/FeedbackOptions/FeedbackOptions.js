import React from 'react';
import PropTypes from 'prop-types';
import '../FeedbackOptions/FeedbackOptions.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return options.map(option => (
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
// const FeedbackOptions = ({ onG, onN, onB }) => (
//     <div>
//         <button type="button" onClick={onG}>
//             Good
//         </button>
//         <button type="button" onClick={onN}>
//             Neutral
//         </button>
//         <button type="button" onClick={onB}>
//             Bad
//         </button>
//     </div>
// );

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;
