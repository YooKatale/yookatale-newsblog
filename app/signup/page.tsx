/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Button from "@components/widgets/Button";
import Input from "@components/widgets/Input";
import Link from "next/link";
import React from "react";
import { MdStar } from "react-icons/md";

const Signup = () => {
  return (
    <div className="w-full py-10">
      <div className="w-10/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 ">
        <img
          src="https://ik.imagekit.io/2ujnunod7moo/Login%20Page%20(Community)/unsplash_QvkAQTNj4zk_WK0i5PZJj.png?updatedAt=1690569219151"
          alt="yookatale"
          className="w-full opacity-70 h-60 rounded-2xl lg:h-[700px] object-cover"
        />

        <div className="space-y-10 flex flex-col py-10">
          <p className="text-4xl font-semibold">Welcome,</p>
          <p className="w-full lg:w-4/6 text-gray-700">
            Signing up is quick and easy! Just fill out the form below, and
            you'll be part of our ever-growing family. Don't miss out on the
            latest updates and exclusive content.
          </p>

          <div className="w-full lg:w-4/6 space-y-7">
            <div className="flex flex-col gap-1">
              <p className="flex gap-1">
                <span className="text-gray-500 text-sm font-medium">
                  First name
                </span>
                <MdStar className="text-xs text-gray-500" />
              </p>
              <Input
                inputType="text"
                className="py-2 w-full px-4 border border-gray-300 rounded-lg outline-none"
                placeholder="Enter your First name"
              />
            </div>

            <div className="flex flex-col gap-1">
              <p className="flex gap-1">
                <span className="text-gray-500 text-sm font-medium">
                  Last name
                </span>
                <MdStar className="text-xs text-gray-500" />
              </p>
              <Input
                inputType="text"
                className="py-2 w-full px-4 border border-gray-300 rounded-lg outline-none"
                placeholder="Enter your Last name"
              />
            </div>

            <div className="flex flex-col gap-1">
              <p className="flex gap-1">
                <span className="text-gray-500 text-sm font-medium">
                  Phone number
                </span>
                <MdStar className="text-xs text-gray-500" />
              </p>
              <Input
                inputType="text"
                className="py-2 w-full px-4 border border-gray-300 rounded-lg outline-none"
                placeholder="Enter your Phone number"
              />
            </div>

            <div className="flex flex-col gap-1">
              <p className="flex gap-1">
                <span className="text-gray-500 text-sm font-medium">
                  First name
                </span>
                <MdStar className="text-xs text-gray-500" />
              </p>
              <select
                name="gender"
                className="py-2 w-full px-4 border border-gray-300 rounded-lg outline-none"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="flex flex-col gap-1">
              <p className="flex gap-1">
                <span className="text-gray-500 text-sm font-medium">Email</span>
                <MdStar className="text-xs text-gray-500" />
              </p>
              <Input
                inputType="text"
                className="py-2 w-full px-4 border border-gray-300 rounded-lg outline-none"
                placeholder="Enter your email"
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
              />
            </div>

            <Button
              title="Register"
              className="py-2 text-lg font-medium text-gray-100 rounded-lg bg-gray-900 w-full"
            />
          </div>
          <div className="w-full lg:w-4/6 border-t border-gray-300 " />

          <div className="flex justify-center gap-2 w-full lg:w-4/6">
            <p>Already have an account?</p>
            <Link href="/signin" className="text-blue-700">
              Log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
