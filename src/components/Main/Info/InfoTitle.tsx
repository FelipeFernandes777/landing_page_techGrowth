import { ReactNode } from "react";

interface InfoTitleProps {
  children: ReactNode;
}

export default function InfoTitle({ children }: InfoTitleProps) {
  return <span className="font-bold text-3xl bg-inherit">{children}</span>;
}
