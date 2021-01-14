import { useState } from "react";

import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";
import Statistics from "../Statistics/Statistics";
import Section from "../Section/Section";
import Notification from "../Notification/Notification";

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  // }

  // class App extends Component {
  //   state = {
  //     good: 0,
  //     neutral: 0,
  //     bad: 0,
  //   };
  ///////////////////////////////////////////
  //  leaveFeedback = (option) => {
  //    this.setState((state) => ({
  //      [option]: state[option] + 1,
  //    }));
  //  };

  const leaveFeedback = (option) => {
    switch (option) {
      case "good":
        setGood((prevGood) => prevGood + 1);
        break;
      case "neutral":
        setNeutral((prevNeutral) => prevNeutral + 1);
        break;
      case "bad":
        setBad((prevBad) => prevBad + 1);
        break;
      default:
        return;
    }
  };
  ///////////////////////////////////////////////////////////
  //  countTotalFeedback = () => {
  //    return Object.values(this.state).reduce(
  //      (acc, option) => acc + option,
  //      0
  //    );
  //  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const total = countTotalFeedback();

  ///////////////////////////////////////////////////////////
  const countPositiveFeedbackPercentage = () => {
    // const { good } = this.state;
    return Math.round((good / total) * 100) || 0;
  };
  ///////////////////////////////////////////////////////////////

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          // onG={this.incrementGood}
          // onN={this.incrementNeutral}
          // onB={this.incrementBad}
          options={["good", "neutral", "bad"]}
          onLeaveFeedback={leaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </div>
  );
}
