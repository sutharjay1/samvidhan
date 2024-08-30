"use client";

import Blur from "@/components/ui/Blur";
import { useOptions } from "@/hooks/useOptions";
import { Options } from "@/type";
import { useRouter } from "next/navigation";
import React from "react";

function Preamble() {
  const router = useRouter();

  const { option, setOption } = useOptions();

  const handleClick = () => {
    setOption(Options.SOVEREIGN);
    router.push(`/c?option=${option}`);
  };

  return (
    <div
      className="max-w-3xl w-full mx-auto p-2 sm:p-4 md:p-6 lg:p-8 bg-amber-50"
      onClick={handleClick}
    >
      <div className="border-4 sm:border-8 border-amber-700 p-2 sm:p-4 md:p-6 lg:p-8">
        <div className="border-2 sm:border-4 border-amber-600 p-2 sm:p-4 md:p-6 lg:p-8">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-serif text-amber-800 text-center mb-3 sm:mb-6">
            THE CONSTITUTION OF INDIA
          </h1>
          <div className="text-center mb-3 sm:mb-6">
            <span className="inline-block w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-amber-700 rounded-full"></span>
          </div>
          <p className="text-sm sm:text-base md:text-lg font-serif text-amber-900 text-center mb-3 sm:mb-6">
            WE, THE PEOPLE OF INDIA, having solemnly resolved to constitute
            India into a <Blur blurStrength="lg">SOVEREIGN</Blur>{" "}
            <Blur blurStrength="lg">SOCIALIST</Blur>
            <Blur blurStrength="lg">SECULAR</Blur>{" "}
            <Blur blurStrength="lg">DEMOCRATIC</Blur>{" "}
            <Blur blurStrength="lg">REPUBLIC</Blur> and to secure to all its
            citizens:
          </p>
          <p className="text-base sm:text-lg md:text-xl font-serif text-amber-800 text-center mb-2 sm:mb-4">
            <Blur blurStrength="lg">JUSTICE</Blur>, social, economic and
            political;
          </p>
          <p className="text-base sm:text-lg md:text-xl font-serif text-amber-800 text-center mb-2 sm:mb-4">
            <Blur blurStrength="lg">LIBERTY</Blur> of thought, expression,
            belief, faith and worship;
          </p>
          <p className="text-base sm:text-lg md:text-xl font-serif text-amber-800 text-center mb-2 sm:mb-4">
            <Blur blurStrength="lg"> EQUALITY</Blur> of status and of
            opportunity;
          </p>
          <p className="text-sm sm:text-base md:text-lg font-serif text-amber-900 text-center mb-3 sm:mb-6">
            and to promote among them all
          </p>
          <p className="text-base sm:text-lg md:text-xl font-serif text-amber-800 text-center mb-3 sm:mb-6">
            <Blur blurStrength="lg">FRATERNITY</Blur>, assuring the dignity of
            the individual and the unity of the Nation;
          </p>
          <p className="text-sm sm:text-base md:text-lg font-serif text-amber-900 text-center mb-3 sm:mb-6">
            IN OUR CONSTITUENT ASSEMBLY this twenty-sixth day of November, 1949,
            do HEREBY ADOPT, ENACT AND GIVE TO OURSELVES THIS CONSTITUTION.
          </p>
        </div>
      </div>
    </div>
  );
}

const Basic = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center p-2 sm:p-4">
      <Preamble />
    </div>
  );
};

export default Basic;
