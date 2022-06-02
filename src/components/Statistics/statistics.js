import PropTypes from 'prop-types';
import s from './Statics.module.css';

export default function Statistics({ stats, title = 'Upload stats' }) {
  return (
    <div className={s.container}>
      <section className={s.statistics}>
        <h2 className={s.title}>{title}</h2>
        <ul className={s.statList}>
          {stats.map(el => (
            <li
              key={el.id}
              style={{
                backgroundColor: `#${Math.floor(
                  Math.random() * 16777215
                ).toString(16)}`,
              }}
              className={s.item}
            >
              <span className={s.label}>{el.label}</span>
              <span className={s.percentage}>{el.percentage}%</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
  title: PropTypes.string,
};