import style from './Statistics.module.css';
import PropTypes from 'prop-types';
import getRandomHexColor from './Color-randomizer';

export default function Stata({ label, percentage }) {
  return (
    <li
      className={style.item}
      style={{ backgroundColor: `${getRandomHexColor()}` }}
    >
      <span className={style.label}>{label}</span>
      <span className={style.percentage}>{percentage}%</span>
    </li>
  );
}

Stata.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
