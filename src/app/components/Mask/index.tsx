import "./index.css";

import Cloud from "../Cloud";

export default function Mask() {
  return (
    <div className="mask">
      <div className="mask-bg" />
      <div className="mask-outside-border" />
      <Cloud />
    </div>
  );
}
