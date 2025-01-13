/**
 * @name Container
 * @description 容器组件参数
 * @param {string} full - 是否充满
 *
 */
export type ContainerProps = {
  full?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

/**
 * @name 容器组件
 */
const Container = ({
  full = false,
  className,
  children,
  ...htmlProps
}: ContainerProps) => {
  return (
    <div
      className={` ${full ? "w-screen" : "container w-full"}  ${className}`}
      {...htmlProps}
    >
      {children}
    </div>
  );
};

export default Container;
