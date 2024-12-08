import React from 'react';

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className="flex items-center">
      <img 
        src="/images/ES new signboard for viewing.gif" 
        alt="Empiric Star Fashion Attires" 
        className={`h-12 w-auto ${className}`}
        style={{
          objectFit: 'contain',
          maxWidth: '300px'
        }}
      />
    </div>
  );
}