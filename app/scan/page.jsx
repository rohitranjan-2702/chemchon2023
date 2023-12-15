"use client";
import React, { useState, useRef } from "react";

import QrReader from "react-qr-reader";
function Scan() {
  const [scanResultFile, setScanResultFile] = useState("");
  const [scanResultWebCam, setScanResultWebCam] = useState("");
  const qrRef = useRef(null);
  const [data, setData] = useState("null");

  const handleErrorFile = (error) => {
    console.log(error);
  };
  const handleScanFile = (result) => {
    if (result) {
      setScanResultFile(result);
    }
  };
  const onScanFile = () => {
    qrRef.current.openImageDialog();
  };
  const handleErrorWebCam = (error) => {
    console.log(error);
  };
  const handleScanWebCam = (result) => {
    if (result) {
      setScanResultWebCam(result);
    }
  };
  return (
    <div className="h-screen flex justify-center w-full">
      <div>Qr Code Scan by Web Cam</div>
      <div className="h-1/2 w-1/2">
        <QrReader
          delay={300}
          style={{}}
          onError={handleErrorWebCam}
          onScan={handleScanWebCam}
        />
      </div>

      <h3>Scanned By WebCam Code: {scanResultWebCam}</h3>

      <p>{data}</p>
    </div>
  );
}

export default Scan;
