import Link from "next/link";
import Links from "./links/Links";
import styles from "./navbar.module.css";
import Image from "next/image";
const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        <Image
          src="/logo-removebg.png"
          alt="LogoImage"
          fill
          className={styles.img}
        />
      </Link>
      <div>
        <Links />
      </div>
    </div>
  );
};

export default Navbar;
