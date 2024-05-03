"use client";
import React, { useState, useEffect } from "react";
import styles from "./home.module.css";
import Image from "next/image";

const Home = () => {
  const images = [
    "/nganhcongnghe.jpg",
    "/chuyendoiso1.jpg",
    "/post1.jpg",
    "https://pizza-time-with-react.vercel.app/static/media/section-one-1440.bd60dc8a558f85b4ffe7.webp",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === images.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={styles.container}>
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
      <div className={styles.home2}>
        <h1>Công Ty công nghệ hàng đầu Việt Nam</h1>
        <div>
          <p>
            SkyNext Soft cung cấp các chuyên gia hàng đầu về lập trình cho thị
            trường quốc tế. Chúng tôi tập trung toàn bộ vào công nghệ và mang
            tới dịch vụ chất lượng cao nhất cho khách hàng ở 2 mảng: Phát triển
            web và ứng dụng di động.
          </p>
        </div>
      </div>
      <div className={styles.home3}>
        <Image
          src="/AnhIT1.jpg"
          alt=""
          width={500}
          height={400}
          objectFit="cover"
        />
        <div>
          <p style={{ color: "#0bbee7", font: "initial", fontSize: "20px" }}>
            Về chúng tôi
          </p>
          <p>
            Trong nhiều năm làm việc chuyên sâu về ReactJs, đào tạo các nhân sự
            cho các dự án quy mô quốc tế, React Plus đã xây dựng một khoá học
            hoàn chỉnh giúp các developer trẻ hoặc sinh viên mới ra trường có cơ
            hội tiếp cận và có thể bước đầu làm việc với ReactJs & React Native.
          </p>
          <ul>
            <li>Smart</li>
            <li>Speed</li>
            <li>Strong</li>
            <li>Secure</li>
          </ul>
        </div>
      </div>
      <div className={styles.home4}>
        <h3>Đối Tác - Khách Hàng</h3>
        <div>
          <Image
            alt="doitac"
            src="/cong-an.jpg"
            width={180}
            height={180}
            layout="fixed"
          />
          <Image
            alt="doitac"
            src="/mobifone.jpg"
            width={180}
            height={180}
            layout="fixed"
          />
          <Image
            alt="doitac"
            src="/viettel.jpg"
            width={180}
            height={180}
            layout="fixed"
          />
          <Image
            alt="doitac"
            src="/vinaphone.jpg"
            width={180}
            height={180}
            layout="fixed"
          />
          <Image
            alt="doitac"
            src="/vietlott.jpg"
            width={180}
            height={180}
            layout="fixed"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
