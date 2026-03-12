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
    <div
      className={`
      w-full flex group items-center text-foreground hover:shadow-sm relative overflow-hidden rounded-2xl p-[1.25px]
      ${className}
    `}
    >
      <div className="absolute animate-[spin_10s_linear_infinite] inset-[-1000%] bg-[conic-gradient(from_90deg_at_50%_50%,#338EF7_0%,#F54180_50%,#338EF7_100%)]" />
      <div className="relative bg-background rounded-2xl  w-full backdrop-blur-3xl ">{children}</div>
    </div>
  );
}
