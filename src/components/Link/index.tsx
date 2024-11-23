"use client";
import "./style.css";

import NextLink, { LinkProps as BaseProps } from "next/link";
import { useRouter } from "next/navigation";
import React, { ReactNode } from "react";

export type LinkProps = BaseProps & {
  children: ReactNode | undefined;
  onJumpBefore?: () => Promise<void | undefined>;
  onJumpAfter?: () => Promise<void | undefined>;
  icon?: ReactNode | undefined;
  className?: string;
};

const Link = ({ children, ...props }: LinkProps) => {
  const router = useRouter();
  const {
    href,
    icon,
    onJumpBefore,
    onJumpAfter,
    className: cls,
    ...rest
  } = props;
  // use jump href url before event
  const handleJumpBefore = async () => {
    if (onJumpBefore) {
      await onJumpBefore();
    }
  };

  // use jump href url after event
  const handleJumpAfter = async () => {
    if (onJumpAfter) {
      await onJumpAfter();
    }
  };

  return (
    <NextLink
      {...rest}
      className={`Link link link-hover ${cls}`}
      href={href}
      onClick={async (e) => {
        e.preventDefault();
        await handleJumpBefore();
        router.push(href.toString());
        await handleJumpAfter();
      }}
    >
      <section className="flex space-x-2">
        {icon && icon}
        {children}
      </section>
    </NextLink>
  );
};

export default Link;
