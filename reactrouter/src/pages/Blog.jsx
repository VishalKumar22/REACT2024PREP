import React from "react";
import { useParams } from "react-router-dom";
const Blog = () => {
//With Destructing
    const {id, blogname} = useParams();
    console.log(id);
    
/*
Without Destructing 
  const params = useParams();
  console.log(params.id);
*/
  return (
    <>
  <div>Blog Id:{id}</div>
  <div>Blog Name:{blogname}</div>
  </>
  );
};

export default Blog;
