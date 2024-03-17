import { BarChart4, Clock, ListTodo, Mail, Phone, User } from "lucide-react";
import InfoCard from "./Info/InfoCard";
import Container from "./Container";
import InfoText from "./Info/InfoText";
import InfoTitle from "./Info/InfoTitle";
import { MainContainer } from "./MainContainer";
import { FormEvent, ReactElement, useState } from "react";
import ServiceContainer from "./servicesCard/ServicesContainer";
import progammingImage from '../../assets/progamminImage.jpg';
import computerNetwork from '../../assets/computerNetwork.jpg';
import { TextField } from "@mui/material";

interface InfoCardProps {
  icon: ReactElement;
  infoText: string;
  size: number;
}

interface ServiceContainerInfoProps {
  imageFirst: boolean
  imageData: {
    alt: string,
    url: string
  }
  color: string,
  text: string
}

interface CostumerDataProps {
  email: string,
  name: string,
  cellPhone: string
}

export function MainComponent() {
  const serviceContainerInfoSectionOne = [
    {
      imageFirst: true,
      imageData: {
        alt: "Criação de sites",
        url: progammingImage
      },
      color: "#f6f6f6",
      text: "Transforme sua presença online com sites incríveis e personalizados. Destaque-se na web com nossos serviços de criação de sites profissionais!"
    },
    {
      imageFirst: false,
      imageData: {
        alt: "Imagem de pessoas montando rede de computadores",
        url: computerNetwork
      },
      color: "#f6f6f6",
      text: "Construímos e cuidamos da sua rede de computadores. Montagem, manutenção e muito mais para manter sua operação sempre conectada e segura!"
    },
    {
      imageFirst: true,
      imageData: {
        alt: "Imagem de pessoas montando rede de computadores",
        url: computerNetwork
      },
      color: "#f6f6f6",
      text: "Construímos e cuidamos da sua rede de computadores. Montagem, manutenção e muito mais para manter sua operação sempre conectada e segura!"
    }
  ]

  const infoCards = [
    {
      icon: <Clock size={50} color="rgba(18, 117, 246, 0.61)" />,
      infoText: "Entregamos resultados com rapidez e excelência!",
      size: 16,
    },
    {
      icon: <ListTodo size={50} color="rgba(18, 117, 246, 0.61)" />,
      infoText: "Adicionar descrição texto teste de quebra de linha",
      size: 16,
    },
    {
      icon: <BarChart4 size={50} color="rgba(18, 117, 246, 0.61)" />,
      infoText: "Impulsionando o crescimento empresarial!",
      size: 16,
    },
  ];


  const [costumerData, setCostumerData] = useState<CostumerDataProps>({
    email: "",
    name: "",
    cellPhone: "",
  })

  const onSubmitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(costumerData)
  }

  return (
    <MainContainer>
      <section className="!max-w-screen h-fit flex flex-col">
        <Container bg_color="white" customizeHeight="300">
          <InfoTitle>Quem somos?</InfoTitle>
          <div className="w-[700px] align-baseline">
            <InfoText size={16}>
              Somos uma empresa dedicada à resolução de problemas empresariais e residenciais, oferecendo uma ampla gama de serviços. Desde a criação de sites até a infraestrutura de redes e Wi-Fi corporativo, incluindo automação de planilhas. Também realizamos montagem e manutenção de computadores, instalação de softwares e outras configurações essenciais. Nosso compromisso é fornecer soluções abrangentes e eficazes, garantindo eficiência e satisfação aos nossos clientes.
            </InfoText>
          </div>
        </Container>
        <Container customizeHeight="400">
          <div className="w-full h-full flex flex-col justify-around items-center">
            <InfoTitle>Adicionar o titulo</InfoTitle>
            <div className="w-full flex gap-3 items-center justify-center">
              {infoCards &&
                infoCards.map((card: InfoCardProps, index: number) => {
                  return (
                    <div key={index}>
                      <InfoCard icon={card.icon} infoText={card.infoText} size={card.size} />
                    </div>
                  );
                })}
            </div>
          </div>
        </Container>
      </section>
      <section className="!max-w-screen h-fit flex flex-col">
        <Container
          bg_color="white"
          customizeHeight="750"
        >
          <InfoTitle>Principais Serviços</InfoTitle>
          <div className="w-full h-[700px] flex flex-col gap-8 justify-center items-center">
            {
              serviceContainerInfoSectionOne.map((services: ServiceContainerInfoProps, index: number) => {
                return (
                  <div key={index} className="!max-h-[250px] w-3/5 flex flex-col">
                    <ServiceContainer color={services.color} image={services.imageData} imageFirst={services.imageFirst} text={services.text}></ServiceContainer>
                  </div>
                )
              })
            }
          </div>
        </Container>
        <Container
          customizeHeight="450"
        >
          <form method="post" onSubmit={onSubmitForm} className="p-4 bg-white rounded-md shadow-md shadow-white gap-5 w-2/5 h-full flex flex-col items-center">
            <div className="w-full flex flex-col items-center justify-center gap-5">
              <InfoTitle>Entre em contato</InfoTitle>
              <InfoText>Pronto para transformar sua visão em realidade? Deixe-nos ajudá-lo a alcançar o sucesso! Preencha o formulário abaixo e comece sua jornada conosco hoje mesmo</InfoText>
            </div>
            <div className="w-[500px] flex gap-3">
              <span className="h-full flex items-end">
                <Mail />
              </span>
              <TextField className="w-full" label="Email" variant="standard" required
                onChange={(event) =>
                  setCostumerData((prevData) => ({
                    ...prevData,
                    email: event.target.value
                  }))} />
            </div>
            <div className="w-[500px] flex gap-3">
              <span className="h-full flex items-end">
                <User />
              </span>
              <TextField className="w-full" label="Nome" variant="standard" required
                onChange={(event) =>
                  setCostumerData((prevData) => ({
                    ...prevData,
                    name: event.target.value
                  }))} />
            </div>
            <div className="w-[500px] flex gap-3">
              <span className="h-full flex items-end">
                <Phone />
              </span>
              <TextField className="w-full" label="Telefone para contato" variant="standard" required
                onChange={(event) =>
                  setCostumerData((prevData) => ({
                    ...prevData,
                    cellPhone: event.target.value
                  }))} />
            </div>

            <button className="rounded-xl shadow-md shadow-white w-[200px] p-3 h-[100px] bg-[--header-primary-color] hover:bg-[--button-primary-color-hover]">
              <span className="text-white">Enviar dados</span>
            </button>
          </form>
        </Container>
      </section>
      <footer className="w-full h-[200px] border-t-[1px] border-[#f6f6f6] bg-white flex items-center justify-center">

      </footer>
    </MainContainer>
  );
}
