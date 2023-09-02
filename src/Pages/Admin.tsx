import { useParams } from "react-router-dom";
import { TGymUser } from "../types";

export const Admin = () => {
  const { code, name } = useParams() as TGymUser;

  return (
    <div className="flex flex-col h-full gap-4 items-center">
      <p>Code: {code}</p>
      <p>Name: {name}</p>
    </div>
  );
};
