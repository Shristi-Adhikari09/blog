import { useEffect } from "react";

import {  useDispatch, useSelector} from "react-redux";
import BlogCard from "../../components/common/BlogCard";
import BlogSkeleton from "../../components/common/BlogCard/BlogSkeleton";
import { fetchBlogs } from "../../store/slice/blog";

export default function Blog()
{


  const dispatch= useDispatch();
  const blogStatus= useSelector((state) => state.blog.status)
  const blog = useSelector((state) => state.blog.blogs)

  useEffect(() => {
   dispatch(fetchBlogs());
  }, [dispatch]);


   return (
    <div>
   <div className="flex bg-green-200 p-4 items-center  flex-col gap-2 ">
    <h1 className="text-2xl font-bold font-roboto">Welcome to the blog</h1> 
    <p className="text-gray-400 font-roboto">If you can dream it, you can do it.</p>
    
   </div>
   <div className="grid grid-cols-12 gap-4 p-5">
      {blogStatus === 'loading'
      ? Array.from({ length: 6})?.map((_, index) => (
         <BlogSkeleton  key={index} /> 
        )) 
      : blog?.map((blog) => (
        <BlogCard
      key={blog.id } 
        title={blog.title}
       slug={blog.slug}
        summary={blog.summary}
       created_at={blog.created_at}
        author={blog.author}
        />

      ))}
    </div>
   </div>
   );
  
}