import styles from "./Services.module.css";
import { useState } from "react";

import Corte from "../../assets/images/servicos/corte.jpg";
import Barba from "../../assets/images/servicos/barba.jpg";
import Luzes from "../../assets/images/servicos/luzes.jpg";
import Platinado from "../../assets/images/servicos/platinado.jpg";
import Pigmentacao from "../../assets/images/servicos/pigmentacao.jpg";
import Penteado from "../../assets/images/servicos/penteado.jpg";
import sobrancelha from "../../assets/images/Servicos/sobrancelha.jpg";

function Services() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="servicos" className={styles.services}>
      <span className={styles.subtitle}>Nossos Serviços</span>

      <h2>Tudo para o seu visual</h2>

      <div className={styles.cards}>

        <div
          className={styles.card}
          onClick={() => setSelectedImage(Corte)}
        >
          <h3>Corte</h3>
          <p>Cortes modernos e clássicos com acabamento profissional.</p>
        </div>

        <div
          className={styles.card}
          onClick={() => setSelectedImage(Barba)}
        >
          <h3>Barba</h3>
          <p>Modelagem completa e acabamento impecável.</p>
        </div>

        <div
          className={styles.card}
          onClick={() => setSelectedImage(Luzes)}
        >
          <h3>Luzes</h3>
          <p>Visual moderno com técnicas profissionais.</p>
        </div>

        <div
          className={styles.card}
          onClick={() => setSelectedImage(Platinado)}
        >
          <h3>Platinado</h3>
          <p>Descoloração e tonalização de alta qualidade.</p>
        </div>

        <div className={styles.card}>
          <h3>Progressiva</h3>
          <p>Alinhamento dos fios com resultado natural.</p>
        </div>

        <div className={styles.card}>
          <h3>Relaxamento</h3>
          <p>Controle do volume preservando a saúde do cabelo.</p>
        </div>

        <div
          className={styles.card}
          onClick={() => setSelectedImage(Pigmentacao)}
        >
          <h3>Pigmentação</h3>
          <p>
            Realce o visual com uma pigmentação natural que valoriza o corte.
          </p>
        </div>

        <div
          className={styles.card}
          onClick={() => setSelectedImage(Penteado)}
        >
          <h3>Penteado</h3>
          <p>
            Finalização profissional para qualquer ocasião.
          </p>
        </div>

        <div
          className={styles.card}
          onClick={() => setSelectedImage(sobrancelha)}
>
         <h3>Sobrancelha</h3>
       <p>
          Uma sobrancelha bem feita destaca o olhar e harmoniza o rosto.
       </p>
        </div>
      </div>

      {selectedImage && (
        <div
          className={styles.modal}
          onClick={() => setSelectedImage(null)}
        >
          <img src={selectedImage} alt="Serviço" />
        </div>
      )}
    </section>
  );
}

export default Services;