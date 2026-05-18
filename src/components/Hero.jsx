import logonode from "/src/assets/logonode.png";
import logojs from "/src/assets/logojs.png";
import logopython from "/src/assets/logopython.png";
import logoreact from "/src/assets/logoreact.png";

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-content">
        <h1>
          Desarrollo de <br />
          software <span>sin límites</span>
        </h1>

        <p>
          Aplicaciones robustas, seguras y escalables para llevar tu negocio
          al siguiente nivel.
        </p>

        <div className="hero-actions">
          <a href="#contacto" className="btn btn-primary">
            Iniciar proyecto
          </a>
          <a href="#portafolio" className="btn btn-outline">
            Ver portafolio
          </a>
        </div>
      </div>

      <div className="hero-visual" aria-hidden="true">
        <div className="grid-floor"></div>

        <div className="floating-card card-code">
          <figure>
            <img src={logonode} alt="Logos de tecnologías" />
          </figure>
        </div>

        <div className="cube cube-one">
          <figure>
            <img src={logoreact} alt="Logos de tecnologías" />
          </figure>
        </div>

        <div className="cube cube-two">
          <figure>
            <img src={logopython} alt="Logos de tecnologías" />
          </figure>
        </div>

        <div className="cube cube-three">
          <figure>
            <img src={logojs} alt="Logos de tecnologías" />
          </figure>
        </div>

      </div>
    </section>
  )
}

export default Hero