import Head from "next/head";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, signOut } from "../utils/firebase";
import { useRouter } from "next/router";

export default function Home() {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen justify-center items-center">
      <Head>
        <title>HackOverflow</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Landing Page</h1>
      {user ? (
        <div>
          <button className="bg-black-200 text-white-200 p-5">
            View Dashboard
          </button>
          <button
            onClick={() => {
              signOut(auth);
            }}
            className="bg-black-200 text-white-200 p-5"
          >
            Sign Out
          </button>
        </div>
      ) : (
        <button
          onClick={() => router.push("/auth/login")}
          className="bg-black-200 text-white-200 p-5"
        >
          Login
        </button>
      )}
    </div>
  );
}
