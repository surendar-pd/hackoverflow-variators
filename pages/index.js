import Head from "next/head";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, signOut } from "../utils/firebase";
import { useRouter } from "next/router";
import Image from "next/image";
import logo from "../assets/Logo.png";
import CashApp from "../assets/CashApp.svg";
import splitpay from "../assets/splitpay.svg";
import Budget from "../assets/Budget.svg";
import Asset1 from "../assets/Asset1.svg";
import Link from "next/link";
// import "bootstrap/dist/js/bootstrap.js";
// import 'https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500&display=swap'
export default function Home() {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();

  return (
    <div 
    // className="font-Montserrat"
    >
      <Head>
        <title>HackOverflow</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <Image src={logo} alt="" width={40} height={34} />
          </a>

          {/* <div> */}
            <ul className="flex-row navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item mr-3">
                <Link
                  className="nav-link active navcontents"
                  aria-current="page"
                  href="/"
                >
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active navcontents"
                  aria-current="page"
                  href="/auth/login"
                >
                  SIGN IN
                </Link>
              </li>
            </ul>
          {/* </div> */}
        </div>
      </nav>

      <div className="Banner">
        <Image src={CashApp} alt={'cash-app'}/>
      </div>

      <div className="p-4">
        <div className="Content1 my-4">
          <h1 className="text-lg text-center font-bold">SPEND NOW PAY LATER</h1>
          <p className="text-sm text-center">
            THE PLATFORM TO HELP YOU BUT THE THINGS YOU ALWAYS WANTED TO, WITH THE
            SPEND NOW PAY LATER FEATURE
          </p>
          <Image
            src={Asset1}
            className="image1"
            alt=""
            width={250}
            height={250}
          />
        </div>

        <div className="Content2 my-4">
          <h1 className="text-lg text-center font-bold">BUDGET MANAGEMENT</h1>
          <p className="text-sm text-center">
            A PLATFORM TO HELP YOU HAVE A TRACK ON YOUR EXPENDITURE AND HELP YOU
            SAVE MONEY
          </p>
          <Image
            src={Budget}
            className="image2"
            alt=""
            width={250}
            height={250}
          />
        </div>


        <div className="Content3 my-4">
          <h1 className="text-lg text-center font-bold">SPILT & PAY</h1>
          <p className="text-sm text-center">
            A PLATFORM WHERE APART FROM DIGITALLY PAYING, YOU CAN ALSO SPILT THE
            BILL
          </p>
          <Image
            src={splitpay}
            className="image3"
            alt=""
            width={250}
            height={250}
          />
        </div>
      </div>

    </div>
  );
}
