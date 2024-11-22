/**
 * @name Container
 * @description 容器组件参数
 * @param {string} size - 容器大小 可选值: s, md, lg, xl, 2xl
 *
 */
export type ContainerProps = {
  children: React.ReactNode | React.ReactNode[];
  size?: "s" | "md" | "lg" | "xl" | "2xl";
  center?: boolean;
  className?: string;
  style?: React.CSSProperties;
};

/**
 * @name 容器组件
 */
const Container = ({
  children,
  size = "md",
  center = false,
  className,
  style,
}: ContainerProps) => {
  return (
    <div
      className={`container ${size} ${center ? "mx-auto" : ""} ${className}`}
      style={style && { ...style }}
    >
      {children}
    </div>
  );
};

export default Container;
