import React, { ReactNode } from "react";
import NextLink, { LinkProps as BaseProps } from "next/link";

import "./style.css";
import { useRouter } from "next/navigation";

export type LinkProps = BaseProps & {
  children: ReactNode | undefined;
  onJumpBefore?: () => Promise<void | undefined>;
  onJumpAfter?: () => Promise<void | undefined>;
  icon?: ReactNode | undefined;
};

const Link = ({ children, ...props }: LinkProps) => {
  const router = useRouter();
  const { href, icon, onJumpBefore, onJumpAfter, ...rest } = props;
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
      className="Link"
      href="Void(0)"
      onClick={async (e) => {
        e.preventDefault();
        await handleJumpBefore();
        router.push(href.toString());
        await handleJumpAfter();
      }}
    >
      <div className="flex space-x-1">
        <div>{icon ? icon : null}</div>
        <div>{children}</div>
      </div>
    </NextLink>
  );
};

export default Link;
