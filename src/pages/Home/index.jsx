import { useNavigate } from 'react-router';
import {useSelector  } from 'react-redux';

export default function Home() {
 const navigate = useNavigate();
 const count= useSelector((state) =>  state.counter.value);



   return (
   
   <div className="flex items-center justify-center p-5 flex-col gap-5 h-full ">
    <h1 className="text-4xl font-bold  text-gray-700 font-roboto">Welcome to the blog</h1> 
   <button 
   type="button" 
   className="p-2 bg-gray-200 rounded-lg cursor-pointer"
   onClick={()=> navigate("/blog")}
   >
     Read my blog 
     </button>

    <button 
   type="button" 
   className="p-2 bg-gray-200 rounded-lg cursor-pointer"
   onClick={()=> {
    navigate("/blog");
   }}
   >
Increment
     </button>
     <p>{count}</p>
     <button 
   type="button" 
   className="p-2 bg-gray-200 rounded-lg cursor-pointer"
   onClick={()=> {}}
   >
Decrement
     </button>
   </div>
   

   );
  
}
