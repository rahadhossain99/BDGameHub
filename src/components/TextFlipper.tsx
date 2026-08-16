import React, { useState, useEffect } from 'react';

interface TextFlipperProps {
  items: string[];
  intervalMs?: number;
  className?: string;
}

export const TextFlipper: React.FC<TextFlipperProps> = ({
  items,
  intervalMs = 3000,
  className = '',
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (!items || items.length <= 1) return;

    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % items.length);
        setIsTransitioning(false);
      }, 350);
    }, intervalMs);

    return () => clearInterval(timer);
  }, [items, intervalMs]);

  return (
    <span className={`inline-block overflow-hidden align-bottom ${className}`}>
      <span
        className={`inline-block transition-all duration-350 ease-out transform ${
          isTransitioning
            ? '-translate-y-full opacity-0'
            : 'translate-y-0 opacity-100'
        }`}
      >
        {items[currentIndex]}
      </span>
    </span>
  );
};
