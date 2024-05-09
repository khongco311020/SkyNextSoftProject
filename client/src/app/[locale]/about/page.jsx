"use client";
import Image from "next/image";
import { useTranslation } from "next-i18next"; //Không phải thằng này
import { useTranslations } from "next-intl";
import styles from "./about.module.css";
import Googlemap from "../contact/Googlemap";
import { IoLocationOutline } from "react-icons/io5";

// export const metadata = {
//   title: "About Page",
//   description: "About description",
// };

const AboutPage = () => {
  const { t } = useTranslations("about");
  // Import  useTranslations chứ k phải useTranslation
  //Trước em cũng dính mấy lần

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{t("about_title")}</h1>
          <p className={styles.desc}>{t("about_description")}</p>
          <div className={styles.boxes}>
            <div className={styles.box}>
              <div className={styles.boxImg}>
                <Image src="/quymo.svg" alt="" height={40} width={40} />
              </div>
              <p>{t("workplace")}</p>
            </div>
            <div className={styles.box}>
              <div className={styles.boxImg}>
                <Image src="/Japan.svg" alt="" height={40} width={40} />
              </div>
              <p>{t("scale")}</p>
            </div>
            <div className={styles.box}>
              <div className={styles.boxImg}>
                <Image src="/edit-curves.svg" alt="" height={40} width={40} />
              </div>
              <p>{t("free_training")}</p>
            </div>
          </div>
        </div>
        <div className={styles.wrap}>
          <div className={styles.wrapcontainer}>
            <div className={styles.wrapcol}>
              <div className={styles.wrappad}>
                <Image src="/TamNhin.jpg" alt="" width={334} height={175} />
                <h2 className={styles.wraph2}>{t("vision")}</h2>
                <p className={styles.wrapp}>{t("vision_description")}</p>
              </div>
            </div>
            <div className={styles.wrapcol}>
              <div className={styles.wrappad}>
                <Image src="/SuMenh.jpg" alt="" width={334} height={175} />
                <h2 className={styles.wraph2}>{t("mission")}</h2>
                <div className={styles.wrapp}>
                  <p>{t("mission_point1")}</p>
                  <p>{t("mission_point2")}</p>
                  <p>{t("mission_point3")}</p>
                </div>
              </div>
            </div>
            <div className={styles.wrapcol}>
              <div className={styles.wrappad}>
                <Image
                  src="/GiaTriCotLoi.jpg"
                  alt=""
                  width={334}
                  height={175}
                />
                <h2 className={styles.wraph2}>{t("core_values")}</h2>
                <div className={styles.wrapp}>
                  <p>{t("core_value1")}</p>
                  <p>{t("core_value2")}</p>
                  <p>{t("core_value3")}</p>
                  <p>{t("core_value4")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.achive}>
          <div className={styles.achivecontainer}>
            <div className={styles.achivecol}>
              <Image
                src="/ChungChi.jpg"
                alt=""
                width={500}
                height={500}
                layout="responsive"
              />
            </div>
            <div className={styles.achivecol}>
              <div className={styles.achivecontent}>
                <h2>{t("awards_certificates")}</h2>
                <p>{t("awards_certificates_description1")}</p>
                <p>{t("awards_certificates_description2")}</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.itemmap}>
          <div className={styles.textContainer}>
            <h2 className={styles.subtitle}>{t("find_us")}</h2>
            <div className={styles.textAddress}>
              <IoLocationOutline />
              <p>{t("address")}</p>
            </div>
          </div>
          <div className={styles.imgContainer}>
            <Googlemap />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
