"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

const App = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/start");
  };

  return (
    <div
      onClick={handleClick}
      className="w-full h-screen flex justify-center items-center "
    >
      <Button variant={"secondary"}>Samvidhan</Button>
    </div>
  );
};

export default App;
