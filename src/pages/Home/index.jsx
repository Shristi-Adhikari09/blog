import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
// import {
//   decrement,
//   increment,
//   incrementByAmount,
//   resetCount,
// } from '../../store/slice/counterSlice';
// import { useState } from 'react';
// import { login, logout } from '../../store/slice/authSlice';

export default function Home() {
  const navigate = useNavigate();
  // const dispatch = useDispatch();

  // const count = useSelector((state) => state.counter.value); 
  // const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  // const [countValue, setCountValue] = useState(0);

  return (
    <div className="flex items-center justify-center p-5 flex-col gap-5 h-full">
      <h1 className="text-4xl font-bold text-gray-700 font-roboto">
        Welcome to the blog
      </h1>

      <button
        type="button"
        className="p-2 bg-gray-200 rounded-lg cursor-pointer"
        onClick={() => navigate('/blog')}
      >
        Read my blog
      </button>

      <div className="flex items-center gap-3">
        {/* <input
          type="number"
          className="border rounded-xl"
          onChange={(e) => setCountValue(Number(e.target.value))}
          value={countValue}
        /> */}

        {/* <button
          type="button"
          className="p-1.5 bg-gray-200 rounded-lg cursor-pointer"
          onClick={() => dispatch(incrementByAmount(Number(countValue)))}
        >
          Add
        </button> */}

        {/* <button
          type="button"
          className="p-1.5 bg-gray-200 rounded-lg cursor-pointer"
          onClick={() => dispatch(resetCount())}
        >
          Reset
        </button> */}
      </div>

      {/* <button
        type="button"
        className="p-2 bg-gray-200 rounded-lg cursor-pointer"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>

      <p>{count}</p> */}

      {/* <button
        type="button"
        className="p-2 bg-gray-200 rounded-lg cursor-pointer"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button> */}

      {/* <h1>{isLoggedIn ? 'Welcome' : 'Please log in'}</h1>

      <button onClick={() => dispatch(login())}>Login</button>
      <button onClick={() => dispatch(logout())}>Logout</button> */}
    </div>
  );
}
