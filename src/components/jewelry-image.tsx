import React from 'react';

interface JewelryImageProps {
  src: string;
  alt: string;
  className?: string;
}

const JewelryImage: React.FC<JewelryImageProps> = ({ src, alt, className = '' }) => {
  return (
    <div className={`relative overflow-hidden rounded-lg ${className}`}>
      <img 
        src={src} 
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        loading="lazy"
      />
    </div>
  );
};

export default JewelryImage;