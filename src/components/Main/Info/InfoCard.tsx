import { ReactElement } from "react";
import InfoText from "./InfoText";

interface InfoCardProps {
  infoText: string;
  icon: ReactElement;
}

export default function InfoCard({ infoText, icon }: InfoCardProps) {
  return (
    <div className="w-[250px] h-[120px] flex flex-col gap-4 justify-center items-center">
      <div className="w-full h-[50px] flex items-center justify-center">
        <span>{icon}</span>
      </div>
      <div className="w-full h-full flex justify-center p-1">
        <InfoText size={12}>{infoText}</InfoText>
      </div>
    </div>
  );
}
