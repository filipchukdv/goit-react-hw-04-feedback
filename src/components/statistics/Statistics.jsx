import PropTypes from 'prop-types';

const Statistics = props => (
  <>
    <span>Good:{props.good}</span>
    <span>Neutral:{props.neutral}</span>
    <span>Bad:{props.bad}</span>
    <span>Total:{props.total()}</span>
    <span>Positive feedback:{props.positivePercentage()}</span>
  </>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};

export default Statistics;
