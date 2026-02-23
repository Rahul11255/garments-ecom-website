import React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={cn("px-[3%] md:px-[2%] mx-auto w-full max-w-[1500px]", className)}>
      {children}
    </div>
  );
};

export default Container;
