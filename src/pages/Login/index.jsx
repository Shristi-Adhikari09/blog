import { useState } from "react";

export default function Login() {
  
  const[loginData,setLoginData] = useState({ email: null, password: null });
  console.log("🚀 ~ Login ~ loginData:", loginData)
  const onSubmitHandler = (e) =>{
   e.preventDefault();
   
   console.log('submitting form');
  }

  return (
    <div className="md:w-1/2 w-full mx-auto mt-4">
        <h2 className="text-2xl font-bold">SignIn</h2>
        <h2 className="text-sm font-light">Signin to create your blogs</h2>
      <form 
       onSubmit={onSubmitHandler}
      className="flex mt-3 flex-col gap-3">
    <div className="flex flex-col gap-1">
       <label htmlFor="email">Email</label>
       <input 
       type="text" 
       name="Email"
        id="email"
        value={loginData.email}
        onChange={(e) => 
            setLoginData((prev) => ({...prev,email:e.target.value}))
        }
        className="border border-gray-400 h-8 md:w-1/2 w-full rounded-lg p-2"
        />
    </div>

    <div className="flex flex-col gap-1">
       <label htmlFor="password">Password</label>
       <input 
       type="password"
        name="Password" 
        id="Password" 
        value={loginData.password}
        onChange={(e) => setLoginData((prev) => ({...prev,password:e.target.value}))}
       className="border  border-gray-400 h-8 md:w-1/2 w-full rounded-lg p-2"
       />
   </div>
   <button type="submit" className="w-fit px-2 py-1 rounded-lg bg-green-600 text-white">Submit</button>
       
      </form> 
    </div>
  );
}4 