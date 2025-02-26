import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { PiNotepadFill } from "react-icons/pi";
import { GiWallet } from "react-icons/gi";

const steps = [
  {
    icon: <FaUserPlus className="text-blue-500 w-10 h-10" />,
    text: "Submit referrals easily via our website's referral section.",
  },
  {
    icon: <PiNotepadFill className="text-blue-500 w-10 h-10" />,
    text: "Earn rewards once your referral joins an Accredian program.",
  },
  {
    icon: <GiWallet className="text-blue-500 w-10 h-10" />,
    text: "Referrer receives a bonus 30 days after program enrollment.",
  },
];

const HowToRefer = () => {
  return (
    <section className="bg-blue-100 py-10">
      <div className="text-center">
        <h1 className="text-2xl font-bold">
          How Do I <span className="text-blue-500">Refer?</span>
        </h1>

        <div className="flex flex-col md:flex-row justify-center items-center gap-5 md:gap-10 mt-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col justify-center items-center text-center w-56 h-56 md:w-64 md:h-64 rounded-full shadow-xl bg-blue-50 px-4">
              <div className="flex justify-center items-center">
                {step.icon}
              </div>
              <p className="mt-3 max-w-xs text-gray-700  font-semibold">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToRefer;
