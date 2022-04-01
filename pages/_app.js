import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {
  return <div className="font-Montserrat bg-slate-100"><Component {...pageProps} /></div>;
}

export default MyApp;
