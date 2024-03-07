import { ReactNode } from "react";

interface MainContainerProps {
  children: ReactNode
}

export function MainContainer({ children }: MainContainerProps) {
  return (
    <main className="max-w-screen min-h-screen">
      {children}
    </main>
  )
}
