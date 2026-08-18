import styles from "./WhatsappButton.module.css";
import whatsapp from "../../assets/icons/whatsapp.png";

function WhatsappButton() {
  return (
    <a
      href="https://wa.me/5511977991052"
      target="_blank"
      rel="noreferrer"
      className={styles.whatsapp}
    >
      <img src={whatsapp} alt="WhatsApp" />
    </a>
  );
}

export default WhatsappButton;