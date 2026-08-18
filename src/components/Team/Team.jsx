import styles from "./Team.module.css";
import { useState } from "react";

import johnny from "../../assets/images/equipe/johnny.jpg";
import rogerio from "../../assets/images/equipe/rogerio.jpg";
import luiz from "../../assets/images/equipe/luiz.jpg";

function Team() {
  const [membroSelecionado, setMembroSelecionado] = useState(null);

  return (
    <section className={styles.team} id="equipe">
      <h2>Nossa Equipe</h2>

      <div className={styles.cards}>

    <div className={styles.card} onClick={() => setMembroSelecionado("rogerio")}>   
        <img
         src={rogerio}
         alt="Rogerio"
         className={styles.rogerio}      
/>
        <h3>Rogerio</h3>

        <p>Profissional</p>
    </div>

    <div className={styles.card} onClick={() => setMembroSelecionado("johnny")}>
       
        <img
         src={johnny}
         alt="Johnny"
         className={styles.johnny}
         
/>

        <h3>Johnny</h3>

        <span className={styles.founder}>Fundador</span>

        <p>Profissional</p>
    </div>

    <div className={styles.card} onClick={() => setMembroSelecionado("luiz")}>
        
        <img
        src={luiz}
        alt="Luiz Fernando"
        className={styles.luiz}
/>

        <h3>Fernando</h3>

        <p>Profissional</p>
    </div>

</div>

{membroSelecionado && (
  <div
    className={styles.modal}
    onClick={() => setMembroSelecionado(null)}
  >
    <div
      className={styles.modalContent}
      onClick={(e) => e.stopPropagation()}
    >
      <button
        className={styles.close}
        onClick={() => setMembroSelecionado(null)}
      >
        X
      </button>

      {membroSelecionado === "johnny" && (
        <>
          <h2>Johnny</h2>

          <p>
            Fundador da Barbearia Johnny Black , Johnny atua no ramo desde 2014. Ao longo dos anos, construiu uma trajetória marcada pela dedicação e pelo compromisso com cada cliente. Hoje, segue liderando a equipe e contribuindo para que a barbearia continue sendo referência em atendimento e experiência.
          </p>

          <a
            href="https://instagram.com/_johnnyblack10"
            target="_blank"
          >
            Ver Instagram
          </a>
        </>
      )}

      {membroSelecionado === "rogerio" && (
        <>
          <h2>Rogerio</h2>

          <p>
            Natural de São Paulo e criado em Minas Gerais, Rogerio retornou às suas origens trazendo consigo mais de 10 anos de experiência na área barbearia. Sua trajetória é marcada por diferentes vivências e pela paixão pela profissão, somando forças à equipe da Barbearia Johnny Black .
          </p>

          <a
            href="https://instagram.com/rogeriocortss_"
            target="_blank"
          >
            Ver Instagram
          </a>
        </>
      )}

      {membroSelecionado === "luiz" && (
        <>
          <h2>Luiz Fernando</h2>

          <p>
          Luiz Fernando iniciou sua jornada na barbearia aos 14 anos de idade é o mais jovem da equipe. Com uma grande vontade de evoluir e aprender constantemente, faz parte da nova geração de barbeiros, contribuindo diariamente para o crescimento e a união da Barbearia Johnny Black .
          </p>

          <a
            href="https://instagram.com/macaecorts_"
            target="_blank"
          >
            Ver Instagram
          </a>
        </>
      )}
    </div>
  </div>
)}
    </section>
  );
}

export default Team;