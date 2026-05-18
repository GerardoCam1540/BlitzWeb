import { teamMembers } from '../data/teamData'

function TeamPage() {
  return (
    <main className="inner-page team-page">
      <section className="team-hero">
        <div className="team-hero-copy">
          <span className="eyebrow">Nuestro equipo</span>

          <h1>
            Mentes técnicas creando el futuro de <span>Blitzcore</span>
          </h1>

          <p>
            Somos un equipo multidisciplinario enfocado en crear soluciones
            digitales modernas, escalables y estratégicas. Combinamos desarrollo
            web, inteligencia artificial, automatización y visión de negocio
            para transformar ideas en productos reales.
          </p>
        </div>

        <div className="team-visual" aria-hidden="true">
          <div className="team-core">
            <span>BC</span>
          </div>

          <div className="team-node node-one">WEB</div>
          <div className="team-node node-two">IA</div>
          <div className="team-node node-three">APP</div>
          <div className="team-node node-four">SEO</div>
        </div>
      </section>

      <section className="team-grid">
        {teamMembers.map((member, index) => (
          <article className="team-card" key={member.name}>
            <div className="team-card-top">
              <div className="avatar-orb">
                <span>{member.initials}</span>
              </div>

              <div className="member-index">
                {String(index + 1).padStart(2, '0')}
              </div>
            </div>

            <div className="team-card-content">
              <h2>{member.name}</h2>
              <h3>{member.role}</h3>
              <p>{member.description}</p>
            </div>

            <div className="skills-list">
              {member.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </article>
        ))}
      </section>

      <section className="team-manifesto">
        <div>
          <span className="eyebrow">Nuestra visión</span>
          <h2>Construimos tecnología con propósito</h2>
        </div>

        <p>
          En Blitzcore creemos que una buena solución digital no solo debe verse
          bien: debe ser rápida, útil, escalable y estar pensada para resolver
          problemas reales. Por eso unimos estrategia, diseño, código y mejora
          continua en cada proyecto.
        </p>
      </section>
    </main>
  )
}

export default TeamPage