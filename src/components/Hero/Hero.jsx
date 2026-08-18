import styles from "./Hero.module.css";
import logoWhite from "../../assets/images/logo/logo-white.png";
import fachada from "../../assets/images/barbearia/fachada.jpg";

function Hero() {
  return (
    <section id="inicio" className={styles.hero}>
      <div className={styles.overlay}>
        <span className={styles.badge}>💈 DESDE 2014</span>

        <h1> BARBEARIA JOHNNY BLACK</h1>

        <h2>Mais que um corte, uma experiência.</h2>

        <p>
          Desde 2014, oferecemos cortes modernos, barba, luzes,
          platinado, progressiva e diversos serviços para elevar
          o seu visual e a sua autoestima.
        </p>

         <div className={styles.buttons}>
         <a
         href="https://wa.me/5511977991052"
         target="_blank"
         rel="noreferrer"
        className={styles.primaryButton}
        >
        WhatsApp
        </a>

        <a href="#mapa" className={styles.secondaryButton}>
        Como Chegar
        </a>
        </div>

        <div className={styles.stats}>
          <div>
            <h3>5,0</h3>
            <span>No Google</span>
          </div>

          <div>
            <h3>2014</h3>
            <span>Fundação</span>
          </div>

          <div>
            <h3>+1000</h3>
            <span>Clientes Satisfeitos</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;