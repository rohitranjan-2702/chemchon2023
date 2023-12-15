"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function useAuthentication() {
  const router = useRouter();
  useEffect(() => {
    if (typeof window !== "undefined") {
      const accessToken = localStorage.getItem("user");
      if (accessToken == null || accessToken == undefined) {
        router.push("/");
      }
    }
  }, [router]);
}
