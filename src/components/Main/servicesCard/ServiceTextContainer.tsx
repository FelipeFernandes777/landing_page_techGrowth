import { ReactNode } from "react";

interface ServiceTextContainerProps {
  children: ReactNode
}

export default function ServiceTextContainer({ children }: ServiceTextContainerProps) {
  return (
    <div className="w-full h-full p-5 flex items-center justify-center">
      <span className="inline-block">
        {children}
      </span>
    </div>
  )
}
