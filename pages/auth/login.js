import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import {
  auth,
  googleProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "../../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import toast, { Toaster } from "react-hot-toast";
import logo from '../../assets/Logo.png'
import Image from "next/image";

const login = () => {
  const router = useRouter();
  const [user, loading] = useAuthState(auth);
  const [entries, setEntries] = useState({
    email: "",
    password: "",
  });
  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, [user]);
  const onLogin = (e) => {
    e.preventDefault();
    if (entries.email || entries.password) {
      signInWithEmailAndPassword(auth, entries.email, entries.password)
        .then(() => {})
        .catch((err) => {
          toast.error(err.message);
        });
    } else {
      toast.error("Fileds cannot be empty");
    }
  };

  const onGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((user) => {
        console.log(user.displayName);
      })
      .catch(alert);
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
            {/* <span
              onClick={() => router.push("/")}
              className={`bg-[#008037] cursor-pointer hover:bg-[#02421d] text-white font-bold text-xl p-4`}
            >
              Logo
            </span> */}
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
              {/* <input
                type="submit"
                value="Log In"
                onClick={onLogin}
                className={`bg-[#008037] hover:shadow-lg rounded cursor-pointer text-white font-bold text-lg hover:bg-[#02421d] p-2 mt-8`}
              /> */}
              <button
                type="submit"
                value="Log In"
                onClick={onLogin}
                className={`bg-[#008037] hover:shadow-lg rounded cursor-pointer text-white font-bold text-lg hover:bg-[#02421d] p-2 mt-8`}
              ><h1 className='font-semibold'>Log In</h1></button>
            </form>
            <div className="btn-wrapper text-center mt-5">
              <p className="mb-2 text-grey-50">or</p>
              <button
                className="bg-white w-full active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md flex justify-center items-center text-xs ease-linear transition-all duration-150"
                type="button"
                onClick={onGoogleLogin}
              >
                <GoogleIcon className="w-5 mr-1" />
                <span className="">Google</span>
              </button>
            </div>
            <div className="text-center pt-12 pb-12">
              <p>
                Don't have an account?{" "}
                <span
                  className={`text-[#008037] cursor-pointer hover:text-[#02421d] font-bold`}
                  onClick={() => router.push("/auth/signup")}
                >
                  Register here.
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

export default login;
