"use client";

import React, { useState, useEffect, useRef } from "react";

interface InViewSectionProps {
  children: React.ReactNode;
  fallback: React.ReactNode;
  rootMargin?: string;
  className?: string;
}

export default function InViewSection({
  children,
  fallback,
  rootMargin = "200px",
  className = "section-optimize",
}: InViewSectionProps) {
  const [isInView, setIsInView] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [rootMargin]);

  // Micro-delay after entering viewport to let initial hydration/critical tasks finish
  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setShouldRender(true);
      }, 100); // 100ms settling time
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  return (
    <div ref={ref} className={className}>
      {shouldRender ? children : fallback}
    </div>
  );
}
