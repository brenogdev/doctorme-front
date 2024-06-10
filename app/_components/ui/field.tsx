import React, { useId } from "react";
import { Label } from "./label";
import { Input } from "./input";


export const Field = ({
  labelProps,
  inputProps,
}: {
  labelProps: React.LabelHTMLAttributes<HTMLLabelElement>;
  inputProps: React.InputHTMLAttributes<HTMLInputElement>;
}) => {
  const fallbackID = useId();
  const id = inputProps.id ?? fallbackID;

  return (
    <div className="flex flex-col">
      <Label htmlFor={id} {...labelProps} />
      <Input id={id} {...inputProps} />
    </div>
  );
};
