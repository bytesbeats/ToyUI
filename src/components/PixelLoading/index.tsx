import "./style.css";

import { useEffect, useRef } from "react";

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
  times?: number;
};

/**
 * @name PixelLoading
 * @description PixelLoading 像素风格Loading组件
 * @param {PixelLoadingProps} props - 组件的属性
 * @returns {JSX.Element} 返回一个 JSX 元素
 */
const PixelLoading = ({ times }: PixelLoadingProps) => {
  const loaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!loaderRef.current || !times) return;

    const element = loaderRef.current;
    const animations = [
      element.getAnimations()[0],
      ...Array.from(element.querySelectorAll("::before, ::after")).map(
        (el) => (el as Element).getAnimations()[0]
      ),
    ];

    animations.forEach((animation) => {
      if (animation) {
        animation.effect?.updateTiming({ iterations: times });
      }
    });
  }, [times]);

  return <div ref={loaderRef} className="loader" />;
};

export default PixelLoading;
