import React, { useContext } from "react";
import AllPosts from "./AllPosts";
import PostNavbar from "./PostNavbar";

const Blog = () => {
  
  return (
    <>
    <PostNavbar/>
      <AllPosts />
    </>
  );
};

export default Blog;
