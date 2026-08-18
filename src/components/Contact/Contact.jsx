import styles from "./Contact.module.css";

function Contact() {
  return (
    <section className={styles.contact} id="contato">

      <span className={styles.subtitle}>
        Entre em Contato
      </span>

      <h2>BARBEARIA JOHNNY BLACK</h2>

      <div className={styles.info}>

        <div className={styles.card}>
          <h3>WhatsApp</h3>
          <p>(11) 97799-1052</p>
        </div>

        <div className={styles.card}>
          <h3>Instagram</h3>
          <p>@johnnyblack10</p>
        </div>

        <div className={styles.card}>
          <h3>Horário</h3>
          <p>Segunda a Sabado</p>
          <p>08h às 19h</p>
        </div>

        <div className={styles.card}>
          <h3>Atendimento</h3>
          <p> Por ordem de chegada.</p>
          <p>Não é necessário agendar.</p>
        </div>

      </div>


    </section>
  );
}

export default Contact;