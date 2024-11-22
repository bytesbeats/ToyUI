import { HTMLAttributes } from "react";
import "./styles.css";
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
}

export type IconProps = {
  name: string;
  size?: IconSize;
  color?: IconColor;
} & HTMLAttributes<HTMLSpanElement>;

const Icon = ({
  name,
  size = IconSize.MD,
  color = IconColor.PRIMARY,
}: IconProps) => {
  console.log(color);
  return (
    <i className={`zcg-icon zcg-${name} icon-${size.toLowerCase()} ${color}`} />
  );
};

export default Icon;
