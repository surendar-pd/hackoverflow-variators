import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import {
  auth,
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
  setDoc, doc, db
} from "../../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import toast, { Toaster } from "react-hot-toast";
import Image from "next/image";
import logo from "../../assets/Logo.png";
import QRCode from 'qrcode'


const SignUp = () => {
  const router = useRouter();
  const [user, loading] = useAuthState(auth);

  const [entries, setEntries] = useState({
    name: "",
    avatar: "",
    dob: "",
    email: "",
    password: "",
  });



  const onSignUp = (e) => {
    e.preventDefault();
    if (entries.email || entries.password || entries.name || entries.dob) {
      createUserWithEmailAndPassword(auth, entries.email, entries.password)
        .then((userCredentials) => {
          const user = userCredentials.user;
          updateProfile(auth.currentUser, {
            displayName: entries.name,
            photoURL: entries.avatar,
          })
            .then(() => {
              QRCode.toDataURL(user.uid)
  .then(url => {
    sendEmailVerification(auth.currentUser);
              setDoc(doc(db, "users", user.uid),{
                name: entries.name,
                qrcode: url,
                dob: entries.dob,
                email: entries.email,
                avatar: entries.avatar,
                uid: user.uid,
                pin: false,
                fedenid: entries.email.split("@")[0] + "@okfeden",
                balance: "10000",
              },{merge: true}).then(() => {
                
                router.replace("/auth/verification")
              }).catch(err => toast.error(err.message));
  })
  .catch(err => {
    console.error(err)
  })
              


            })
            .catch((error) => {
              toast.error(error.message);
            });
        })
        .catch((error) => {
          toast.error(error.message);
        });
    } else {
      toast.error("Fileds cannot be empty");
    }
  };

  return (
    <div className="bg-white font-family-karla h-screen">
      <Toaster position="top-left" reverseOrder={true} />
      <Head>
        <title>Sign Up</title>
      </Head>
      <div className="w-full flex flex-wrap">
        <div className="w-1/2 shadow-2xl">
          <img
            alt="pic"
            className="object-cover w-full h-screen hidden md:block"
            src="https://images.unsplash.com/photo-1617634667039-8e4cb277ab46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mjl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col">
          <div className="flex justify-center md:justify-end pt-12 md:pr-12 md:-mb-5">
            <Image
              onClick={() => router.push("/")}
              width="40px"
              height="40px"
              src={logo}
              alt="logo"
            />
          </div>

          <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
            <p className="text-center text-3xl">Sign Up</p>
            <form className="flex flex-col pt-3 md:pt-8">
              <div className="flex flex-col pt-4">
                {/* <label className="text-lg">Profile Pic URL</label> */}
                <input
                  type="text"
                  value={entries.avatar}
                  onChange={(e) =>
                    setEntries({ ...entries, avatar: e.target.value })
                  }
                  placeholder="https://example.com/avatar.png"
                  className="h-12 focus:border-[#008037] appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="flex flex-col pt-4">
                {/* <label className="text-lg">Name</label> */}
                <input
                  type="name"
                  value={entries.name}
                  onChange={(e) =>
                    setEntries({ ...entries, name: e.target.value })
                  }
                  placeholder="Your Name"
                  className="h-12 focus:border-[#008037] appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="flex flex-col pt-4">
                {/* <label className="text-lg">Date of Birth</label> */}
                <input
                  type="date"
                  value={entries.dob}
                  onChange={(e) =>
                    setEntries({ ...entries, dob: e.target.value })
                  }
                  placeholder="dd/mm/yyyy"
                  className="h-12 focus:border-[#008037] appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="flex flex-col pt-4">
                {/* <label className="text-lg">Email</label> */}
                <input
                  type="email"
                  value={entries.email}
                  onChange={(e) =>
                    setEntries({ ...entries, email: e.target.value })
                  }
                  placeholder="Email Address"
                  className="h-12 focus:border-[#008037] appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div className="flex flex-col pt-4">
                {/* <label className="text-lg">Password</label> */}
                <input
                  type="password"
                  value={entries.password}
                  onChange={(e) =>
                    setEntries({ ...entries, password: e.target.value })
                  }
                  placeholder="Password"
                  className="h-12 focus:border-[#008037] appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <button
                type="submit"
                value="Create Account"
                onClick={onSignUp}
                className={`bg-[#008037] h-12 rounded focus:border-[#008037] -lg cursor-pointer text-white font-bold text-lg hover:bg-[#02421d] p-2 mt-8`}
              >
                <span className="font-semibold">Next</span>
              </button>
            </form>

            <div className="text-center pt-12 pb-12">
              <p>
                Already have an Account?{" "}
                <span
                  className={`text-[#008037] cursor-pointer hover:text-[#02421d] font-bold`}
                  onClick={() => router.push("/auth/login")}
                >
                  Sign In
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
