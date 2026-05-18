import { Link, useParams } from 'react-router'
import { services } from '../data/servicesData'

function ServiceDetail() {
  const { serviceSlug } = useParams()

  const service = services.find((item) => item.slug === serviceSlug)

  if (!service) {
    return (
      <main className="inner-page">
        <section className="not-found-service">
          <span className="eyebrow">Servicio no encontrado</span>
          <h1>No encontramos este servicio</h1>
          <p>
            Puede que la URL no sea correcta o que el servicio ya no esté
            disponible.
          </p>
          <Link to="/servicios" className="btn btn-primary">
            Volver a servicios
          </Link>
        </section>
      </main>
    )
  }

  return (
    <main className="inner-page">
      <section className="detail-hero">
        <div className="detail-copy">
          <span className="eyebrow">Servicio</span>
          <h1>
            {service.title}
            <span>.</span>
          </h1>
          <p>{service.description}</p>

          <div className="hero-actions">
            <a href="#contacto" className="btn btn-primary">
              Solicitar propuesta
            </a>
            <Link to="/servicios" className="btn btn-outline">
              Ver todos los servicios
            </Link>
          </div>
        </div>

        <div className="detail-card">
          <div className="service-icon huge">{service.icon}</div>
          <h2>{service.highlight}</h2>
          <p>
            Creamos soluciones con una estética cuidada, enfoque técnico y
            objetivos claros de negocio.
          </p>
        </div>
      </section>

      <section className="detail-content">
        <div className="tech-panel">
          <span className="eyebrow">Incluye</span>
          <h2>Qué podemos desarrollar</h2>

          <div className="features-grid">
            {service.features.map((feature) => (
              <article className="feature-card" key={feature}>
                <span>✓</span>
                <p>{feature}</p>
              </article>
            ))}
          </div>
        </div>

        <aside className="process-card">
          <span className="eyebrow">Proceso</span>
          <h2>Cómo trabajamos</h2>

          <ol>
            <li>Analizamos tu necesidad y objetivos.</li>
            <li>Definimos una solución clara y escalable.</li>
            <li>Diseñamos y desarrollamos la propuesta.</li>
            <li>Medimos, optimizamos y damos soporte.</li>
          </ol>
        </aside>
      </section>
    </main>
  )
}

export default ServiceDetail