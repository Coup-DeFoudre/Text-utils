import React from "react";

export default function Login() {
  return (
    <>
      <div className="w-[100vw] h-[94.6vh] flex justify-center items-start bg-slate-900 ">
        <form className=" space-y-5 border-2 border-blue-900 p-5 rounded-lg max-h-fit bg-green-200 mt-24">
          <h1 className="text-3xl font-bold text-black">Welcome Back!</h1>
          <div className="username font-bold text-black">
            <label htmlFor="username">Username</label><br />
            <input
            className="text-black font-black rounded-md h-10 p-2"
              type="text"
              id="username"
              name="username"
              placeholder="Enter Username"
              autoComplete="off"
              required
            />
          </div>
          <div className="password font-bold text-black">
            <label htmlFor="password">Password</label><br />
            <input
            className=" text-black font-black rounded-md h-10 p-2"
              type="password"
              id="password"
              name="password"
              placeholder="Enter Password"
              required
            />
          </div>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded max-w-fit'>
            Log In
        </button>
        </form>
      </div>
    </>
  );
}
