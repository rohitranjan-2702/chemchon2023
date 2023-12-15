"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import QrReader from "react-qr-reader";
import useAuthentication from "@/components/useAuth";
function Scan() {
  useAuthentication();
  const [data, setData] = useState("No Result");
  const router = useRouter();
  const handleErrorWebCam = (error) => {
    console.log(error);
    alert(error);
    router.refresh();
  };
  const handleScanWebCam = (result) => {
    if (result) {
      setData(result);
      console.log(result);
      const email = JSON.parse(result)?.email;
      console.log(JSON.parse(result));
      if (!email) {
        alert("Invalid QR Code");
        return;
      }
      router.push(`/ticket`);
      localStorage.setItem("userEmail", email);
    }
  };
  return (
    <div className="h-screen flex flex-col items-center justify-center w-full space-y-4">
      <div className="text-3xl ">QR Scanner</div>
      <div className=" h-1/2 w-1/2">
        <QrReader
          delay={300}
          style={{ width: "100%" }}
          onError={handleErrorWebCam}
          onScan={handleScanWebCam}
          onLoad={console.log(`loaded`)}
        />
      </div>

      <h3 className="text-[12px]">Made by devs @GDSC HITK</h3>
    </div>
  );
}

export default Scan;
