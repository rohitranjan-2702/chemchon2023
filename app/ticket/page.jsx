"use client";
import useAuthentication from "@/utils/useAuth";
import React, { useEffect } from "react";

const page = () => {
  useAuthentication();
  return <div>Data: </div>;
};

export default page;
