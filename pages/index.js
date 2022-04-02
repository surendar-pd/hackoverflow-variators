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

export default function Home() {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();

  return (
    <div>
    <div>
      <Head>
        <title>HackOverflow</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="navbar navbar-expand-md navbar-dark bg-green-500">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <Image src={logo} alt="" width={40} height={34} />
          </a>

          
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 flex-row font-medium text-lg text-white lg:font-bold ">
              <li className="nav-item mr-5 ">
                <Link
                  className="nav-link active navcontents"
                  aria-current="page"
                  href="/"
                >
                <div className="home text-xs"> HOME </div>
                </Link>
              </li>
              
              <li className="nav-item">
                <Link
                  className="nav-link active navcontents"
                  aria-current="page"
                  href="#Content"
                >
                <div className="features text-xs"> FEATURES </div> 
                </Link>
              </li>
            </ul>
          
            <ul className="navbar-nav flex-row flex-right font-medium text-lg mr-2 text-white lg:font-bold">
              <li className="nav-item">
                <Link
                  className="nav-link active navcontents "
                  aria-current="page"
                  href="/auth/login"
                >
                <div className="getstarted text-xs"> GET STARTED </div>
                </Link>
              </li>

            </ul>
          </div>
          
  
      </nav>

      <div className="Banner">
        <Image src={CashApp} alt={'cash-app'}/>
      </div>

      
        <div className="Content1 my-4 p-4 lg:mx-7 lg:text-center my-12" id="Content">
          <div className="text-lg text-center  font-bold lg:text-4xl lg:mb-2 lg:mt-6 lg:float-left lg:w-1/2 hover:-translate-y-5 transform transition ">SPEND NOW PAY LATER
          <p className="text-sm text-left lg:text-xl text-green-500 lg:w-1/2 lg:my-7 lg:mx-12">
            THE PLATFORM TO HELP YOU BUT THE THINGS YOU ALWAYS WANTED TO, WITH THE
            SPEND NOW PAY LATER FEATURE
          </p>
          </div>
          
          <Image
            src={Asset1}
            className="image1"
            alt=""
            width={400}
            height={400}
          />
        </div>

        <div className="Content2 mx-7  text-center my-12">
          <div className="Heading2 text-lg  text-center font-bold lg:text-4xl lg:mb-2 lg:mt-3 lg:float-right lg:w-1/2 hover:-translate-y-5 transform transition">BUDGET MANAGEMENT
          <p className="text-sm text-left lg:text-xl text-green-500 lg:w-1/2 lg:my-7 lg:mx-12">
            A PLATFORM TO HELP YOU HAVE A TRACK ON YOUR EXPENDITURE AND HELP YOU
            SAVE MONEY
          </p>
          </div>
          <Image
            src={Budget}
            className="image2 mt-5"
            alt=""
            width={250}
            height={250}
          />
        </div>

        
        <div className="Content3 my-4 mx-7 ">
          <div className="text-lg text-center font-bold lg:text-4xl lg:mb-2 lg:mt-3 lg:float-left hover:-translate-y-5 transform transition">SPILT & PAY
          <p className="text-sm text-left lg:text-xl text-green-500 lg:w-1/2 lg:my-12 ">
            A PLATFORM WHERE APART FROM DIGITALLY PAYING, YOU CAN ALSO SPILT THE
            BILL
          </p>
          </div>
          <Image
            src={splitpay}
            className="image3  mx-4 mt-3"
            alt=""
            width={300}
            height={300}
            
          />
        </div>
      </div>
        <div className="footer bg-green-300 text-center font-bold">
        TEAM Variator
        </div>
     

    </div>
  );
}
