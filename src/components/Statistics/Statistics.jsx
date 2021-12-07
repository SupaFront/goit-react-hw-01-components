import style from "./Statistics.module.css"
import PropTypes from 'prop-types';

function Statistics({ title, stats }) {
  const elements = 
    stats.map(item =>
          <li key={item.id} className={style.item}>
            <span className={style.label}>{item.label}</span>
            <span className={style.percentage}>{item.percentage}%</span>
          </li>)
    return(<section className={style.statistics}>
      {title && <h2 className={style.title}>{title}</h2>}
      <ul className={style.statList}>
       {elements}
  </ul>
</section>
)
}

export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
}
