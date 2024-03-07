// import { TextField } from "@mui/material";
import { HeaderContainer } from "./HeaderContainer";

export function HeaderComponent() {
  return (
    <HeaderContainer>
      <div className="w-full flex items-center justify-center h-[11%] bg-[--header-primary-color] logo_container relative">
        Logo
      </div>
      <div className="w-full h-[89%] flex gap-14 items-center justify-center bg-[--header-primary-color] text-[#f6f6f6] font-bold flex-col relative">
        <div className="w-full h-full absolute imageHeader">
        </div>
        <div className="flex flex-col gap-4 relative">
          <span className="text-[36px] font-bold self-center">Seja bem vindo(a)</span>
          <span className="font-bold">Tech Growth, focada em resolução de problemas para a sua empresa.</span>
        </div>
        <div></div>
        <div></div>
      </div>
    </HeaderContainer>
  )
}
