import React from "react";
import { Job } from "@lib/interfaces";
import Button from "@components/widgets/Button";

const JobCard = ({
  _id,
  title,
  category,
  reportsTo,
  employment,
  employmentTerms,
  location,
  details,
  salary,
  condition,
  closingDate,
  setActiveJobId,
  activeId,
}: Job) => {
  return (
    <div className="border-b-2 rounded-md border-slate-100 py-4">
      <h3 className="text-2xl">{title}</h3>
      <div className="flex">
        <div className="mr-3">
          <p className="text-base">
            <span className="text-slate-700 font-bold">category:</span>{" "}
            {category}
          </p>
        </div>
        <div className="mr-3">
          <p className="text-base">
            <span className="text-slate-700 font-bold">reports to:</span>{" "}
            {reportsTo}
          </p>
        </div>
      </div>
      <div className="flex">
        <div className="mr-3">
          <p className="text-base">
            <span className="text-slate-700 font-bold">employment:</span>{" "}
            {employment}
          </p>
        </div>
        <div className="mr-3">
          <p className="text-base">
            <span className="text-slate-700 font-bold">employment terms:</span>{" "}
            {employmentTerms}
          </p>
        </div>
      </div>
      <div className="flex">
        <div className="mr-3">
          <p className="text-base">
            <span className="text-slate-700 font-bold">salary:</span> {salary}
          </p>
        </div>
        <div className="mr-3">
          <p className="text-base">
            <span className="text-slate-700 font-bold">location:</span>{" "}
            {location}
          </p>
        </div>
      </div>
      <div className="flex">
        <div className="mr-3">
          <p className="text-base">
            <span className="text-slate-700 font-bold">condition:</span>{" "}
            {condition}
          </p>
        </div>
      </div>
      <div className="py-4">
        <div className="mr-3">
          <p className="text-base">To Apply: Send resume info@yookatale.com</p>
        </div>
        <div className="mr-3">
          <p className="text-base">
            <span className="text-slate-700 font-bold">closing date:</span>{" "}
            {closingDate}
          </p>
        </div>
      </div>
      <div className="py-4">
        <Button
          className="bg-green-800 text-white p-2 rounded-md"
          onClick={() => setActiveJobId(_id)}
        >
          View details
        </Button>
      </div>
      <div className={`${activeId == _id ? "py-4" : "py-4 hidden"}`}>
        <div className="py-2">
          <h3 className="text-lg font-bold">Key Responsibilities</h3>
          <ul className="px-4">
            {details.responsibilities.map((item, index) => (
              <li key={index} className="my-1 list-disc">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="py-2">
          <h3 className="text-lg font-bold">Key Requirements</h3>
          <ul className="px-4">
            {details.requirements.map((item, index) => (
              <li key={index} className="my-1 list-disc">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
