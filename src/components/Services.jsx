import { Link } from 'react-router-dom'
import { services } from '../data/servicesData'

function Services() {
  return (
    <section className="services" id="servicios">
      <div className="section-heading">
        <span>Servicios</span>
        <h2>Lo que ofrecemos</h2>
        <p>
          Soluciones digitales diseñadas para empresas que quieren crecer,
          automatizar y posicionarse mejor.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <Link
            to={`/servicios/${service.slug}`}
            className="service-card"
            key={service.slug}
          >
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.shortDescription}</p>
            <span className="service-link">Explorar servicio →</span>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Services