import { useContext, useState } from "react";
import {  loginUser } from "../../services";
import { useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext";

export default function Login() {
  const{ login} = useContext(AuthContext);
  //Two way binding
  const[loginData,setLoginData] = useState({username: null, password: null });
  const[loginError, setLoginError] =useState(null)
   const navigate =useNavigate();


  const onSubmitHandler = async (e) =>{
    e.preventDefault();
    console.log('submitting form');
    
try {
   // Hit login api
    const response = await loginUser({
      username: loginData.username,
      password: loginData.password,
    });


    // Save tokens in local storage
    localStorage.setItem("token",response.token);
    navigate('/blog/create');
    login();
    setLoginError(null);
  
} catch (error) {
  setLoginError("Username or password do not match")
}

};
   

  return (
    <div className="md:w-1/2 w-full mx-auto mt-4">
      <h2 className="text-2xl font-bold">SignIn</h2>
      <h2 className="text-sm font-light">Signin to create your blogs</h2>
      {loginError ?
       <p className="bg-red-100 p-1 rounded-lg text-sm w-fit" >{loginError}</p>
       :null}
      <form onSubmit={onSubmitHandler} className="flex mt-3 flex-col gap-3">

        <div className="flex flex-col gap-1">
          <label htmlFor="username">Username</label>
          <input 
            type="text" 
            name="Username"
            id="username"
            value={loginData.username}
            onChange={(e) => setLoginData((prev) => ({ ...prev,username: e.target.value }))}
            className="border border-gray-400 h-8 md:w-1/2 w-full rounded-lg p-2"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="password">Password</label>
          <input 
            type="password"
            name="Password"
            id="password"
            value={loginData.password}
            onChange={(e) => setLoginData((prev) => ({ ...prev, password: e.target.value }))}
            className="border border-gray-400 h-8 md:w-1/2 w-full rounded-lg p-2"
          />
        </div>

        <button type="submit" className="w-fit px-2 py-1 rounded-lg bg-green-600 text-white">
          Submit
        </button>

      </form>
    </div>
  );
}
