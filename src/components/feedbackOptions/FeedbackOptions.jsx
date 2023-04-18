import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = props => {
  return (
    <div className={css.container}>
      {props.options.map(option => {
        return (
          <button
            type="button"
            className={css.button}
            key={option}
            onClick={props.onLeaveFeedback}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FeedbackOptions;
