import { useState } from "react";
import { GYM_LOCAL_USER_INFO } from "../../const";
import { Setup } from "./Setup";
import { TGymUser } from "../../types";
import QRCode from "react-qr-code";

export const Home = () => {
  const userInfoLocalStorage =
    localStorage.getItem(GYM_LOCAL_USER_INFO) ??
    JSON.stringify({
      code: "",
      name: "",
    });
  const [userInfo, setUserInfo] = useState<TGymUser>(
    JSON.parse(userInfoLocalStorage)
  );

  if (userInfo.code.length === 0)
    return <Setup setupComplete={(userInfo) => setUserInfo(userInfo)} />;

  const redirectUrl = `${window.location.origin}/admin/${userInfo.code}/${userInfo.name}`;

  return (
    <div className="flex">
      <QRCode className="m-auto" value={redirectUrl} viewBox={`0 0 150 150`} />
    </div>
  );
};
