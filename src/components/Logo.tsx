import { Crown } from "lucide-react";

interface LogoProps {
  className?: string;
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
}

const Logo = ({ className = "", variant = "light", size = "md" }: LogoProps) => {
  const isLight = variant === "light";
  
  const sizes = {
    sm: {
      crown: "h-3 w-3 mb-0.5",
      px: "px-3",
      py: "py-1.5",
      title: "text-xl",
      subtitle: "text-[8px]"
    },
    md: {
      crown: "h-5 w-5 mb-1",
      px: "px-6",
      py: "py-3",
      title: "text-3xl",
      subtitle: "text-[10px]"
    },
    lg: {
      crown: "h-6 w-6 mb-1",
      px: "px-8",
      py: "py-4",
      title: "text-4xl",
      subtitle: "text-[12px]"
    }
  };

  const currentSize = sizes[size];
  
  return (
    <div className={`flex flex-col items-center ${className}`}>
      {/* Crown */}
      <Crown className={`${currentSize.crown} ${isLight ? "text-primary" : "text-luxury-black"}`} />
      
      {/* Brand Name with Elegant Circle */}
      <div className={`relative ${currentSize.px} ${currentSize.py} border-2 rounded-full ${
        isLight ? "border-primary" : "border-luxury-black"
      }`}>
        <h1 className={`font-great-vibes ${currentSize.title} ${
          isLight ? "text-primary" : "text-luxury-black"
        }`}>
          Le Blanc
        </h1>
        <p className={`font-montserrat ${currentSize.subtitle} uppercase tracking-[0.2em] text-center mt-1 ${
          isLight ? "text-primary" : "text-luxury-black"
        }`}>
          Joalheria
        </p>
      </div>
    </div>
  );
};

export default Logo;