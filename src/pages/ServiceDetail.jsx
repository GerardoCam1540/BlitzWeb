import { Link, useParams } from 'react-router-dom'
import { services } from '../data/servicesData'

function ServiceDetail() {
  const { serviceSlug } = useParams()

  const service = services.find((item) => item.slug === serviceSlug)

  const renderServiceVisual = () => {
    const auditLines = [
      { tag: '[OK]', text: 'Infraestructura Cloud establecida' },
      { tag: '[WARN]', text: 'Latencia de datos en la capa API' },
      { tag: '[SOLVED]', text: 'Arquitectura escalable desplegada' },
      { tag: '[OK]', text: 'Seguridad y backup configurados' },
    ]

    switch (service.slug) {
      case 'seo':
        return (
          <div className="panel-visual seo-module">
            <div className="seo-code">
              <p className="code-line line-1">&lt;title&gt;Blitz SEO&lt;/title&gt;</p>
              <p className="code-line line-2">
                &lt;meta name="description" content="Optimiza tu visibilidad" /&gt;
              </p>
            </div>
            <div className="seo-graph">
              <svg viewBox="0 0 240 120" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16 98 C 48 82 80 64 114 46 S 176 26 220 18"
                  className="traffic-path"
                />
                <circle cx="220" cy="18" r="5" className="traffic-node" />
              </svg>
            </div>
          </div>
        )
      case 'consultoria':
        return (
          <div className="panel-visual audit-console">
            <div className="audit-lines">
              {auditLines.concat(auditLines).map((line, index) => (
                <div className="audit-line" key={`${line.tag}-${index}`}>
                  <span className="audit-tag">{line.tag}</span>
                  <span>{line.text}</span>
                </div>
              ))}
            </div>
          </div>
        )
      case 'desarrollo-apps':
        return (
          <div className="panel-visual app-mockup">
            <div className="phone-shell">
              <div className="phone-screen">
                <div className="perf-ring">
                  <svg viewBox="0 0 80 80" aria-hidden="true">
                    <circle className="ring-bg" cx="40" cy="40" r="32" />
                    <circle className="ring-fill" cx="40" cy="40" r="32" />
                  </svg>
                  <span>95%</span>
                </div>
                <div className="bar-chart">
                  <div className="bar bar-1"><span /></div>
                  <div className="bar bar-2"><span /></div>
                  <div className="bar bar-3"><span /></div>
                </div>
                <div className="phone-action">
                  <div className="phone-btn">Acceder</div>
                </div>
              </div>
            </div>
          </div>
        )
      case 'desarrollo-web':
        return (
          <div className="panel-visual web-flow">
            <div className="flow-block block-site">
              <strong>Sitio Web</strong>
              <p>UX, contenido y conversión.</p>
            </div>
            <div className="flow-connector">
              <span className="flow-line" />
              <span className="flow-node" />
            </div>
            <div className="flow-block block-crm">
              <strong>CRM / Analítica</strong>
              <p>Datos y automatización.</p>
            </div>
          </div>
        )
      default:
        return (
          <div className="panel-visual seo-module">
            <div className="seo-code">
              <p className="code-line line-1">&lt;title&gt;Blitz Service&lt;/title&gt;</p>
            </div>
          </div>
        )
    }
  }

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

          {renderServiceVisual()}
        </div>

        <aside className="process-card">
          <span className="eyebrow">Proceso</span>
          <h2>Cómo trabajamos</h2>

          <ol>
            {service.process.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </aside>
      </section>
    </main>
  )
}

export default ServiceDetail