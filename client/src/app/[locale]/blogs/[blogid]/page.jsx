"use client";

import { Suspense, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "next/navigation";
import Loading from "@/app/loading";
import Image from "next/image";

export default function BlogDetail() {
  const [blog, setBlog] = useState(null);
  const { blogid } = useParams();

  useEffect(() => {
    if (!blogid) return;

    axios
      .get(`http://localhost:5555/blogs/${blogid}`)
      .then((res) => {
        setBlog(res.data);
      })
      .catch((error) => {
        console.error("Error fetching blog:", error);
      });
  }, [blogid]);

  return (
    <div style={{ color: "black" }}>
      {blog ? (
        <div className="text-black">
          <h1>{blog.title}</h1>
          <p>{blog.content}</p>
          <Image
            src={blog.image}
            alt={blog.title}
            width={150}
            height={150}
            // className={styles.blogimg}
          />
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}
