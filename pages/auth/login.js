import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import {
  auth,
  signInWithEmailAndPassword,
} from "../../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import toast, { Toaster } from "react-hot-toast";
import logo from '../../assets/Logo.png'
import Image from "next/image";

const Login = () => {
  const router = useRouter();
  const [user, loading] = useAuthState(auth);
  const [entries, setEntries] = useState({
    email: "",
    password: "",
  });
  useEffect(() => {
    // if (!user?.emailVerified) {
    //   router.push("/auth/verification");
    // }
    if(user){
      router.push("/home");
    }
  }, [user]);
  const onLogin = (e) => {
    e.preventDefault();
    if (entries.email || entries.password) {
      signInWithEmailAndPassword(auth, entries.email, entries.password)
        .then(() => {
          toast.success("Logged in Successfully !!")
        })
        .catch((err) => {
          toast.error(err.message);
        });
    } else {
      toast.error("Fileds cannot be empty");
    }
  };

  return (
    <div className="bg-white font-family-karla h-screen">
      <Toaster position="top-right" reverseOrder={true} />
      <Head>
        <title>Login</title>
      </Head>
      <div className="w-full flex flex-wrap">
        <div className="w-full md:w-1/2 flex flex-col">
          <div className="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-24">
            <Image width="40px" height="40px" src={logo} alt="logo"/>
          </div>
          <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
            <p className="text-center text-3xl">FEDEN</p>
            <form className="flex flex-col pt-3 md:pt-8">
              <div className="flex flex-col pt-4">
                {/* <label className="text-lg">Email</label> */}
                <input
                  type="email"
                  placeholder="Email Address"
                  value={entries.email}
                  onChange={(e) =>
                    setEntries({ ...entries, email: e.target.value })
                  }
                  className="appearance-none border rounded w-full py-2 px-3 h-12 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline focus:border-[#008037]"
                />
              </div>

              <div className="flex flex-col pt-4">
                {/* <label className="text-lg">Password</label> */}
                <input
                  type="password"
                  placeholder="Password"
                  value={entries.password}
                  onChange={(e) =>
                    setEntries({ ...entries, password: e.target.value })
                  }
                  className="appearance-none border rounded w-full py-2 px-3 h-12 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline focus:border-[#008037]"
                />
              </div>
              <button
                type="submit"
                value="Log In"
                onClick={onLogin}
                className={`bg-[#008037] hover:shadow-lg rounded cursor-pointer text-white font-bold text-lg hover:bg-[#02421d] p-2 mt-8`}
              ><span className='font-normal'>Log In</span></button>
            </form>
            <div className="text-center py-8">
              <p className="">
                Don&apos;t have an account?&nbsp;
                <span
                  className={`text-[#008037] cursor-pointer hover:text-[#02421d]`}
                  onClick={() => router.push("/auth/signup")}
                >
                  Sign Up
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="w-1/2 shadow-2xl">
          <img
            className="object-cover w-full h-screen hidden md:block"
            src="https://images.unsplash.com/photo-1506634064465-7dab4de896ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
