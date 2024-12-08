import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  className?: string;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  className = '',
  onClick,
  href,
  target,
  rel,
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center rounded-full transition-colors';
  
  const variantStyles = {
    primary: 'bg-primary hover:bg-primary-dark text-white',
    secondary: 'bg-white hover:bg-gray-100 text-primary-dark',
    ghost: 'text-gray-300 hover:text-primary-light',
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-2',
    lg: 'px-8 py-3 text-lg',
  };

  const styles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={styles}>
        {Icon && <Icon className="w-4 h-4 mr-2" />}
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={styles}>
      {Icon && <Icon className="w-4 h-4 mr-2" />}
      {children}
    </button>
  );
}