"use client";
import Link from "next/link";
import styles from "./navLink.module.css";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";

const NavLink = ({ item }) => {
  const pathName = usePathname();
  const locale = useLocale();

  return (
    <Link
      //nãy em quên thêm dấu /
      href={`/${locale}${item.path}`}
      className={`${styles.container} ${
        pathName === item.path && styles.active
      }`}
    >
      {item.title}
    </Link>
  );
};

export default NavLink;
