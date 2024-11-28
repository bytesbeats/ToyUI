export type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  btnType?: "button" | "submit" | "reset" | "link" | "ghost";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  className,
  btnType = "button",
  ...rest
}: ButtonProps) {
  let btnTypeStyle;
  switch (btnType) {
    case "button":
      btnTypeStyle = "btn-default";
      break;
    case "submit":
      btnTypeStyle = "btn-primary";
      break;
    case "reset":
      btnTypeStyle = "btn-secondary";
      break;
    case "link":
      btnTypeStyle = "btn-link";
      break;
    case "ghost":
      btnTypeStyle = "btn-ghost";
      break;
    default:
      btnTypeStyle = "btn-default";
  }
  return (
    <button className={`btn ${btnTypeStyle} ${className ?? ""}`} {...rest}>
      {children}
    </button>
  );
}
