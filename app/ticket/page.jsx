"use client";
import useAuthentication from "@/utils/useAuth";
import React, { useEffect } from "react";

const Ticket = () => {
  useAuthentication();
  return <div>Data: </div>;
};

export default Ticket;
