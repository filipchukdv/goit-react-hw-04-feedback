import { Component } from 'react';
import Statistics from './statistics/Statistics';
import FeedbackOptions from './feedbackOptions/FeedbackOptions';
import Section from './section/Section';
import Notification from './notification/Notification';


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleButton = e => {
    this.setState(prev => {
      const value = e.target.innerHTML;
      return { [value]: prev[value] + 1 };
    });
  };

  countTotalFeedback = () => {
    const values = Object.values(this.state);
    return values.reduce((acc, value) => acc + value, 0);
  };
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const result = (good / this.countTotalFeedback()) * 100;
    return (isNaN(result) ? 0 : Math.round(result)) + '%';
  };

  render() {
    let {
      state,
      countTotalFeedback,
      countPositiveFeedbackPercentage,
      handleButton,
    } = this;
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(state)}
            onLeaveFeedback={handleButton}
          ></FeedbackOptions>
        </Section>
        <Section title="Statictics">
          {countTotalFeedback() === 0 ? (
            <Notification message={'There is no feedback'} />
          ) : (
            <Statistics
              good={state.good}
              neutral={state.neutral}
              bad={state.bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </>
    );
  }
}
