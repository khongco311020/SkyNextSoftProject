"use client";

import { useState } from "react";
import { useTranslation } from "next-i18next";
import styles from "./links.module.css";
import NavLink from "./navLinks/navLink";
import { useLocale } from "next-intl";

const Links = () => {
  const [open, setOpen] = useState(false);
  const locale = useLocale();
  const { t } = useTranslation();

  const links = [
    {
      title: t("Home"),
      path: "/",
    },
    {
      title: t("About"),
      path: `/about`,
    },
    {
      title: t("Blog"),
      path: `/blogs`,
    },
    {
      title: t("Contact"),
      path: `/contact`,
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
      </div>
      <button
        className={styles.menuButton}
        onClick={() => setOpen((prev) => !prev)}
      >
        Menu
      </button>
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
