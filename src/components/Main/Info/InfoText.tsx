import { ReactNode } from "react";

interface InfoTextProps {
  children: ReactNode;
  size?: number;
  displayType?: string
  textAlignType?: string
}

export default function InfoText({ children, size, displayType, textAlignType }: InfoTextProps) {
  return (
    <span
      className="font-roboto text-center"
      style={{
        fontSize: size != null ? size : 14,
        display: displayType != null ? displayType : "inline-block",
        textAlign: textAlignType != null ? textAlignType : "center"
      }}
    >
      {children}
    </span>
  );
}
