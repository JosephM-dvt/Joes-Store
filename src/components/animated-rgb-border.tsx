import type React from "react";

interface RGBBorderProps {
  children: React.ReactNode;
  className?: string;
}

export function AnimatedRGBBorder({
  children,
  className = "",
}: RGBBorderProps) {
  return (
    <div className={`relative ${className} rounded-2xl overflow-clip`}>
      <div className="absolute -inset-0.5 bg-[conic-gradient(from_180deg,#ef4444,#3b82f6,#ef4444,#3b82f6)] aspect-square scale-200 blur animate-[spin_15s_linear_infinite] " />
      <div className="relative bg-background rounded-2xl m-1">{children}</div>
    </div>
  );
}
