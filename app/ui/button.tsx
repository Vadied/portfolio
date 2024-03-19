type Props = {
  onClick?: (() => void) | null;
  disabled?: boolean;
  type?: "primary" | "secondary" | "link";
  href?: string;
  children: React.ReactNode;
};
const Button = ({
  disabled,
  type = "primary",
  onClick = null,
  children,
}: Props) => {
  const getColor = () => {
    if (type === "primary") return "bg-parchment-lighter";

    if (type === "secondary") return "bg-parchment";

    return "bg-parchment";
  };

  const disabledClass = disabled ? "opacity-50 cursor-not-allowed" : "";

  const handleClick = () => {
    if (disabled || !onClick) return;

    onClick();
  };

  return (
    <button className={`py-2 px-4 rounded ${getColor()} ${disabledClass}`} onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
