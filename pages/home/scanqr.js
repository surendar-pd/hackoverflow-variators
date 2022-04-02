import React, { useRef, useState } from "react";
import { QrReader } from "react-qr-reader";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import {useRouter} from 'next/router';
import Amount from "../../components/amount";


const ScanQr = ({setCurrentPage}) => {

  const router = useRouter();
  const qrRef = useRef(null);
  const [disabled, setDisabled] = useState(true)
  const [scanedResult, setScanedResult] = useState("");

  const onScanError = (err) => {
    console.log(err);
  };

  return (
    <div className="w-full h-screen p-4">
      {/* <div className="flex flex-col gap-4">
        <h1>Pay to FEDEN ID</h1>
        <input
          className="appearance-none border rounded w-full p-2 h-12 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline focus:border-[#008037]"
          placeholder="example@okfeden"
        />
        <button
          type="submit"
          className={`bg-[#008037] h-12 hover:shadow-lg rounded cursor-pointer text-white text-lg hover:bg-[#02421d] w-full`}
        ><span className='font-normal'>Continue</span></button>
        <button
          type="submit"
          className={`h-12 shadow rounded cursor-pointer text-lg hover:bg-[#02421d] w-full`}
        ><span className='font-normal'>Scan QR</span></button>
      </div> */}
      {
        scanedResult === "" ?

      <div>
        <div className="flex mb-4 items-center">
            <ArrowBackIosNewIcon onClick={() => router.push("/home")} className="text-lg"/>
            <h1 className="mx-2">Scan QR to Pay</h1>
        </div>
        <div className="w-full h-full">
          <QrReader
            videoContainerStyle={{borderRadius:"15%"}}
            containerStyle={{ height: "100px", width:"100%"}}
            ref={qrRef}
            onResult={(result, error) => {
              if (!!result) {
                setScanedResult(result?.text);
              }
              if (!!error) {
                console.log(error);
              }
            }}
          />
        </div>
      </div>
      : <Amount scanedResult={scanedResult} setScanedResult={setScanedResult}/>
      }
    </div>
  );
};

export default ScanQr;
