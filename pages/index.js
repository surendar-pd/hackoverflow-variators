import Head from "next/head";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, signOut } from "../utils/firebase";
import { useRouter } from "next/router";
import Logo from "assets/Logo.png";

export default function Home() {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();

  return (
    <div className="">
      <Head>
        <title>HackOverflow</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="assets/Logo.png" alt="" width="50" height="44" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active navcontents"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <img src="images/Cash App.svg" alt="Banner page" />
    </div>
  );
}
