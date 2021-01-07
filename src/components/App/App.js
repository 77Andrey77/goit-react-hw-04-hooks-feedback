import React, { Component } from 'react';

import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';
import Section from '../Section/Section';
import Notification from '../Notification/Notification';

class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    leaveFeedback = option => {
        this.setState(state => ({
            [option]: state[option] + 1,
        }));
    };

    // incrementGood = () => {
    //     console.log('Кликнули в Good');
    //     this.setState(prevState => {
    //         return {
    //             good: prevState.good + 1,
    //         };
    //     });
    // };
    // incrementNeutral = () => {
    //     console.log('Кликнули в Neutral');
    //     this.setState(prevState => ({
    //         neutral: prevState.neutral + 1,
    //     }));
    // };
    // incrementBad = () => {
    //     console.log('Кликнули в Bad');
    //     this.setState(prevState => ({
    //         bad: prevState.bad + 1,
    //     }));
    // };

    countTotalFeedback = () => {
        return Object.values(this.state).reduce(
            (acc, option) => acc + option,
            0,
        );
    };

    countPositiveFeedbackPercentage = totalFeedback => {
        const { good } = this.state;
        return Math.round((good / totalFeedback) * 100) || 0;
    };

    render() {
        const { good, neutral, bad } = this.state;
        const totalFeedback = this.countTotalFeedback();
        return (
            <div>
                <Section title="Please leave feedback">
                    <FeedbackOptions
                        // onG={this.incrementGood}
                        // onN={this.incrementNeutral}
                        // onB={this.incrementBad}
                        options={Object.keys(this.state)}
                        onLeaveFeedback={this.leaveFeedback}
                    />
                </Section>
                <Section title="Statistics">
                    {totalFeedback ? (
                        <Statistics
                            good={good}
                            neutral={neutral}
                            bad={bad}
                            total={totalFeedback}
                            positivePercentage={this.countPositiveFeedbackPercentage(
                                totalFeedback,
                            )}
                        />
                    ) : (
                        <Notification message="No feedback given" />
                    )}
                </Section>
            </div>
        );
    }
}

export default App;
