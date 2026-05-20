import { Link } from 'react-router-dom'
import { services } from '../data/servicesData'

function ServicesPage() {
  return (
    <main className="inner-page">
      <section className="services-hero">
        <div>
          <span className="eyebrow">Servicios digitales</span>
          <h1>
            Tecnología para llevar tu negocio al{' '}
            <span>siguiente nivel</span>
          </h1>
          <p>
            Desarrollamos soluciones digitales con enfoque estratégico:
            diseño, rendimiento, automatización, posicionamiento y crecimiento.
          </p>
        </div>

        <div className="services-orbit" aria-hidden="true">
          <div className="orbit-core">&lt;/&gt;</div>
          <span className="orbit-item item-one">SEO</span>
          <span className="orbit-item item-two">APP</span>
          <span className="orbit-item item-three">WEB</span>
          <span className="orbit-item item-four">CRM</span>
        </div>
      </section>

      <section className="services-list">
        {services.map((service, index) => (
          <article className="service-row" key={service.slug}>
            <div className="service-number">
              {String(index + 1).padStart(2, '0')}
            </div>

            <div className="service-row-content">
              <div className="service-icon large">{service.icon}</div>

              <div>
                <h2>{service.title}</h2>
                <p>{service.description}</p>

                <ul>
                  {service.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>

                <Link to={`/servicios/${service.slug}`} className="text-link">
                  Ver detalle del servicio →
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}

export default ServicesPage