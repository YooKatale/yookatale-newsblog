"use client";

import React, { useState } from "react";

import Input from "@components/widgets/Input";
import Button from "@components/widgets/Button";
import Service from "@lib/atoms/service";
import { ROUTES } from "@lib/atoms/routes";
import { FaSpinner } from "react-icons/fa";

interface Props {
  callback: (param: boolean) => void;
}

const Subscribe = (props: Props) => {
  const [email, setEmail] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleNewsletterSubmit = async () => {
    setIsLoading((prevState) => (prevState ? false : true));
    try {
      const res = await Service.post(`${ROUTES.NEWSLETTER}`, { email });

      setIsLoading((prevState) => (prevState ? false : true));

      if (res?.status == "Success") {
        setResponse("Success");

        setTimeout(() => {
          setResponse("");
          setEmail("");

          props.callback(true);
        }, 3000);
      }
    } catch (error) {
      setIsLoading((prevState) => (prevState ? false : true));
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  return (
    <div className="lg:w-[50%] fixed z-50 bottom-[10%] lg:bottom-[5%] sm:w-[85%] md:[65%] ">
      <div className="lg:px-20 lg:py-10 text-white rounded-lg bg-black">
        <div className="py-6">
          <p className="w-full text-center text-xl font-semibold my-0">
            Freely signup for our newsletter
          </p>
          <p className="text-center text-gray-400 my-0">
            To receive news updates & insightful articles, promotions & the best
            best offers
          </p>
        </div>

        <div className="flex items-center lg:flex-row flex-col gap-2 py-4 lg:p-0 justify-center">
          <Input
            placeholder="Enter your email here"
            inputType="text"
            className="py-2 px-4 rounded-md focus:ring-0 border w-full border-gray-500 outline-none focus:border-gray-400 text-black"
            handleChange={handleChange}
          />
          <Button
            className="py-2 px-4 rounded-md border border-gray-400 hover:bg-gray-900 transition-all focus:ring-0 duration-100 ease-in-out"
            onClick={handleNewsletterSubmit}
          >
            {isLoading ? <FaSpinner /> : <span>Subscribe</span>}
          </Button>
        </div>

        {response !== "" && (
          <div className="py-2">
            <div className="flex justify-center items-center">
              <div className="w-fit py-2 px-6 bg-white rounded-md">
                <p className="text-center text-green-600 text-lg">{response}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Subscribe;
