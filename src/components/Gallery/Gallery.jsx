import styles from "./Gallery.module.css";
import { useState } from "react";

import fachada from "../../assets/images/Galeria/Ambiente/fachada.jpg";
import interior1 from "../../assets/images/Galeria/Ambiente/interior1.jpg";
import interior2 from "../../assets/images/Galeria/Ambiente/interior2.jpg";
import interior3 from "../../assets/images/Galeria/Ambiente/interior3.jpg";
import interior4 from "../../assets/images/Galeria/Ambiente/interior4.jpg";
import interior5 from "../../assets/images/Galeria/Ambiente/interior5.jpg";

import corte1 from "../../assets/images/Galeria/Trabalhos/corte1.jpg";
import corte2 from "../../assets/images/Galeria/Trabalhos/corte2.jpg";
import corte3 from "../../assets/images/Galeria/Trabalhos/corte3.jpg";
import corte4 from "../../assets/images/Galeria/Trabalhos/corte4.jpg";
import corte5 from "../../assets/images/Galeria/Trabalhos/corte5.jpg";
import corte6 from "../../assets/images/Galeria/Trabalhos/corte6.jpg";
import corte7 from "../../assets/images/Galeria/Trabalhos/corte7.jpg";
import corte8 from "../../assets/images/Galeria/Trabalhos/corte8.jpg";
import corte9 from "../../assets/images/Galeria/Trabalhos/corte9.jpg";
import corte10 from "../../assets/images/Galeria/Trabalhos/corte10.jpg";
import corte11 from "../../assets/images/Galeria/Trabalhos/corte11.jpg";
import corte12 from "../../assets/images/Galeria/Trabalhos/corte12.jpg";
import corte13 from "../../assets/images/Galeria/Trabalhos/corte13.jpg";
import corte14 from "../../assets/images/Galeria/Trabalhos/corte14.jpg";
import corte15 from "../../assets/images/Galeria/Trabalhos/corte15.jpg";

function Gallery() {
  const [mostrarAmbiente, setMostrarAmbiente] = useState(false);
  const [mostrarTrabalhos, setMostrarTrabalhos] = useState(false);

  return (
    <section className={styles.gallery} id="galeria">

      <h2>Galeria</h2>

      <div
  className={styles.folder}
  onClick={() => setMostrarAmbiente(!mostrarAmbiente)}
>
  <h3>✦ A EXPERIÊNCIA JOHNNY BLACK</h3>
</div>

      {mostrarAmbiente && (
        <div className={styles.grid}>
          <img src={fachada} alt="Fachada" />
          <img src={interior1} alt="Interior 1" />
          <img src={interior2} alt="Interior 2" />
          <img src={interior3} alt="Interior 3" />
          <img src={interior4} alt="Interior 4" />
          <img src={interior5} alt="Interior 5" />
        </div>
      )}

      <div
  className={styles.folder}
  onClick={() => setMostrarTrabalhos(!mostrarTrabalhos)}
>
  <h3>✦ NOSSOS TRABALHOS</h3>
</div>

      {mostrarTrabalhos && (
        <div className={styles.grid}>
          <img src={corte1} alt="Corte 1" />
          <img src={corte2} alt="Corte 2" />
          <img src={corte3} alt="Corte 3" />
          <img src={corte4} alt="Corte 4" />
          <img src={corte5} alt="Corte 5" />
          <img src={corte6} alt="Corte 6" />
          <img src={corte7} alt="Corte 7" />
          <img src={corte8} alt="Corte 8" />
          <img src={corte9} alt="Corte 9" />
          <img src={corte10} alt="Corte 10" />
          <img src={corte11} alt="Corte 11" />
          <img src={corte12} alt="Corte 12" />
          <img src={corte13} alt="Corte 13" />
          <img src={corte14} alt="Corte 14" />
          <img src={corte15} alt="Corte 15" />
        </div>
      )}

    </section>
  );
}

export default Gallery;