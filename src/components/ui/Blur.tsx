import { cn } from "@/lib/utils";
import React from "react";

const Blur = ({
  children,
  className,
  blurStrength = "md",
}: {
  className?: string;
  children: React.ReactNode;
  blurStrength?: string;
}) => {
  return (
    <div
      className={cn(
        "flex underline underline-offset-4   items-center justify-center",
        blurStrength
          ? `blur-lg border-b-[1px] border-zinc-400 underline underline-offset-2  `
          : "blur-0",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Blur;
