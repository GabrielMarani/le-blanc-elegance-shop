import { Crown } from "lucide-react";

interface LogoProps {
  className?: string;
  variant?: "light" | "dark";
}

const Logo = ({ className = "", variant = "light" }: LogoProps) => {
  const isLight = variant === "light";
  
  return (
    <div className={`flex flex-col items-center ${className}`}>
      {/* Crown */}
      <Crown className={`h-5 w-5 mb-1 ${isLight ? "text-primary" : "text-luxury-black"}`} />
      
      {/* Brand Name with Elegant Circle */}
      <div className={`relative px-6 py-3 border-2 rounded-full ${
        isLight ? "border-primary" : "border-luxury-black"
      }`}>
        <h1 className={`font-great-vibes text-3xl ${
          isLight ? "text-primary" : "text-luxury-black"
        }`}>
          Le Blanc
        </h1>
        <p className={`font-montserrat text-[10px] uppercase tracking-[0.2em] text-center mt-1 ${
          isLight ? "text-primary" : "text-luxury-black"
        }`}>
          Joalheria
        </p>
      </div>
    </div>
  );
};

export default Logo;