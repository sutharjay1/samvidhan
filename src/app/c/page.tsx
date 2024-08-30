"use client";

import { Button } from "@/components/ui/button";
import { useOptions } from "@/hooks/useOptions";
import { Options } from "@/type";
import React, { useState } from "react";

interface Props {
  params: {
    option: Options;
  };
}

const Check = ({ params }: Props) => {
  const { option, setOption } = useOptions();

  // const { option } = params;

  console.log(option);

  const [yes, setYes] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleYesClick = () => {
    setYes(true);
    // setOption(Options.SOVEREIGN);
  };

  const handleNoClick = () => {
    setYes(false);
    // setOption(Options.SECULAR);
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="max-w-md flex flex-col justify-center space-y-4">
        <div className="py-8">
          <h1 className="text-3xl font-serif text-amber-800 text-center">
            {option}
          </h1>
        </div>

        {loading ? (
          <div className="flex justify-center items-center">
            <img src="/loading.gif" alt="Loading" className="w-16 h-16" />
          </div>
        ) : (
          <div className="flex justify-center gap-4">
            <Button variant="secondary" onClick={handleYesClick}>
              Yes
            </Button>
            <Button variant="secondary" onClick={handleNoClick}>
              No
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Check;
