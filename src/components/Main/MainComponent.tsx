import { BarChart4, Clock, ListTodo } from "lucide-react";
import InfoCard from "./Info/InfoCard";
import InfoContainer from "./Info/InfoContainer";
import InfoText from "./Info/InfoText";
import InfoTitle from "./Info/InfoTitle";
import { MainContainer } from "./MainContainer";
import { ReactElement } from "react";

interface InfoCardProps {
  icon: ReactElement;
  infoText: string;
}

export function MainComponent() {
  const infoCards = [
    {
      icon: <Clock size={50} color="rgba(18, 117, 246, 0.61)" />,
      infoText: "Adicionar descrição texto teste de quebra de linha",
    },
    {
      icon: <ListTodo size={50} color="rgba(18, 117, 246, 0.61)" />,
      infoText: "Adicionar descrição texto teste de quebra de linha",
    },
    {
      icon: <BarChart4 size={50} color="rgba(18, 117, 246, 0.61)" />,
      infoText: "Adicionar descrição texto teste de quebra de linha",
    },
  ];

  return (
    <MainContainer>
      <section className="!max-w-screen h-fit flex flex-col">
        <InfoContainer bg_color="white" customizeHeight="300">
          <InfoTitle>Adicionar o titulo</InfoTitle>
          <div className="w-[700px] align-baseline">
            <InfoText>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam
              officia sunt cum at? Atque neque harum debitis suscipit pariatur
              iure. Expedita illo voluptas nisi itaque porro ipsa, incidunt
              molestiae aliquam?
            </InfoText>
          </div>
        </InfoContainer>
        <InfoContainer customizeHeight="400">
          <div className="w-full h-full flex flex-col justify-around items-center">
            <InfoTitle>Adicionar o titulo</InfoTitle>
            <div className="w-full flex gap-3 items-center justify-center">
              {infoCards &&
                infoCards.map((card: InfoCardProps, index: number) => {
                  return (
                    <div key={index}>
                      <InfoCard icon={card.icon} infoText={card.infoText} />
                    </div>
                  );
                })}
            </div>
          </div>
        </InfoContainer>
      </section>
    </MainContainer>
  );
}
