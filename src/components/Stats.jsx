import { stats } from '../data/homeData'

function Stats() {
  return (
    <section className="stats">
      {stats.map((item) => (
        <article className="stat-card" key={item.label}>
          <h3>{item.value}</h3>
          <p>{item.label}</p>
        </article>
      ))}
    </section>
  )
}

export default Stats