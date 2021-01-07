import React from 'react';
import PropTypes from 'prop-types';
import '../Statistics/Statistics';

const Statistic = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <ul>
            <li className="text">Good: {good}</li>
            <li className="text">Neutral: {neutral}</li>
            <li className="text">Bad: {bad}</li>
            <li className="text">Total: {total}</li>
            <li className="text">Positive feedback: {positivePercentage}%</li>
        </ul>
    );
};

Statistic.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};
export default Statistic;
