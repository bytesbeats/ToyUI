import "./style.css";

import { useEffect } from "react";

/**
 * @name MobileSimulatorContainerProps
 * @description MobileSimulatorContainer 组件的属性
 * @param {string} className - 类名
 * @param {React.CSSProperties} style - 样式
 */
export type MobileSimulatorContainerProps = {
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
  battery?: number;
  wifi?: number;
  time?: Date;
  dark?: boolean;
};

/**
 * @name 容器组件
 */
const MobileSimulatorContainer = (props: MobileSimulatorContainerProps) => {
  const {
    className,
    style,
    children,
    battery = 0,
    wifi = 1,
    time = new Date(),
    dark,
  } = props;

  useEffect(() => {
    if (battery < 0 || battery > 100) {
      return;
    }
    const root = document.querySelector(":root") as HTMLElement;
    if (root) {
      root.style.setProperty("--electricity-count", `${battery}%`);
    }
  }, [battery, dark]);

  useEffect(() => {
    if (wifi < 1 || wifi > 3) {
      return;
    }
    const root = document.querySelector(":root") as HTMLElement;

    let selectWifiColor = "";
    let defaultWifiColor = "";

    if (dark) {
      selectWifiColor = getComputedStyle(root)
        .getPropertyValue("--dark--wifi-color")
        .trim();
      defaultWifiColor = getComputedStyle(root)
        .getPropertyValue("--dark--wifi-default")
        .trim();
    } else {
      selectWifiColor = getComputedStyle(root)
        .getPropertyValue("--light--wifi-color")
        .trim();
      defaultWifiColor = getComputedStyle(root)
        .getPropertyValue("--light--wifi-default")
        .trim();
    }

    if (root) {
      switch (wifi) {
        case 1:
          root.style.setProperty("--wifi-first", selectWifiColor);
          root.style.setProperty("--wifi-second", defaultWifiColor);
          root.style.setProperty("--wifi-third", defaultWifiColor);
          break;
        case 2:
          root.style.setProperty("--wifi-first", selectWifiColor);
          root.style.setProperty("--wifi-second", selectWifiColor);
          root.style.setProperty("--wifi-third", defaultWifiColor);
          break;
        case 3:
          root.style.setProperty("--wifi-first", selectWifiColor);
          root.style.setProperty("--wifi-second", selectWifiColor);
          root.style.setProperty("--wifi-third", selectWifiColor);
          break;
        default:
          break;
      }
    }
  }, [wifi, dark]);

  useEffect(() => {
    const root = document.querySelector(":root") as HTMLElement;

    let timeColor = "";

    if (dark) {
      timeColor = getComputedStyle(root)
        .getPropertyValue("--dark--time-color")
        .trim();
    } else {
      timeColor = getComputedStyle(root)
        .getPropertyValue("--light--time-color")
        .trim();
    }
    root.style.setProperty("--time-color", timeColor);
  }, [time, dark]);

  useEffect(() => {
    const root = document.querySelector(":root") as HTMLElement;

    let barColor = "";

    if (dark) {
      barColor = getComputedStyle(root)
        .getPropertyValue("--dark--bar-color")
        .trim();
    } else {
      barColor = getComputedStyle(root)
        .getPropertyValue("--light--bar-color")
        .trim();
    }
    root.style.setProperty("--bar-color", barColor);
  }, [dark]);

  const getTime = () => {
    const currentTime = new Date(time);
    const hour = currentTime.getHours();
    const minute = currentTime.getMinutes();
    return `${hour < 10 ? "0" + hour : hour}:${minute < 10 ? "0" + minute : minute}`;
  };

  return (
    <div className={`mobile ${className}`} style={style}>
      <div className="mobile-content">{children}</div>

      <div className="mobile-time">{getTime()}</div>

      <div className="mobile-bar" />

      <div className="mobile-battery">
        <div className="mobile-battery-count"></div>
      </div>

      <div className="mobile-box">
        <div className="mobile-wifi-symbol">
          <div className="mobile-wifi mobile-third"></div>
          <div className="mobile-wifi mobile-second"></div>
          <div className="mobile-wifi mobile-first"></div>
        </div>
      </div>
    </div>
  );
};

export default MobileSimulatorContainer;
