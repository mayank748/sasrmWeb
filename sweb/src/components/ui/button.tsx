import React from "react";

type ButtonProps = {
    children: any;
    className?: string;
    [key: string]: any;
  };
  
  export function Button({ children, className = "", ...props }: ButtonProps) {
    return (
      <button
        className={`bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
  