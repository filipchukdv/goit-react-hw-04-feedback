import { useState } from 'react';
import Statistics from './statistics/Statistics';
import FeedbackOptions from './feedbackOptions/FeedbackOptions';
import Section from './section/Section';
import Notification from './notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const result = (good / countTotalFeedback()) * 100;
    return (isNaN(result) ? 0 : Math.round(result)) + '%';
  };

  const handleButton = e => {
    const value = e.target.innerText;

    switch (value) {
      case 'Good':
        setGood(prev => prev + 1);
        break;
      case 'Neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'Bad':
        setBad(prev => prev + 1);
        break;

      default:
        console.log('Error! Invalid value');
    }
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleButton}
        ></FeedbackOptions>
      </Section>
      <Section title="Statictics">
        {countTotalFeedback() === 0 ? (
          <Notification message={'There is no feedback'} />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </>
  );
};
