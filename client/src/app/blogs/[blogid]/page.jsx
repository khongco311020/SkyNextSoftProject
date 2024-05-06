"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "next/navigation";

export default function BlogDetail() {
  const [blog, setBlog] = useState(null);
  const id = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5555/blogs/${id}`)
      .then((response) => {
        setBlog(response.data);
      })
      .catch((error) => {
        console.error("Error fetching blog:", error);
      });
  }, []);

  return (
    <div>
      {blog ? (
        <div>
          <h1>{blog.title}</h1>
          <p>{blog.content}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
