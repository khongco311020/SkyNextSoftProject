"use client";
import styles from "./blog.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import dayjs from "dayjs";
import Image from "next/image";
const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/blogs")
      .then((response) => {
        console.log("Data fetched:", response.data.data);
        setBlogs(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.blogcol1}>
      <h1 className={styles.blogtitle}>BLOG</h1>
        <div className={styles.blogloop}>
        {blogs.map((blog, index) => (
          <div key={index}  className={styles.blogcontent}>
            {/* <div className={styles.top}> */}

            <div className={styles.top}>
              <div className={styles.imgContainer}>
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={150}
                  height={150}
                  className={styles.blogimg}
                />
                {/* </div> */}
                {/* <span className={styles.date}>
      {blogs.map((blog, index) => (
        <div key={index}>
          <div className={styles.top}>
            <div className={styles.imgContainer}>
              <Image
                src={blog.image}
                alt={blog.title}
                width={300}
                height={200}
              />
            </div>
            <span className={styles.date}>
              {dayjs(blog.createdAt).format("DD-MM-YYYY")}
            </span> */}
              </div>
              <div className={styles.bottom}>
                <h1 className={styles.title}>{blog.title}</h1>
                <p className={styles.content}>{blog.content}</p>
                <Link href="/blog/post">
                  <span className={styles.morehover} style={{ fontSize: "14px",}}>Xem thêm</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
        </div>
        
      </div>
      <div className={styles.blogcol2}>
        <div className={styles.null}></div>
        <div className={styles.blogmain}>
          <h3 className={styles.blognews}>Tin tức nổi bật</h3>
          <div className={styles.newscontent}>
            {blogs.map((blog, index) => {if(index < 4) return (
              <div key={index} className={styles.newsloop}>
                <div className={styles.newsbox}>
                  <Image src={blog.image} alt={blog.title} width={100} height={100} className={styles.newsimg} />
                </div>
                <div className={styles.newsright}>
                  <Link href="/blog/post">{blog.title}</Link>
                  <span style={{fontSize:"10px"}}>{dayjs(blog.createAt).format("DD-MM-YYYY")}</span>
                </div>
              </div>)
              }
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
