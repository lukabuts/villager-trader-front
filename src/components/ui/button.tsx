import type { ButtonProps } from "../componentsProps";

const Button = ({
  variant,
  children,
  className = "",
  onClick,
}: ButtonProps) => {
  const baseClasses =
    "font-vt323 text-xl px-4 py-2 border-0 cursor-pointer border-b-4 whitespace-nowrap tracking-wider transition-[transform,box-shadow] active:shadow-none active:translate-y-0.5 h-auto";
  const variantClasses = {
    create:
      "bg-green-dark text-white border-b-green-800 shadow-[0_4px_0_theme(colors.green.800)] hover:bg-green",
    add: "bg-[#3d2e0c] text-gold border-b-gold-dark shadow-[0_4px_0_theme(colors.gold-dark)] hover:bg-[#5a4010]",
    search:
      "bg-blue-dark text-white border-b-blue-800 shadow-[0_4px_0_theme(colors.blue.800)] hover:bg-blue",
    clear:
      "bg-red-dark text-white border-b-red-800 shadow-[0_4px_0_theme(colors.red.800)] hover:bg-red",
    kill: "bg-red-dark text-white border-b-red-800 shadow-[0_4px_0_theme(colors.red.800)] hover:bg-red",
    revive:
      "bg-green-dark text-white border-b-green-800 shadow-[0_4px_0_theme(colors.green.800)] hover:bg-green",
  };

  return (
    <button
      className={`${baseClasses} ${variant ? variantClasses[variant] : ""} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
