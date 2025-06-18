import { useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../../../context/AuthContext";

export default function BlogCard( {slug, title, summary, created_at,author}){
   const navigate = useNavigate();
   const{ isLoggedIn } = useContext(AuthContext);
 

     
  return (
    <div 
    onClick={() => navigate(`/blog-details/${slug}`)} 
    className="col-span-12 md:col-span-4  font-roboto lg:col-span-3 shadow-lg p-4 border border-gray-400 rounded-3xl hover:bg-gray-200 cursor-pointer"
    >
      {isLoggedIn ? (
      <div  className=" w-full flex justify-end ">
      <button type="button"
       className="cursor-pointer" 
      onClick={(e) => {
        e.stopPropagation()
        navigate(`/blog/edit/${slug}`);
      }}
      >
        <i className="material-symbols-outlined  bg-gray-100">edit</i>
      </button>
      </div> 
      ): null}
      <div>
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>
        <p className="text-sm text-gray-700">{summary}</p>
      </div>
      <div className="flex gap-4">
        <p className="font-mono text-gray-700">{author} - </p>
        <p>{created_at}</p>
      </div>
    </div>
    );
}