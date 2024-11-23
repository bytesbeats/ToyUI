/**
 * @name Container
 * @description 容器组件参数
 * @param {string} full - 是否充满
 *
 */
export type ContainerProps = {
  children: JSX.Element | JSX.Element[] | React.ReactNode | React.ReactNode[];
  full?: boolean;
  center?: boolean;
  className?: string;
  style?: React.CSSProperties;
};

/**
 * @name 容器组件
 */
const Container = ({
  children,
  full = false,
  className,
  style,
}: ContainerProps) => {
  console.log(full);
  return (
    <div
      className={` ${full ? "w-screen" : "container w-full"}  ${
        className ?? ""
      }`}
      style={style && { ...style }}
    >
      {children}
    </div>
  );
};

export default Container;
