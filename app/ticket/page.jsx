"use client";
import useAuthentication from "@/utils/useAuth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Ticket = () => {
  useAuthentication();

  const [data, setData] = useState(null);
  const router = useRouter();

  const fetchData = async (email) => {
    const res = await fetch(
      "https://chemcon-backend.onrender.com/api/check-email",
      {
        method: "POST",
        body: JSON.stringify({
          data: {
            email: email,
          },
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const result = await res.json();
    console.log(result);
    setData(result?.data);
  };

  const checkIn1 = async (email) => {
    const res = await fetch(
      "https://chemcon-backend.onrender.com/onspot/check1",
      {
        method: "POST",
        body: JSON.stringify({
          data: {
            email: email,
          },
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const result = await res.json();
    console.log(result);
    setData(result?.data);
    router.refresh();
  };

  const checkIn2 = async (email) => {
    const res = await fetch("https://chemcon-backend.onrender.com/api/check2", {
      method: "POST",
      body: JSON.stringify({
        data: {
          email: email,
        },
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await res.json();
    console.log(result);
    setData(result?.data);
    router.refresh();
  };

  const checkIn3 = async (email) => {
    const res = await fetch("https://chemcon-backend.onrender.com/api/check3", {
      method: "POST",
      body: JSON.stringify({
        data: {
          email: email,
        },
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await res.json();
    console.log(result);
    setData(result?.data);
    router.refresh();
  };

  useEffect(() => {
    const email = localStorage.getItem("userEmail");
    if (!email) {
      alert("Invalid QR Code");
      router.push("/scan");
      return;
    }
    fetchData(email);

    return () => {
      localStorage.removeItem("userEmail");
    };
  }, []);

  return (
    <>
      <div class="flex flex-col items-center justify-center p-10 ">
        <h1 className="text-3xl mb-10">Attendee Ticket</h1>
        <div class="max-w-sm rounded-lg border border-gray-200 bg-white shadow :border-gray-700 :bg-gray-800">
          <a href="#">
            <img class="rounded-t-lg max-w-sm" src={data?.Url} alt="" />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 :text-white">
                {data?.Name}
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 :text-gray-400">
              Email: {data?.Email}
            </p>
            <p class="mb-3 font-normal text-gray-700 :text-gray-400">
              Mobile: {data?.Mobile}
            </p>

            <p class="mb-3 font-normal text-gray-700 :text-gray-400">
              Kit: {data?.Kit}
            </p>
            <p class="mb-3 font-normal text-gray-700 :text-gray-400">
              Category: {data?.Category}
            </p>
            <button
              href="#"
              class="inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 :bg-blue-600 :hover:bg-blue-700 :focus:ring-blue-800"
              disabled={data?.checkin1}
              onClick={checkIn1}
            >
              Day 1 CheckIn
              <svg
                class="ms-2 h-3.5 w-3.5 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
            {/* TODO resolve chechIn */}
            {/* <div className="flex flex-row gap-3">
              
              <button
                href="#"
                class="inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 :bg-blue-600 :hover:bg-blue-700 :focus:ring-blue-800"
                disabled={data?.checkin2}
                onClick={checkIn2}
              >
                Day 2 CheckIn
                <svg
                  class="ms-2 h-3.5 w-3.5 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </button>
              <button
                href="#"
                class="inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 :bg-blue-600 :hover:bg-blue-700 :focus:ring-blue-800"
                disabled={data?.checkin3}
                onClick={checkIn3}
              >
                Day 3 CheckIn
                <svg
                  class="ms-2 h-3.5 w-3.5 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </button>
            </div> */}
          </div>
        </div>
        <Link
          href="/scan"
          class="inline-flex items-center rounded-lg bg-red-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 :bg-blue-600 :hover:bg-blue-700 :focus:ring-blue-800 mt-8"
        >
          SCAN AGAIN
        </Link>
      </div>
    </>
  );
};

export default Ticket;
