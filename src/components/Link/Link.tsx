import React, { ReactNode } from "react";
import NextLink, { LinkProps as BaseProps } from "next/link";

export type LinkProps = BaseProps & {
  children: ReactNode | undefined;
  bindClick?: (e: MouseEvent) => Promise<void | undefined>;
};

const Link = ({ children, ...props }: LinkProps) => {
  console.log(props);
  return <NextLink {...props}>{children}</NextLink>;
};

export default Link;
