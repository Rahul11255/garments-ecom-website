import React from "react";
import { cn } from "@/lib/utils"; // adjust path if needed

interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

const CustomButton = ({
  children,
  className,
  variant = "primary",
  ...props
}: CustomButtonProps) => {
  const baseStyles =
    " px-4 py-2.5  md:px-7 md:py-3 rounded uppercase font-semibold text-sm tracking-wider transition-all";

  const variants = {
    primary:
      "bg-gradient-to-r from-rose-400 cursor-pointer to-pink-400 text-white hover:from-secondary hover:to-pink-500 transition-all duration-500 ease-in-out" ,
    secondary:
      "bg-gray-200 text-black hover:bg-gray-300",
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default CustomButton;
