import { useEffect } from "react";
import { useParams } from "react-router";
import { retrieveBlog } from "../../services";
import { useState } from "react";
import BlogDetailsSkeleton from "./BlogDetailsSkeleton";

export default function BlogDetails() {
    const { blogName } =useParams();
    const[blog, setBlog] = useState();
    const[blogError, setBlogError] = useState(false);
    console.log("🚀 ~ BlogDetails ~ blogError:", blogError)
 
    const [isBlogLoading, setIsBlogLoading] =useState(true);
   
   
    useEffect( () => {
    (async () => {
        try {
            const { result } = await retrieveBlog( blogName );
             setBlog(result);
              setIsBlogLoading(false);
          
        } catch (err) {
            console.log('Error fetching blogs:', err);
              setBlogError(err);
              setIsBlogLoading(false);
        }
     })();
    }, []);
 
    return (
    <div className="flex flex-col w-full h-full items-center gap-2 p-4" >
         
        { blogError ? (
         blogError.message  || 'Error Fetching blog'
        ): isBlogLoading ? (
           <BlogDetailsSkeleton/>
      ) : (
        <>
         <h4 className="text-4xl">{blog?.title} </h4>
        </>
      )}
      {/* <p>{summary}</p> */}
    </div>
    );
}