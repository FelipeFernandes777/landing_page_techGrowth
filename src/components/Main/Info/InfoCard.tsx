import { ReactElement } from "react";
import InfoText from "./InfoText";

interface InfoCardProps {
  infoText: string;
  icon: ReactElement;
  size: number
}

export default function InfoCard({ infoText, icon, size }: InfoCardProps) {
  return (
    <div className="w-[250px] h-[150px] flex flex-col gap-4 justify-between items-center">
      <div className="w-full min-h-[50px] flex items-center justify-center">
        <span>{icon}</span>
      </div>
      <div className="w-full h-full flex justify-center p-1">
        <InfoText size={size}>{infoText}</InfoText>
      </div>
    </div>
  );
}
