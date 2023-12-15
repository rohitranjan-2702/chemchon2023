"use client";
import useAuthentication from "@/components/useAuth";
import React from "react";

const page = (props) => {
  useAuthentication();
  console.log(props.params.slug);

  const userEmail = props.params.slug;
  return <div>Data: {userEmail}</div>;
};

export default page;
