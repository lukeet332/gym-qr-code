import { ReactNode } from "react";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col h-full w-full m-0 p-0">
      <div className="flex p-4 bg-[#2e323f]">
        <img
          className="max-w-[125px] max-h-[46px]"
          src="https://fitnessclub247.com/wp-content/uploads/2017/04/logo-1.png"
          alt="24/7 Fitness Club"
        />
        <button></button>
      </div>
      <div className="flex flex-col p-4">{children}</div>
    </div>
  );
};
