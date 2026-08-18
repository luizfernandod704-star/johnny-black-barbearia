import styles from "./Navbar.module.css";
import logo from "../../assets/images/logo/logo.jpg";

function Navbar() {
  return (
    <nav className={styles.navbar}>

      <div className={styles.navbarLogo}>
        <img src={logo} alt="Johnny Black Barbearia" />
      </div>

      <ul className={styles.navbarMenu}>
        <li><a href="#inicio">Início</a></li>
        <li><a href="#sobre">Sobre</a></li>
        <li><a href="#servicos">Serviços</a></li>
        <li><a href="#equipe">Equipe</a></li>
        <li><a href="#galeria">Galeria</a></li>
        <li><a href="#contato">Contato</a></li>
      </ul>

      <div className={styles.navbarActions}>
        <button className={styles.whatsappButton}>
      <a
  href="https://wa.me/5511977991052"
  target="_blank"
  rel="noreferrer"
  className={styles.whatsappButton}
>
  WhatsApp
</a>
        </button>
      </div>

    </nav>
  );
}

export default Navbar;