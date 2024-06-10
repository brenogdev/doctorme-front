import { IconName } from "@/app/_models/iconName";
import React, { SVGProps } from "react";

type IconProps = Readonly<{
  name: IconName;
  children?: React.ReactNode;
  childrenClassName?: string;
}>;
export function Icon({
  name,
  children,
  childrenClassName,
  ...props
}: SVGProps<SVGSVGElement> & IconProps) {
  if (children) {
    return (
      <span className={`inline-flex items-center text-sm gap-1 ${childrenClassName}`}>
        <Icon name={name} {...props} />
        {children}
      </span>
    );
  }

  return (
    <svg {...props}>
      <use href={`./sprite.svg#${name}`} />
    </svg>
  );
}
