"use client";
import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

enum OptionProps {
  PREAMBLE = "Preamble",
  FUNDAMENTALS_RIGHT = "Fundamentals Right",
  FUNDAMENTALS_DUTY = "Fundamentals Duty",
  DIRECTIVE_PRINCIPLES_OF_STATE_POLICY = "Directive Principles of State Policy",
}

const Start = () => {
  const router = useRouter();
  const [selected, setSelected] = useState<OptionProps | null>(null);

  const handleSelectChange = (value: string) => {
    setSelected(value as OptionProps);
  };

  useEffect(() => {
    console.log(selected);
  }, [selected]);

  const handleButtonClick = () => {
    router.push("/basic");
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="max-w-md flex flex-col justify-center space-y-4">
        <Select onValueChange={handleSelectChange}>
          <SelectTrigger className="w-[280px]">
            <SelectValue placeholder="Select Chapter" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {Object.values(OptionProps).map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <Button variant="secondary" onClick={handleButtonClick}>
          Basic Scratch
        </Button>
      </div>
    </div>
  );
};

export default Start;
