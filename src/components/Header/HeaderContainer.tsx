import { ReactNode } from "react"

interface HeaderContainerProps {
  children: ReactNode
}

export function HeaderContainer({ children }: HeaderContainerProps) {

  return (
    <header className="w-full h-[800px] relative" >
      {children}
    </header >
  )
}
