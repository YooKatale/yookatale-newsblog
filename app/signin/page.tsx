"use client";
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { MdStar } from "react-icons/md";
import { useRecoilState } from "recoil";
import Link from "next/link";
import { useRouter } from "next/navigation";

import Button from "@components/widgets/Button";
import Input from "@components/widgets/Input";
import { isLoggedInState, isLoggedInStorageKey } from "@lib/atoms";
import { ROUTES } from "@lib/atoms/routes";
import Service from "@lib/atoms/service";

const Signin = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState("");
  const [isLoading, setisLoading] = useState(false);

  const router = useRouter();

  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInState);

  const handleLogin = async () => {
    try {
      if (
        (email !== "" || email !== undefined || email !== null) &&
        (password !== "" || password !== undefined || password !== null)
      ) {
        const res = await Service.post(ROUTES.LOGIN, {
          email,
          password,
        });

        setIsLoggedIn(false);

        if (res.status === 200 || res._id) {
          typeof window !== "undefined" &&
            localStorage.setItem(isLoggedInStorageKey, JSON.stringify(res));
          setIsLoggedIn(true);
          router.push("/");
        }
      }
    } catch (err) {}
  };

  return (
    <div className="w-full py-10">
      <div className="w-10/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 ">
        <img
          src="https://ik.imagekit.io/2ujnunod7moo/Login%20Page%20(Community)/unsplash_bRdRUUtbxO0_MPrcclwuL.png?updatedAt=1690569220219"
          alt="yookatale"
          className="w-full opacity-70 h-60 rounded-2xl lg:h-[700px] object-cover"
        />

        <div className="space-y-10 flex flex-col py-10">
          <p className="text-4xl font-semibold">Welcome back,</p>
          <p className="w-full lg:w-4/6 text-gray-700">
            To continue your journey with us, simply log in using your existing
            credentials. If you are new here, creating an account is quick and
            easy.
          </p>

          <div className="w-full lg:w-4/6 space-y-7">
            <div className="flex flex-col gap-1">
              <p className="flex gap-1">
                <span className="text-gray-500 text-sm font-medium">Email</span>
                <MdStar className="text-xs text-gray-500" />
              </p>
              <Input
                inputType="text"
                className="py-2 w-full px-4 border border-gray-300 rounded-lg outline-none"
                placeholder="Enter your email"
                value={email}
                handleChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-1">
              <p className="flex gap-1">
                <span className="text-gray-500 text-sm font-medium">
                  Password
                </span>
                <MdStar className="text-xs text-gray-500" />
              </p>
              <Input
                inputType="password"
                className="py-2 w-full px-4 border border-gray-300 rounded-lg outline-none"
                placeholder="Enter your password"
                value={password}
                handleChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center w-full justify-end">
                <Link href="/" className="text-blue-700 text-sm">
                  Forgot password?
                </Link>
              </div>
              <Button
                className="py-2 text-lg font-medium text-gray-100 focus:ring-0 rounded-lg bg-gray-900 w-full"
                onClick={handleLogin}
              >
                {isLoading === true ? (
                  <span className="animate-pulse text-xl">...</span>
                ) : (
                  <span>Login</span>
                )}
              </Button>
            </div>
          </div>
          <div className="w-full lg:w-4/6 border-t border-gray-300 " />

          <div className="flex justify-center gap-2 w-full lg:w-4/6">
            <p>Don't have an account?</p>
            <Link href="/signup" className="text-blue-700">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
