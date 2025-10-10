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
        className="h-16 w-auto object-contain"
      />
    </div>
  );
};

export default Logo;