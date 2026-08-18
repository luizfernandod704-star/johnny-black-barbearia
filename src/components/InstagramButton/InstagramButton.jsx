import styles from "./InstagramButton.module.css";
import instagram from "../../assets/icons/instagram.png";

function InstagramButton() {
  return (
    <a
      href="https://instagram.com/_johnnyblack10?igshid=MzRlODBiNWFlZA=="
      target="_blank"
      rel="noreferrer"
      className={styles.instagram}
    >
      <img src={instagram} alt="Instagram" />
    </a>
  );
}

export default InstagramButton;