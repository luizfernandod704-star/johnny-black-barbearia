import styles from "./Map.module.css";

function Map() {
  return (
    <section className={styles.map} id="mapa">
      <h2>Onde Estamos</h2>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.7459300552246!2d-46.89374252542296!3d-23.54163886086652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf01bdb7a1c42d%3A0xfa55188cbe3575ac!2sBarbearia%20JohnnyBlack10!5e0!3m2!1spt-BR!2sus!4v1784639220263!5m2!1spt-BR!2sus"                                                                            
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </section>
  );
}

export default Map;