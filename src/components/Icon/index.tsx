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
  PRIMARY = "primary",
  SECONDARY = "secondary",
  SUCCESS = "success",
  WARNING = "warning",
  DANGER = "danger",
  INFO = "info",
}

export type IconProps = {
  name: string;
  size: IconSize;
  color?: IconColor;
} & HTMLAttributes<HTMLSpanElement>;

const Icon = ({
  name,
  size = IconSize.MD,
  color = IconColor.PRIMARY,
  ...props
}: IconProps) => {
  return (
    <i
      className={`zcg-icon zcg-${name} icon-${size.toLowerCase()} icon-${color}`}
      {...props}
    />
  );
};

export default Icon;
