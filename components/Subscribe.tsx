import React from "react";

import Input from "@components/widgets/Input";
import Button from "@components/widgets/Button";

const Subscribe = () => {
  return (
    <div className="lg:w-[50%] w-full fixed z-50 bottom-[5%]">
      <div className=" p-5 lg:p-20 text-white space-y-5 lg:space-y-10 rounded-lg bg-black">
        <p className="w-full text-center text-xl font-semibold">
          Hi, Upgrade your plan and read more article in YooKatale blog
        </p>
        <p className="text-center text-gray-400">
          Currently, you are in free member stories, upgrade your plan or
          subscribe to unlock many articles in YooKatale, enter yourn email to
          recieve our best offer
        </p>

        <div className="flex lg:items-center flex-col lg:flex-row gap-2 lg:justify-center">
          <Input
            placeholder="Enter your email here"
            inputType="text"
            className="py-2 px-4 rounded-md focus:ring-0 border w-full border-gray-500 outline-none focus:border-gray-400"
          />
          <Button className="py-2 px-4 rounded-md border border-gray-400 hover:bg-gray-900 transition-all focus:ring-0 duration-100 ease-in-out">
            <span>Subscribe</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
