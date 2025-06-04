import { useEffect } from "react";
import { useState } from "react";
import { fetchBlogs } from "../../services";
import BlogCard from "../../components/common/BlogCard";
import BlogSkeleton from "../../components/common/BlogCard/BlogSkeleton";


export default function Blog()
{
const [blogs, setBlogs] = useState()
const [isBlogLoading, setIsBlogLoading] =useState(true);
useEffect( () => {
(async () => {
    try {
        const result = await fetchBlogs() ;
         setBlogs(result);
         setIsBlogLoading(false);
    } catch (err) {
        console.error('Error fetching blogs:', err);
    }
 })();
}, []);


console.log("🚀 ~ Home ~ blogs:", blogs);
   return (
    <div>
   <div className="flex bg-green-200 p-4 items-center  flex-col gap-2 ">
    <h1 className="text-2xl font-bold font-roboto">Welcome to the blog</h1> 
    <p className="text-gray-400 font-roboto">If you can dream it, you can do it.</p>
    
   </div>
   <div className="grid grid-cols-12 gap-4 p-5">
      {isBlogLoading
      ? Array.from({ length: 6})?.map((_, index) => (
         <BlogSkeleton  key={index} /> 
        )) 
      : blogs?.result?.map((blog) => (
        <BlogCard
        key={blog.title} 
        title={blog.title}
        summary={blog.summary}
       created_at={blog.created_at}
        author={blog.author}
        />

      ))}
    </div>
   </div>
   );
  
}