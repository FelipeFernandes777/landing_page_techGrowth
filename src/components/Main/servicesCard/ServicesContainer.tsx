import ServiceImageContainer, { ServiceImageContainerProps } from "./ServiceImageContainer"
import ServiceTextContainer from "./ServiceTextContainer"

interface ServiceContainerProps {
  image: ServiceImageContainerProps
  imageFirst: boolean
  color?: string,
  text: string
}

export default function ServiceContainer({ image, imageFirst, color, text }: ServiceContainerProps) {
  return (
    <div className="w-full h-[190px] flex gap-2 shadow-md rounded-md shadow-[#f6f6f6] overflow-hidden" style={{ backgroundColor: color != 'white' ? color : 'white' }}>
      {
        imageFirst === true ? (
          <div className="w-full !-max-h-full flex gap-2 shadow-md rounded-md shadow-[#f6f6f6] overflow-hidden">
            <ServiceImageContainer alt={image.alt} url={image.url}></ServiceImageContainer>
            <ServiceTextContainer>{text}</ServiceTextContainer>
          </div>
        ) : (
          <div className="w-full !-max-h-full flex gap-2 shadow-md rounded-md shadow-[#f6f6f6]">
            <ServiceTextContainer>{text}</ServiceTextContainer>
            <ServiceImageContainer alt={image.alt} url={image.url}></ServiceImageContainer>
          </div>
        )
      }
    </div>
  )
}
