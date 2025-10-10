import logoImage from "@/assets/logo.png";

interface LogoProps {
  className?: string;
  variant?: "light" | "dark";
}

const Logo = ({ className = "", variant = "light" }: LogoProps) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src={logoImage} 
        alt="Le Blanc Joalheria" 
        className="h-20 w-20 object-contain transition-all duration-300"
      />
    </div>
  );
};

export default Logo;