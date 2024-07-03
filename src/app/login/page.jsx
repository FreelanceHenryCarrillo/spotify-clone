"use client";
import { signIn } from "next-auth/react";
import React from "react";
const Login = () => {
  return (
    <div className="w-full  flex items-center justify-center">
      <button onClick={() => signIn("spotify", { callbackUrl: "/" })} className="text-2xl text-white p-5 bg-green-600 rounded-xl">
        Login with spotify
      </button>
    </div>
  );
};

export default Login;