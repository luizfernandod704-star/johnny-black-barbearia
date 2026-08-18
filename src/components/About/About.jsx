import styles from "./About.module.css";

function About() {
  return (
    <section id="sobre" className={styles.about}>

      <div className={styles.container}>

        <div className={styles.text}>

          <span>Sobre a Barbearia Johnny Black</span>

          <h2>Mais que um corte, uma experiência.</h2>

          <p>
            Fundada em 2014, a Barbearia Johnny Black nasceu com o objetivo de
            oferecer muito mais do que um simples corte de cabelo.
          </p>

          <p>
            Nosso compromisso é proporcionar qualidade, conforto e um ambiente
            agradável para todos os clientes.
          </p>

          <p>
            Nossa equipe é formada por Johnny, Rogerio e Luiz Fernando,
            profissionais preparados para realizar cortes modernos, barba,
            luzes, platinado, progressiva, relaxamento e diversos outros
            serviços.
          </p>

        </div>

      </div>

    </section>
  );
}

export default About;