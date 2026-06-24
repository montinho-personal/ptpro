import Link from "next/link";
import { getWhatsAppUrl } from "@/lib/whatsapp";

interface ButtonProps {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  whatsapp?: boolean;
  whatsappMessage?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
}

export default function Button({
  variant = "primary",
  size = "md",
  href,
  whatsapp,
  whatsappMessage,
  onClick,
  children,
  className = "",
  target,
  rel,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium tracking-wide transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white";

  const variants = {
    primary:
      "bg-white text-black hover:bg-gray-100 focus-visible:ring-white",
    secondary:
      "border border-white text-white hover:bg-white hover:text-black focus-visible:ring-white",
    ghost:
      "text-white hover:text-gray-300 focus-visible:ring-white underline-offset-4 hover:underline",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const finalHref = whatsapp ? getWhatsAppUrl(whatsappMessage) : href;

  if (finalHref) {
    return (
      <Link
        href={finalHref}
        className={classes}
        target={target || (whatsapp ? "_blank" : undefined)}
        rel={rel || (whatsapp ? "noopener noreferrer" : undefined)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
