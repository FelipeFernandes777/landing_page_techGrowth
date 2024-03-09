import { ReactNode } from "react";

interface InfoTextProps {
  children: ReactNode;
  size?: number;
}

export default function InfoText({ children, size }: InfoTextProps) {
  return (
    <span
      className="font-roboto text-center inline-block"
      style={{ fontSize: size != null ? size : 14 }}
    >
      {children}
    </span>
  );
}
