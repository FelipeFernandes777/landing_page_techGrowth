import { ReactNode } from "react"


interface ContainerProps {
  children: ReactNode
  customizeHeight: string
  bg_color?: string
}

export default function Container({ children, bg_color, customizeHeight }: ContainerProps) {
  return (
    <div className="w-full p-3 flex flex-col justify-center items-center gap-5" style={{ height: `${customizeHeight}px`, backgroundColor: bg_color }}>
      {children}
    </div>
  )
}
