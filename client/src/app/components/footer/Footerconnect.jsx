import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import styles from "./footer.module.css";
const FooterConnect = () => {
  return (
    <div>
      <p style={{ fontWeight: "400" }}>Kết nối chúng tôi</p>
      <div className={styles.connect}>
        <FaFacebook />
        <span>Facebook</span>
      </div>
      <div className={styles.connect}>
        <FaYoutube />
        <span>Youtube</span>
      </div>
      <div className={styles.connect}>
        <FaInstagram />
        <span>Instagram</span>
      </div>
    </div>
  );
};

export default FooterConnect;
