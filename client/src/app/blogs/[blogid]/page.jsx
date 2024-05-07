"use client";

import { Suspense, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "next/navigation";
import Loading from "@/app/loading";

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
    <div>
      {blog ? (
        <div className="text-black">
          <h1>{blog.title}</h1>
          <p>{blog.content}</p>
        </div>
      ) : (
        <Loading/>
      )}
    </div>
  );
}
