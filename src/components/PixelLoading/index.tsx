import "./style.css";

/**
 * @name PixelLoadingProps
 * @description PixelLoading 组件的属性
 * @param {string} className - 类名
 * @param {React.CSSProperties} style - 样式
 * @param {number} times - 动画次数
 */
export type PixelLoadingProps = {
  className?: string;
  style?: React.CSSProperties;
};

/**
 * @name PixelLoading
 * @description PixelLoading 像素风格Loading组件
 * @param {PixelLoadingProps} props - 组件的属性
 * @returns {JSX.Element} 返回一个 JSX 元素
 */
const PixelLoading = (props: PixelLoadingProps) => {
  const { className, style } = props;
  return <div className={`loader ${className}`} style={style} />;
};

export default PixelLoading;
