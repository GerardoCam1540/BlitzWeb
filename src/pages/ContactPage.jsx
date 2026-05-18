import { useState } from 'react'
import { contactOptions } from '../data/contactData'

function ContactPage() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSent(true)
  }

  return (
    <main className="inner-page contact-page">
      <section className="contact-layout">
        <div className="contact-copy">
          <span className="eyebrow">Contacto</span>

          <h1>
            Hablemos de tu próximo <span>proyecto digital</span>
          </h1>

          <p>
            Cuéntanos qué necesitas construir, mejorar o automatizar. En
            Blitzcore analizaremos tu idea y te orientaremos con una propuesta
            clara, escalable y adaptada a tus objetivos.
          </p>

          <div className="contact-highlights">
            <article>
              <strong>01</strong>
              <div>
                <h3>Diagnóstico inicial</h3>
                <p>
                  Revisamos tu necesidad, contexto y objetivos antes de
                  plantear una solución.
                </p>
              </div>
            </article>

            <article>
              <strong>02</strong>
              <div>
                <h3>Propuesta estratégica</h3>
                <p>
                  Definimos tecnología, alcance, tiempos y próximos pasos para
                  avanzar con claridad.
                </p>
              </div>
            </article>
          </div>

          <div className="contact-testimonials">
            <div className="stars">★★★★★</div>
            <p>
              “Soluciones digitales pensadas para crecer, automatizar y crear
              experiencias modernas.”
            </p>
            <strong>Equipo Blitzcore</strong>
          </div>

          <div className="contact-mini-info">
            <span>Respuesta estimada</span>
            <strong>24 - 48 horas</strong>
          </div>
        </div>

        <section className="contact-form-card">
          <div className="form-header">
            <span>Solicita una consulta</span>
            <h2>Cuéntanos sobre tu idea</h2>
            <p>
              Completa el formulario y nos pondremos en contacto contigo para
              evaluar la mejor solución.
            </p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-grid two-columns">
              <div className="form-field">
                <label htmlFor="firstName">Nombre</label>
                <input
                  id="firstName"
                  type="text"
                  name="firstName"
                  placeholder="Tu nombre"
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="lastName">Apellido</label>
                <input
                  id="lastName"
                  type="text"
                  name="lastName"
                  placeholder="Tu apellido"
                  required
                />
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="email">Email de contacto</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="correo@empresa.com"
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="company">Empresa / Marca</label>
              <input
                id="company"
                type="text"
                name="company"
                placeholder="Nombre de tu empresa"
              />
            </div>

            <div className="form-grid two-columns">
              <div className="form-field">
                <label htmlFor="countryCode">Código de país</label>
                <select id="countryCode" name="countryCode" required>
                  <option value="">Seleccionar</option>
                  {contactOptions.countryCodes.map((code) => (
                    <option key={code} value={code}>
                      {code}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-field">
                <label htmlFor="phone">Teléfono</label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder="Número de contacto"
                  required
                />
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="service">Servicio de interés</label>
              <select id="service" name="service" required>
                <option value="">¿Qué necesitas?</option>
                {contactOptions.services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-field">
              <label htmlFor="timeslot">Horario preferido</label>
              <select id="timeslot" name="timeslot" required>
                <option value="">Elige un horario para contactarte</option>
                {contactOptions.timeSlots.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-field">
              <label htmlFor="message">Describe brevemente tu proyecto</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Ejemplo: necesito una web corporativa, una app, mejorar mi SEO, automatizar procesos..."
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary form-button">
              Enviar solicitud
            </button>

            {sent && (
              <div className="form-success">
                Solicitud preparada correctamente. Más adelante podemos
                conectarla con email, WhatsApp, CRM o backend.
              </div>
            )}

            <p className="form-legal">
              Al enviar este formulario aceptas que Blitzcore utilice tus datos
              únicamente para responder tu solicitud de contacto.
            </p>
          </form>
        </section>
      </section>
    </main>
  )
}

export default ContactPage