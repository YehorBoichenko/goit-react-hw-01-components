import PropTypes from 'prop-types';
import Stata from './Stata';
import style from './Statistics.module.css';

const ListofStatistics = function ({ stats }) {
  return (
    <ul className={style.list}>
      {stats.map(stat => (
        <Stata key={stat.id} label={stat.label} percentage={stat.percentage} />
      ))}
    </ul>
  );
};

ListofStatistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

export default function Statistics({ title, stats }) {
  return (
    <section className={style.statistics}>
      {title && <h2 className={style.title}>{title}</h2>}
      <ListofStatistics stats={stats} />
    </section>
  );
}
Statistics.propTypes = {
  title: PropTypes.string,
};
