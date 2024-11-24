import Cloud from "../Cloud";

export default function Mask() {
  return (
    <div className="bg-mask">
      <div className="out-side-border" />
      <div className="mask inner-side-border" />
      <Cloud />
    </div>
  );
}
