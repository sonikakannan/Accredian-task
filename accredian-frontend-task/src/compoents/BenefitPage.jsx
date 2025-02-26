import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { FaGraduationCap } from "react-icons/fa";

const BenefitPage = () => {
  const benefits = [
    "PRODUCT MANAGEMENT",
    "STRATEGY & LEADERSHIP",
    "BUSINESS MANAGEMENT",
    "FINTECH",
    "SENIOR MANAGEMENT",
    "DATA SCIENCE",
    "DIGITAL TRANSFORMATION",
    "BUSINESS ANALYTICS",
  ];

  const programs = [
    {
      name: "Professional Certificate Program in Product Management",
      referrerBonus: "7,000",
      referralBonus: "9,000",
    },
    {
      name: "PG Certificate Program in Strategic Product Management",
      referrerBonus: "10,000",
      referralBonus: "11,000",
    },
    {
      name: "Executive Program in Data Driven Product Management",
      referrerBonus: "10,000",
      referralBonus: "10,000",
    },
    {
      name: "Executive Program in Product Management and Digital Transformation",
      referrerBonus: "10,000",
      referralBonus: "10,000",
    },
    {
      name: "Advanced Certification in Product Management",
      referrerBonus: "10,000",
      referralBonus: "10,000",
    },
    {
      name: "Executive Program in Product Management and Project Management",
      referrerBonus: "10,000",
      referralBonus: "10,000",
    },
  ];

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold text-center py-5">
        What Are The <span className="text-blue-500">Referral Benefits?</span>
      </h1>
      <div className="flex flex-col md:flex-row gap-4 py-5">
        {/* Left Section - Benefits List */}
        <div className="md:w-1/3 flex flex-col rounded-md px-5 shadow-md bg-white h-full min-h-[400px]">
          <p className="bg-blue-500 text-white text-lg font-semibold flex items-center justify-between px-4 py-2 rounded-md">
            ALL PROGRAMS <FaAngleRight />
          </p>
          <div className="flex-1 overflow-auto">
            {benefits.map((benefit, index) => (
              <p
                key={index}
                className="text-gray-700 text-lg font-semibold flex items-center justify-between px-4 py-2 border-b border-gray-300"
              >
                {benefit} <FaAngleRight />
              </p>
            ))}
          </div>
        </div>

        {/* Right Section - Referral Table */}
        <div className="md:w-2/3 flex flex-col rounded-md px-5   h-full min-h-[400px]">
          <table className="w-full rounded-md border-collapse border border-gray-300">
            <thead className="bg-blue-300 text-blue-500 font-semibold">
              <tr>
                <th className="px-5 py-2 text-left">Program</th>
                <th className="px-5 py-2">Referrer Bonus</th>
                <th className="px-5 py-2">Referral Bonus</th>
              </tr>
            </thead>
            <tbody>
              {programs.map((program, index) => (
                <tr key={index} className="border-b border-gray-300">
                  <td className="px-5 py-3 flex items-center gap-2">
                    <FaGraduationCap className="text-blue-500 w-7 h-7" />
                    {program.name}
                  </td>
                  <td className="px-5 py-3 text-center">{program.referrerBonus}</td>
                  <td className="px-5 py-3 text-center">{program.referralBonus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BenefitPage;
