import "./styles.css";

import { HTMLAttributes } from "react";

export enum IconSize {
  XS = "xs",
  SM = "sm",
  MD = "md",
  LG = "lg",
  XL = "xl",
}

export enum IconColor {
  PRIMARY = "text-primary",
  SECONDARY = "text-secondary",
  SUCCESS = "text-success",
  WARNING = "text-warning",
  DANGER = "text-danger",
  INFO = "text-info",
  DEFAULT = "",
}

export type IconProps = {
  name: string;
  size?: IconSize;
  color?: IconColor;
} & HTMLAttributes<HTMLSpanElement>;

const Icon = ({
  name,
  size = IconSize.MD,
  color = IconColor.DEFAULT,
}: IconProps) => {
  return (
    <i
      className={`zcg-icon zcg-${name} icon-${size.toLowerCase()} ${color} inline-block`}
    />
  );
};

export default Icon;
