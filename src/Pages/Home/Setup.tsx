import { useState } from "react";
import { Button, Input } from "@material-tailwind/react";
import { GYM_LOCAL_USER_INFO } from "../../const";
import { TGymUser } from "../../types";

type TSetup = {
  setupComplete: (userInfo: TGymUser) => void;
};

export const Setup = ({ setupComplete }: TSetup) => {
  const [gymCode, setGymCode] = useState("G");
  const [name, setName] = useState("");

  const userInfo = {
    code: gymCode,
    name,
  };

  const handleSaveInfo = () => {
    localStorage.setItem(GYM_LOCAL_USER_INFO, JSON.stringify(userInfo));
    setupComplete(userInfo);
  };
  //   const [profilePic, setProfilePic] = useState("");

  //   const IMGUR_ACCESS_TOKEN = process.env.IMGUR_ACCESS_TOKEN;

  //   const avatarPlaceHolder =
  //     "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png";

  //   const upload = async (e) => {
  //     console.warn(e.target.files);
  //     const files = e.target.files;
  //     const formData = new FormData();
  //     formData.append("file", files[0]);
  //     await fetch("https://api.imgur.com/3/image", {
  //       method: "POST",
  //       headers: {
  //         Authorization: "Client-ID 7d8f896c3481cbb",
  //       },
  //       body: formData,
  //     })
  //       .then((res) => alert("image uploaded") && console.log(res)) // Handling success
  //       .catch((err) => alert("Failed") && console.log(err)); // Handling error
  //   };

  const isDisabled = gymCode.length < 1 || name.length === 0;

  return (
    <div className="flex flex-col h-full gap-4 items-center">
      {/* <Avatar src={avatarPlaceHolder} />
      <input type="file" onChange={(e) => upload(e)} name="img" /> */}
      <Input
        variant="outlined"
        label="Gym code"
        value={gymCode}
        onChange={(e) => setGymCode(e.target.value)}
        crossOrigin={undefined}
      />
      <Input
        variant="outlined"
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        crossOrigin={undefined}
      />
      <Button onClick={handleSaveInfo} disabled={isDisabled} className="w-1/2">
        Save
      </Button>
    </div>
  );
};
