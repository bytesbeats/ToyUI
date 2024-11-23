import "./style.css";

import Image from "next/image";

import CloudPicture from "/public/images/cloud.svg";
import CloudMiniPicture from "/public/images/cloud-mini.svg";

const Cloud = () => (
  <div className="absolute h-full w-full inset-x-0 inset-y-0 ">
    <div className="relative overflow-x-hidden cloud-box flex flex-col gap-y-2">
      <Image
        src={CloudPicture}
        alt="Cloud Svg"
        sizes="100vw"
        quality={100}
        className="animate-float-around self-end left-2 top-2 relative"
      />
      <Image
        src={CloudMiniPicture}
        alt="Cloud Svg"
        sizes="100vw"
        quality={100}
        className="animate-float-around-mini self-start  relative"
      />
      <Image
        src={CloudMiniPicture}
        alt="Cloud Svg"
        sizes="100vw"
        quality={100}
        className="animate-float-around-mini self-end right-3 relative"
      />
      <Image
        src={CloudMiniPicture}
        alt="Cloud Svg"
        sizes="100vw"
        quality={100}
        className="animate-float-around-mini self-start left-5 relative"
      />
    </div>
  </div>
);

export default Cloud;
