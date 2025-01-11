import "./style.css";

import Image from "next/image";

import cloud_mini from "/public/images/cloud-mini.svg";
import cloud from "/public/images/cloud.svg";

const Cloud = () => (
  <div className="fixed h-full w-full inset-x-0 inset-y-0">
    <div className="relative overflow-x-hidden cloud-box flex flex-col gap-y-2">
      <Image
        src={cloud}
        alt="Cloud Svg"
        sizes="100vw"
        quality={100}
        className="animate-float-around self-end left-2 top-2 relative"
      />
      <Image
        src={cloud_mini}
        alt="Cloud Svg"
        sizes="100vw"
        quality={100}
        className="animate-float-around-mini-3 self-start  relative"
      />
      <Image
        src={cloud_mini}
        alt="Cloud Svg"
        sizes="100vw"
        quality={100}
        className="animate-float-around-mini-1 self-end right-3 relative"
      />
      <Image
        src={cloud_mini}
        alt="Cloud Svg"
        sizes="100vw"
        quality={100}
        className="animate-float-around-mini-2 self-start left-5 relative"
      />
    </div>
  </div>
);

export default Cloud;
