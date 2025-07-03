import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import BlogCard from "../../components/common/BlogCard";
import BlogSkeleton from "../../components/common/BlogCard/BlogSkeleton";
import { fetchBlogs } from "../../store/slice/blogSlice";

import { useNavigate } from "react-router";


export default function Blog(){
  const dispatch = useDispatch();
  const blogStatus = useSelector((state) => state.blog?.status)
  const blog = useSelector((state) => state.blog?.blogs)
  const products = useSelector((state) => state.cart.products);
  console.log("🚀 ~ Blog ~ products:", products);
  const navigate = useNavigate();
  const  isLoggedIn = useSelector((state) => state.auth.isLoggedIn)




  useEffect(() => {
   dispatch(fetchBlogs());
  }, []);




   return (
  
   <div className="flex p-4 items-center  flex-col gap-2 relative ">
    <h1 className="text-2xl font-bold font-roboto">Welcome to the blog</h1> 
    <p className="text-gray-400 font-roboto">If you can dream it, you can do it.</p>
    
  
   <div className="fixed top-4 right-9">    
    <button 
    type="button"
          className="cursor-pointer" 
          onClick={(e) => {
            e.stopPropagation();
            if (!isLoggedIn) {
              navigate (`/login`);
             }
            //  else {
            //     dispatch(addToCart(slug ));
            //  }
           }}
           >
           <i className="material-symbols-outlined  bg-gray-100">shopping_cart</i>
         </button>
         <span className="absolute -top-2 -right-4 h-5 w-5 text-center flex items-center justify-center bg-green-200 text-xs rounded-full ">
          {products.length}
         </span>
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