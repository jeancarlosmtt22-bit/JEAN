import React from 'react';
import { trackWhatsAppClick } from '../lib/tracking';
import { cn } from '../lib/utils';
import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  location: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  children?: React.ReactNode;
}

const WHATSAPP_URL = "https://wa.me/5547997069799";

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ 
  location, 
  variant = 'primary', 
  size = 'md',
  className,
  children,
  ...props 
}) => {
  const handleClick = () => {
    trackWhatsAppClick(location);
    window.open(WHATSAPP_URL, '_blank');
  };

  const variants = {
    primary: "bg-green-500 hover:bg-green-600 text-white shadow-lg shadow-green-500/20",
    secondary: "bg-brand-blue hover:bg-blue-700 text-white shadow-lg shadow-blue-500/20",
    outline: "border-2 border-green-500 text-green-600 hover:bg-green-50/50",
    ghost: "bg-white/10 hover:bg-white/20 text-white backdrop-blur-md",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base font-medium",
    lg: "px-8 py-4 text-lg font-semibold",
    xl: "px-10 py-5 text-xl font-bold",
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      <MessageCircle className={cn(size === 'sm' ? "w-4 h-4" : "w-5 h-5")} />
      {children || "Falar no WhatsApp"}
    </button>
  );
};

export default WhatsAppButton;
