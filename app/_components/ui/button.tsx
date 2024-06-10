import React, { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        {...props}
        className={`bg-[#459487] text-white rounded-xl font-bold p-4 w-full ${className}`}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
