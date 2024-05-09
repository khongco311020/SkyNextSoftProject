"use client";
import React, { useState, useEffect } from "react";
import styles from "./home.module.css";
import Image from "next/image";
import Link from "next/link";
import { AiTwotoneLike } from "react-icons/ai";
import { GiMightySpanner } from "react-icons/gi";
import { SiEsotericsoftware } from "react-icons/si";
import { FaComputer } from "react-icons/fa6";
// import { useLocale } from "next-intl";
const Home = () => {
  // const local = useLocale();
  // console.log(local);

  const images = [
    "/AnhIT3.jpg",
    "https://pizza-time-with-react.vercel.app/static/media/section-one-1440.bd60dc8a558f85b4ffe7.webp",
    "https://etsgroup.vn/wp-content/uploads/2022/01/Ets-banner.jpg",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === images.length - 1 ? 0 : prevSlide + 1
      );
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={styles.wrap}>
      <div className={styles.slides}>
        <div className={styles.image}>
          <Image
            src={images[currentSlide]}
            alt="lo"
            width={1440}
            height={720}
          />
        </div>
      </div>

      <div className={styles.wrapNoneFlex}>
        <div className={styles.containerCl}>
          <Link href="/contact">
            <div className={styles.tag}>
              <p>Uy tín - Tin cậy</p>
              <div className={styles.icon}>
                <AiTwotoneLike />
              </div>
            </div>
          </Link>
          <Link href="/contact">
            <div className={styles.tag}>
              <p>Hiệu quả - Tiết Kiệm</p>
              <div className={styles.icon}>
                <GiMightySpanner />
              </div>
            </div>
          </Link>
          <Link href="/contact">
            <div className={styles.tag}>
              <p>Chuyên nghiệp - Tận tâm</p>
              <div className={styles.icon}>
                <SiEsotericsoftware />
              </div>
            </div>
          </Link>
          <Link href="/contact">
            <div className={styles.tag}>
              <p>Đáp ứng nhanh chóng</p>
              <div className={styles.icon}>
                <FaComputer />
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div className={styles.wrapCl}>
        <div className={styles.container}>
          <div className={styles.image2}>
            <Image src="/AnhIT1.jpg" alt="" width={500} height={400} />
          </div>
          <div>
            <p style={{ color: "#0bbee7", font: "initial", fontSize: "20px" }}>
              Về chúng tôi
            </p>
            <p>
              Trong nhiều năm làm việc chuyên sâu về ReactJs, đào tạo các nhân
              sự cho các dự án quy mô quốc tế, React Plus đã xây dựng một khoá
              học hoàn chỉnh giúp các developer trẻ hoặc sinh viên mới ra trường
              có cơ hội tiếp cận và có thể bước đầu làm việc với ReactJs & React
              Native.
            </p>
            <ul className={styles.theUl}>
              <li>Smart</li>
              <li>Speed</li>
              <li>Strong</li>
              <li>Secure</li>
              <button className={styles.btnmore}>
                <span>
                  <Link href="/about">Xem thêm...</Link>
                </span>
              </button>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.wrap}>
        <div className={styles.wrapCl}>
          <div className={styles.wrapcol}>
            <Image src="/SuMenh.jpg" alt="" width={334} height={175} />
            <h2 className={styles.wraph2}>Sứ mệnh</h2>
            <div className={styles.wrapp}>
              <p style={{ padding: "10px" }}>
                Cung cấp chuyên gia về React & React Native Thoả mãn khách
                hàngvới chất lượng cao nhất. Tạo dựng cộng đồng kỹ sư React lớn
                nhất tại Việt Nam.
              </p>
            </div>
            <button className={styles.btnmore}>
              {/* <span>
                <Link href={`/${local}/blogs`}>Tìm hiểu thêm</Link>
              </span> */}
            </button>
          </div>
          <div className={styles.wrapcol}>
            <Image src="/GiaTriCotLoi.jpg" alt="" width={334} height={175} />
            <h2 className={styles.wraph2}>Giá trị cốt lõi</h2>
            <div className={styles.wrapp}>
              <p style={{ padding: "10px" }}>
                Chuyên biệt về React Khả năng tăng trưởng nhanh Chuyên gia thực
                sự Phải hồi ngay tức thì
              </p>
            </div>
            <button className={styles.btnmore}>
              <span>
                <Link href="/blog">Tìm hiểu thêm</Link>
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className={styles.home4}>
        <h3>Đối Tác - Khách Hàng</h3>
        <div>
          <Image alt="doitac" src="/cong-an.jpg" width={180} height={180} />
          <Image alt="doitac" src="/mobifone.jpg" width={180} height={180} />
          <Image alt="doitac" src="/viettel.jpg" width={180} height={180} />
          <Image alt="doitac" src="/vinaphone.jpg" width={180} height={180} />
          <Image alt="doitac" src="/vietlott.jpg" width={180} height={180} />
        </div>
      </div>
    </div>
  );
};

export default Home;
