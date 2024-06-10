import React, { HTMLProps } from "react";

export interface InputProps extends HTMLProps<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ type, ...props }, ref) => {
    return <input type={type} ref={ref} {...props} 
    className="border border-gray-200 p-[15px] rounded-xl"
    />;
  }
);

Input.displayName = "Input";

export { Input };
