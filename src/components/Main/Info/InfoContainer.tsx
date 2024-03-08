import { ReactNode } from "react"


interface InfoContainerProps {
  children: ReactNode
  customizeHeight: string
  bg_color?: string
}

export default function infoContainer({ children, bg_color, customizeHeight }: InfoContainerProps) {
  return (
    <div className="w-full p-3 flex flex-col justify-center items-center gap-5" style={{ height: `${customizeHeight}px`, backgroundColor: bg_color }}>
      {children}
    </div>
  )
}

