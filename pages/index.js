import Head from "next/head";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, signOut } from "../utils/firebase";
import { useRouter } from "next/router";
import Image from "next/image";
import logo from "../assets/Logo.png";
import CashApp from "../assets/CashApp.svg";
import splitpay from "../assets/splitpay.svg";
import Budget from "../assets/Budget.svg";
// import "bootstrap/dist/js/bootstrap.js";

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
            <Image src={logo} alt="" width={40} height={34} />
          </a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active navcontents"
                  aria-current="page"
                  href="#"
                >
                  HOME
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active navcontents"
                  aria-current="page"
                  href="#"
                >
                  SIGN IN
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="Banner">
        <Image src={CashApp} />
      </div>

      <div className="Content1">
        SPEND NOW PAY LATER
        <p>
          THE PLATFORM TO HELP YOU BUT THE THINGS YOU ALWAYS WANTED TO, WITH THE
          SPEND NOW PAY LATER FEATURE
        </p>
        <Image
          src={splitpay}
          className="image1"
          alt=""
          width={125}
          height={120}
        />
      </div>
      <div className="Content2">
        BUDGET MANAGEMENT
        <p>
          A PLATFORM TO HELP YOU HAVE A TRACK ON YOUR EXPENDITURE AND HELP YOU
          SAVE MONEY
        </p>
        <Image
          src={splitpay}
          className="image2"
          alt=""
          width={125}
          height={120}
        />
      </div>
      <div className="Content3">
        SPLIT & PAY
        <p>
          A PLATFORM WHERE APART FROM DIGITALLY PAYING, YOU CAN ALSO SPILT THE
          BILL
        </p>
        <Image
          src={Budget}
          className="image3"
          alt=""
          width={125}
          height={120}
        />
      </div>
    </div>
  );
}
