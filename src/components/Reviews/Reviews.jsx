import styles from "./Reviews.module.css";

function Reviews() {
  return (
    <section className={styles.reviews} id="avaliacoes">
      <h2>O que nossos clientes dizem</h2>

      <div className={styles.cards}>

        <div className={styles.card}>
          <h3>★★★★★</h3>
          <p>
            Ótimo atendimento, profissionais de qualidade e um ambiente
            com respeito adequado para todas as idades. Frequento há mais
            de 5 anos e recomendo muito!
          </p>
          <span>— Cauã Da Silva Ferreira</span>
        </div>

        <div className={styles.card}>
          <h3>★★★★★</h3>
          <p>
            O melhor da região! Sou cliente há mais de 10 anos do Johnny.
            Profissionais nota 10.
          </p>
          <span>— Robson Ribeiro</span>
        </div>

        <div className={styles.card}>
          <h3>★★★★★</h3>
          <p>
            Profissional excelente, ótimo atendimento para adulto e
            infantil. Sou cliente há cerca de 10 anos.
          </p>
          <span>— Wesley Oliveira</span>
        </div>

        <div className={styles.card}>
          <h3>★★★★★</h3>
          <p>
            Barbearia top, a melhor da região. Atendimento ótimo, estão
            de parabéns!
          </p>
          <span>— Rildo De Jesus Pereira</span>
        </div>

        <div className={styles.card}>
          <h3>★★★★★</h3>
          <p>
            Melhor salão que eu já conheci! Atendimento 100% dos meninos.
            Compromisso e entrega do que promete!
          </p>
          <span>— Tulio Delmondes</span>
        </div>

        <div className={styles.card}>
          <h3>★★★★★</h3>
          <p>
            Serviço e atendimento impecável!
          </p>
          <span>— Júnior Novaes</span>
        </div>

      </div>
    </section>
  );
}

export default Reviews;