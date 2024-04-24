import React, { useEffect, useState } from "react";
import styles from "../styles/Blog.module.css";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

// Step 1:  Collect all the files from blogdata

const Blog = (props) => {
  const [blogs, setBlogs] = useState(props.allBlogs);



  return (
    <main className={`${styles.main} ${inter.className}`}>
      {blogs.map((blogitem)=> {
        return <div className={styles.grid} key={blogitem.title}>
        <Link
          href={`/blogpost/${blogitem.slug}`}
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2 className={styles.blogItemh3}>
           {blogitem.title}<span>-&gt;</span>
          </h2>
          <p className={styles.blogItemhp}>{blogitem.content.substr(0, 140)}...</p>
        </Link>
      </div>

})}
    </main>
  );
};

export async function getServerSideProps(context) {
  let data = await fetch("http://localhost:3000/api/blogs")
  let allBlogs = await data.json()
  return {
    props: {allBlogs}
  }
}

export default Blog;
