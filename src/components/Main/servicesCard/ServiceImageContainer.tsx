export interface ServiceImageContainerProps {
  url: string,
  alt: string,
}


export default function ServiceImageContainer({ alt, url }: ServiceImageContainerProps) {
  return (
    <div className="w-4/5 !h-full overflow-hidden rounded-md">
      <img src={url} alt={alt} className="w-full bg-cover" />
    </div>
  )
}
