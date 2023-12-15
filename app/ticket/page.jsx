"use client";
import useAuthentication from "@/components/useAuth";
import React from "react";

const page = (props) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const accessToken = localStorage.getItem("user");
      if (accessToken == null || accessToken == undefined) {
        router.push("/");
      }
    }
  }, [router]);
  console.log(props.params.slug);

  const userEmail = props.params.slug;
  return <div>Data: {userEmail}</div>;
};

export default page;
