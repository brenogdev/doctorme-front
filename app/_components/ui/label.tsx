import React, { HTMLAttributes } from "react";

export interface LabelProps extends HTMLAttributes<HTMLLabelElement> {}

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ children, ...props }, ref) => {
    return (
      <label ref={ref} {...props}>
        {children}
      </label>
    );
  }
);

Label.displayName = "Label";

export { Label };
