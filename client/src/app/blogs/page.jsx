"use client";
import styles from "./blog.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import dayjs from "dayjs";
import Image from "next/image";
import ReactPaginate from "react-paginate";
import AOS from "aos";
import "aos/dist/aos.css";

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

  const [pageNumber, setPageNumber] = useState(0);

  const itemsPerPage = 6;
  const pagesVisited = pageNumber * itemsPerPage;

  const itemsDisplay = blogs.slice(pagesVisited, pagesVisited + itemsPerPage);

  const pageCount = Math.ceil(blogs.length / itemsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: "ease",
      once: false,
    });
    AOS.refresh();
  }, []);

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.blogcol1} data-aos="fade-right">
          <h1 className={styles.blogtitle}>BLOG</h1>
          <div className={styles.blogloop}>
            {itemsDisplay.map((blog, index) => (
              <div key={index} className={styles.blogcontent}>
                <div className={styles.top}>
                  <div className={styles.imgContainer}>
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      width={150}
                      height={150}
                      className={styles.blogimg}
                    />
                  </div>
                  <div className={styles.bottom}>
                    <h1 className={styles.title}>{blog.title}</h1>
                    <p className={styles.content}>{blog.highlight}</p>
                    <Link href={`/blogs/${blog._id}`}>
                      <span
                        className={styles.morehover}
                        style={{ fontSize: "14px" }}
                      >
                        Xem thêm
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div>
            <ReactPaginate
              previousLabel={"<<"}
              nextLabel={">>"}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={styles.pagination}
              previousLinkClassName={"previousButton"}
              nextLinkClassName={"nextButton"}
              disabledClassName={styles.paginationDisabled}
              activeClassName={styles.paginationActive}
            />
          </div>
        </div>
        <div className={styles.blogcol2} data-aos="fade-left">
          <div className={styles.null}></div>
          <div className={styles.blogmain}>
            <h3 className={styles.blognews}>Tin tức nổi bật</h3>
            <div className={styles.newscontent}>
              {blogs.map((blog, index) => {
                if (index < 4)
                  return (
                    <div key={index} className={styles.newsloop}>
                      <div className={styles.newsbox}>
                        <Image
                          src={blog.image}
                          alt={blog.title}
                          width={100}
                          height={100}
                          className={styles.newsimg}
                        />
                      </div>
                      <div className={styles.newsright}>
                        <Link href="/blogs/post">{blog.title}</Link>
                        <span style={{ fontSize: "10px" }}>
                          {dayjs(blog.createAt).format("DD-MM-YYYY")}
                        </span>
                      </div>
                    </div>
                  );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.partner}>
        <div className={styles.logo}>
          <li>
            <Image src="/fpt.svg" width={150} height={100} />
          </li>
          <li>
            <Image src="/ggcloud.png" width={150} height={50} />
          </li>
          <li>
            <Image src="/mcs.png" width={150} height={50} />
          </li>
        </div>
      </div>
    </div>
  );
};

export default Blog;
