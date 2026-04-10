import type { SectionLabelProps } from "../componentsProps";

const SectionLabel = ({ variant, children }: SectionLabelProps) => {
  const baseClass =
    "font-press-start text-[9px] tracking-wider px-3.5 py-2.5 mb-4 border-l-4 bg-white/5 uppercase";
  const variantClasses = {
    green: "text-emerald border-emerald",
    red: "text-red border-red",
    blue: "text-sky border-sky",
    yellow: "text-gold border-gold",
  };
  return (
    <div className={`${baseClass} ${variantClasses[variant]}`}>{children}</div>
  );
};

export default SectionLabel;
