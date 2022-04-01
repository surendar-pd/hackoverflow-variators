import React, { useRef, useState } from "react";
import { QrReader } from "react-qr-reader";

const ScanQr = () => {
  const qrRef = useRef(null);
  const [scanedResult, setScanedResult] = useState("");

  const onScanError = (err) => {
    console.log(err);
  };

  return (
    <div>
      <QrReader
        style={{ width: "50%" }}
        ref={qrRef}
        onResult={(result, error) => {
          if (!!result) {
            setScanedResult(result?.text);
          }

          if (!!error) {
            console.info(error);
          }
        }}
      />
      {scanedResult}
    </div>
  );
};

export default ScanQr;
