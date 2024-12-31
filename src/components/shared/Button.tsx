import { ButtonHTMLAttributes, forwardRef } from "react";

type ButtonVariants = "primary" | "secondary" | "outline" | "danger";
type ButtonSizes = "small" | "medium" | "large";

interface BaseButtonProps {
  variant?: ButtonVariants;
  size?: ButtonSizes;
  isLoading?: boolean;
  className?: string;
}

type ButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "medium",
      isLoading = false,
      className = "",
      children,
      type = "button",
      ...props
    },
    ref
  ) => {
    const baseStyle =
      "inline-flex items-center justify-center rounded-md font-semibold transition-colors";

    const variantStyles = {
      primary: "bg-cyan-600 text-white hover:bg-cyan-700",
      secondary: "bg-gray-600 text-white hover:bg-gray-700",
      outline:
        "bg-transparent text-cyan-600 border border-cyan-600 hover:bg-cyan-100",
      danger: "bg-red-600 text-white hover:bg-red-700",
    };

    const sizeStyles = {
      small: "px-3 py-2 text-sm",
      medium: "px-4 py-2 text-base",
      large: "px-5 py-3 text-lg",
    };

    const loadingStyles = isLoading ? "opacity-50 cursor-wait" : "";

    const buttonClassName = `${baseStyle} ${variantStyles[variant]} ${sizeStyles[size]} ${loadingStyles} ${className}`;

    return (
      <button
        {...props}
        ref={ref}
        className={buttonClassName}
        disabled={isLoading}
        type={type}
      >
        {isLoading ? "Loading..." : children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
